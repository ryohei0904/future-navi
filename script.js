const messages = ["READY TO BEGIN?", "ANALYZING...", "WELCOME HUMAN."];
let index = 0;

function changeText() {
    const textElement = document.querySelector(".animated-text");
    textElement.textContent = messages[index];
    index = (index + 1) % messages.length;
}

// 2秒ごとにメッセージを変更
setInterval(changeText, 2000);