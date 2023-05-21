package main

import (
	"fmt"
	"os"
)

func main() {
	err := ping()
	if err != nil {
		fmt.Println(err.Error())
		os.Exit(1)
	}
	err = start()
	if err != nil {
		fmt.Println(err.Error())
		os.Exit(1)
	}
}
