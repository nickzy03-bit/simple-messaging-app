let messages = JSON.parse(localStorage.getItem('messages')) || [];

const messageArea = document.getElementById('messageArea');
const messageInput = document.getElementById('messageInput');

function renderMessages() {
    messageArea.innerHTML = "";
    messages.forEach(msg => {
        const div = document.createElement('div');
        div.className = "message";
        div.textContent = msg;
        messageArea.appendChild(div);
    });

    messageArea.scrollTop = messageArea.scrollHeight;
}

function sendMessage() {
    const text = messageInput.value.trim();
    if (text === "") return;

    messages.push(text);
    messageInput.value = "";
    saveMessages();
    renderMessages();
}

function saveMessages() {
    localStorage.setItem('messages', JSON.stringify(messages));
}

// Render messages on first load
renderMessages();
