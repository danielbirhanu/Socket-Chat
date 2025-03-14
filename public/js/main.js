const chatForm = document.getElementById("chat-form");
const chatMessage = document.querySelector('.chat-messages')

const socket = io();

socket.on("message", (message) => {
  outPutMessage(message);

  chatMessage.scrollTop = chatMessage.scrollHeight
});

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const msg = e.target.elements.msg.value;
  socket.emit("chatMessage", msg);
});

function outPutMessage(message) {
  const div = document.createElement("div");
  div.classList.add("message");
  div.innerHTML = `<p class="meta">Brad <span>9:12pm</span></p>
            <p class="text">
              ${message}
            </p>`;
  document.querySelector(".chat-messages").appendChild(div);
}
