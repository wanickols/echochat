class WebSocketService {
    private socket: WebSocket | null = null;
    private url: string;

    constructor(url: string) {
        this.url = url;
    }

    connect(onMessage: (data: string) => void, onClose?: () => void) {
        console.log("Connecting...", this.url)
        this.socket = new WebSocket(this.url);

        this.socket.onopen = () => {
            console.log("Connected to WebSocket server");
            this.socket?.send("Hello Server!");
        };
        this.socket.onmessage = (event) => onMessage("message: " + event.data);
        this.socket.onerror = (error) => console.error("WebSocket error:", error);
        this.socket.onclose = () => {
            console.log("WebSocket closed");
            if (onClose) onClose();
        };
    }

    sendMessage(message: string) {
        console.log("Sending Message: ", message)
        if (this.socket && this.socket.readyState === WebSocket.OPEN) {
            this.socket.send(message);
        } else {
            console.warn("WebSocket is not open. Message not sent.");
            console.log(this.socket)
        }
    }

    close() {
        this.socket?.close();
    }
}

export default WebSocketService;
