package models

// import (

// )

type Todo struct {
	id string
	title string
}

func NewTodo(id, title) *Todo {
	return &Todo{
		id: id,
		title: title,
	}
}