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
    function updateDays() {
        birthDay.innerHTML = "";
        let daysInMonth = new Date(birthYear.value, birthMonth.value, 0).getDate();
        for (let i = 1; i <= daysInMonth; i++) {
            let option = document.createElement("option");
            option.value = i;
            option.textContent = i;
            birthDay.appendChild(option);
        }
    }
    birthYear.addEventListener("change", updateDays);
    birthMonth.addEventListener("change", updateDays);
    updateDays();

    // 診断開始ボタン
    document.getElementById("start-button").addEventListener("click", function() {
        alert("Diagnosis started!");
    });

    // UNLOCKボタン
    document.querySelector(".unlock-btn").addEventListener("click", function() {
        alert("Unlocking full prediction...");
    });

    // データ解析のアニメーション（左側）
    function updateMatrix() {
        let matrixData = "";
        for (let i = 0; i < 20; i++) {
            matrixData += Math.floor(Math.random() * 2);
        }
        document.getElementById("matrix-data").textContent = matrixData;
    }
    setInterval(updateMatrix, 500);
});