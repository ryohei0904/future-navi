const messages = ["WELCOME HUMAN.", "ANALYZING...", "READY TO BEGIN?"];
let index = 0;

setInterval(() => {
    document.querySelector('.ai-message').textContent = messages[index];
    index = (index + 1) % messages.length;
}, 2000);