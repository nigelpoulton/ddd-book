package main

import (
	"strings"
	"unicode"
)

func translate(msg string) string {
	msg = strings.ToLower(msg)
	var b strings.Builder
	for _, char := range msg {
		if unicode.IsLetter(char) {
			switch char {
			case 'a', 'e', 'i', 'o', 'u', 'y', 'å', 'ä', 'ö':
				b.WriteRune(char)
			default:
				b.WriteRune(char)
				b.WriteRune('o')
				b.WriteRune(char)
			}
			continue
		}
		if unicode.IsSpace(char) {
			b.WriteRune(' ')
		}
	}
	return b.String()
}
