document.addEventListener("DOMContentLoaded", function() {
    // 生年月日の選択肢を生成
    const birthYear = document.getElementById("birth-year");
    const birthMonth = document.getElementById("birth-month");
    const birthDay = document.getElementById("birth-day");

    // 年の選択肢（1900年〜今年）
    for (let i = new Date().getFullYear(); i >= 1900; i--) {
        let option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        birthYear.appendChild(option);
    }

    // 月の選択肢（1〜12）
    for (let i = 1; i <= 12; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        birthMonth.appendChild(option);
    }

    // 日の選択肢（1〜31）
    for (let i = 1; i <= 31; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        birthDay.appendChild(option);
    }

    // 診断開始ボタン
    document.getElementById("start-button").addEventListener("click", function() {
        alert("Diagnosis started!");
    });

    // UNLOCKボタン
    document.querySelector(".unlock-btn").addEventListener("click", function() {
        alert("Unlocking full prediction...");
    });
});