# Chat Backend

## Description

This project is a WebSocket-based chat server built in Go. It supports real-time messaging, user identification, and extensible features such as chat rooms and message history. It is designed for learning and experimentation, with plans for future integration into larger projects like a video chat platform.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contribution](#contribution)
- [License](#license)

## Installation

1. Install [Go](https://golang.org/dl/).
2. Clone the repository:
   
   ``` git clone https://github.com/wanickols/echochat.git```
  

3. Navigate to the project directory:
cd chat-backend

## Usage
1. Run the server:
go run cmd/server.go
2. Open a WebSocket client (e.g., WebSocket King or a simple HTML page) and connect to:
```ws://localhost:8080/ws```

## Features
Real-time messaging
Broadcast support
User identification
Extensible room functionality


This version outlines the chat backend project and includes sections you can update as features are added.

## Contribution
Contributions are welcome! Fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See LICENSE for more information.
---