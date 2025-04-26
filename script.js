// Theme toggle
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Reveal sections on scroll
const sections = document.querySelectorAll("section");

function revealOnScroll() {
  const scrollY = window.scrollY + window.innerHeight;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY > sectionTop + 100) {
      section.classList.add("visible");
    }
  });
}

document.addEventListener("scroll", revealOnScroll);
document.addEventListener("DOMContentLoaded", revealOnScroll);

// ✅ Chat Assistant Functionality

// Toggle Chatbox open/close
document.getElementById('chat-btn').onclick = function() {
  var chatbox = document.getElementById('chatbox');
  chatbox.style.display = (chatbox.style.display === 'none' || chatbox.style.display === '') ? 'block' : 'none';
};

// Send Message
function sendMessage() {
  var input = document.getElementById('user-input');
  var messages = document.getElementById('chatbox-messages');

  if (input.value.trim() !== '') {
    // User message
    var userMessage = document.createElement('div');
    userMessage.classList.add('user-message');
    userMessage.textContent = input.value;
    messages.appendChild(userMessage);

    // Bot reply (Simple reply for now)
    var botReply = document.createElement('div');
    botReply.classList.add('bot-message');
    botReply.textContent = 'Thanks! I will get back to you.';
    messages.appendChild(botReply);

    // Reset input and scroll to bottom
    input.value = '';
    messages.scrollTop = messages.scrollHeight;
  }
}
