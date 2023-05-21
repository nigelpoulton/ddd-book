package main

import (
	"fmt"
	"strings"

	"github.com/charmbracelet/bubbles/textinput"
	"github.com/charmbracelet/bubbles/viewport"
	tea "github.com/charmbracelet/bubbletea"
	"github.com/charmbracelet/lipgloss"
)

func start() error {
	p := tea.NewProgram(initialModel(), tea.WithAltScreen())

	_, err := p.Run()
	return err
}

type (
	errMsg error
)

type model struct {
	viewport  viewport.Model
	messages  []string
	textinput textinput.Model
	exitHint  lipgloss.Style
	err       error
}

func initialModel() model {
	ti := textinput.New()
	ti.Placeholder = "Translate a message..."
	ti.Focus()

	ti.CharLimit = 42

	ti.Width = 42

	vp := viewport.New(42, 2)
	vp.SetContent(`Hit Enter to translate.`)
	vp.Style = lipgloss.NewStyle().
		BorderStyle(lipgloss.RoundedBorder()).
		BorderForeground(lipgloss.Color("69")).
		Padding(0, 1).
		MarginLeft(1)

	return model{
		textinput: ti,
		messages:  []string{},
		viewport:  vp,
		exitHint:  lipgloss.NewStyle().Faint(true).MarginLeft(1),
		err:       nil,
	}
}

func (m model) Init() tea.Cmd {
	return textinput.Blink
}

func (m model) Update(msg tea.Msg) (tea.Model, tea.Cmd) {
	var (
		tiCmd tea.Cmd
		vpCmd tea.Cmd
	)

	m.textinput, tiCmd = m.textinput.Update(msg)
	m.viewport, vpCmd = m.viewport.Update(msg)

	switch msg := msg.(type) {
	case tea.KeyMsg:
		switch msg.Type {
		case tea.KeyCtrlC, tea.KeyEsc:
			fmt.Println(m.textinput.Value())
			return m, tea.Quit
		case tea.KeyEnter:
			translated := getTranslation(m.textinput.Value())

			m.messages = append(
				m.messages,
				"Input: "+m.textinput.Value(),
				"Translation: "+translated,
			)
			m.viewport.SetContent(strings.Join(m.messages, "\n"))
			m.textinput.Reset()
			m.viewport.GotoBottom()
		}

	// We handle errors just like any other message
	case errMsg:
		m.err = msg
		return m, nil
	}

	return m, tea.Batch(tiCmd, vpCmd)
}

func (m model) View() string {
	return fmt.Sprintf(
		"\n%s\n%s\n",
		m.textinput.View(),
		m.viewport.View(),
	) + m.exitHint.Render("Ctrl+C to exit.")
}
