package main

import (
	"log"
	"context"
	"firebase.google.com/go"  
	"google.golang.org/api/option"
  )

  type Todo struct {
	  title string
	  description string
  }

  func main() {

	opt := option.WithCredentialsFile("secrets/serviceAccountKey.json")
	app, err := firebase.NewApp(context.Background(), nil, opt)

	client,err := app.Firestore(context.Background())
	if err != nil {
	  log.Fatalln(err)
	}

	todo := getTodo()
	log.Print(todo)
	result, err := client.Collection("todo").Doc("nxJW8nP7rBWkkmIj0juh").Set(context.Background(), todo)
	log.Print(todo)
	if err != nil {
		log.Fatalln(err)
	}
	log.Print(result)
	
	defer client.Close()
  }

  func getTodo() *Todo {
	todo := Todo{title: "Cat",description: "Meow"}

	return &todo
  }
