package main

import (
	"echochat/pkg/websocket"
	"fmt"
	"net/http"
)

func main() {
	fmt.Println("Echo Chattin'")
	setupRoutes()
	http.ListenAndServe(":9000", nil)
}

func setupRoutes() {
	//Make Pool
	pool := websocket.NewPool()
	go pool.Start()

	
	http.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request) {
		serveWS(pool, w, r)
	})
}

func serveWS(pool *websocket.Pool, w http.ResponseWriter, r *http.Request) {
	fmt.Println("websocket endpoint reached")

	conn, err := websocket.Upgrade(w, r)

	if err != nil {
		fmt.Fprintf(w, "%+v\n", err)
	}
	client := &websocket.Client{
		Conn: conn,
		Pool: pool,
	}
	pool.Register <- client
	client.Read()
}
