document.addEventListener("DOMContentLoaded", function () {
    // 誕生日の選択肢を生成
    let yearSelect = document.getElementById("birth-year");
    let monthSelect = document.getElementById("birth-month");
    let daySelect = document.getElementById("birth-day");

    for (let i = 2025; i >= 1900; i--) {
        let option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        yearSelect.appendChild(option);
    }

    for (let i = 1; i <= 12; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        monthSelect.appendChild(option);
    }

    for (let i = 1; i <= 31; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        daySelect.appendChild(option);
    }

    // 診断開始ボタン
    document.getElementById("start-button").addEventListener("click", function () {
        alert("Diagnosis Started!");
    });

    // アンロックボタン
    document.querySelector(".unlock-btn").addEventListener("click", function () {
        alert("Unlocking full prediction...");
    });
});