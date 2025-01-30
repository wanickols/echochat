<script setup lang="ts">
import {  onMounted, onUnmounted, ref } from "vue";
import WebSocket from "@tauri-apps/plugin-websocket";

const messages = ref<string[]>([]);
const ws = ref<any>(null);

interface Message {
    type: number;
    body: string;
}

const connectWebSocket = async () => {
    try {
        ws.value = await WebSocket.connect("ws://127.0.0.1:9000/ws");

        ws.value.addListener((event: { data: string; type: string }) => {
            // Parse the data to get the JSON object
            const message: Message = JSON.parse(event.data);

            console.log("Received Message:", message.body); 
            messages.value.push(message.body); 
        });
    } catch (error) {
        console.error("WebSocket connection failed:", error);
    }
};

onMounted(async () => {
    connectWebSocket();
});

const sendMessage = () => {
    ws.value?.send("Hello from frontend!");
};

onUnmounted(() => {
    
    ws.value?.disconnect();
});
</script>

<template>
    <div>
        <button class="btn btn-primary" @click="sendMessage">Send Message</button>
        <ul>
            <li class="chat-bubble" v-for="msg in messages" :key="msg">{{ msg }}</li>
        </ul>
    </div>
</template>
