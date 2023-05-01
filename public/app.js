const socket = io();

const messageForm = document.querySelector("#message-form");
const chatInput = messageForm.querySelector("input");
const messages = document.querySelector("#messages");

messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = chatInput.value;
  if (message.trim()) {
    socket.emit("sendMessage", message);
    chatInput.value = "";
  }
});

socket.on("message", (message) => {
  const messageElement = document.createElement("li");
  messageElement.textContent = message;
  messages.appendChild(messageElement);

 console.log("HÄR ÄR MEDDELANDET: ", message);
});
