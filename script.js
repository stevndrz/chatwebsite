// Function to send a message
function sendMessage() {
    var messageInput = document.getElementById("message-input");
    var message = messageInput.value;
    if (message.trim() !== "") {
        appendMessage("You", message);
        messageInput.value = "";
        // Save message to local storage or database here
    }
}

// Function to append a message to the chat box
function appendMessage(sender, message) {
    var chatBox = document.getElementById("chat-box");
    var messageElement = document.createElement("div");
    messageElement.innerHTML = "<strong>" + sender + ":</strong> " + message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Function to load previous messages from local storage or database
// Modify this function to load messages when the page loads
function loadMessages() {
    // Dummy example
    appendMessage("Friend", "Hello!");
    appendMessage("You", "Hi there!");
}

// Load previous messages when the page loads
window.onload = function() {
    loadMessages();
    
    // Add event listener for pressing Enter key
    var messageInput = document.getElementById("message-input");
    messageInput.addEventListener("keypress", function(event) {
        if (event.keyCode === 13) { // Enter key code
            sendMessage();
        }
    });
};
