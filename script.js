document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById("start-button");

    startButton.addEventListener("click", () => {
        alert("Diagnosis started!");
        // 本番環境では window.location.href = "診断結果ページ.html";
    });
});
