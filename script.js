document.addEventListener("DOMContentLoaded", function () {
    // 誕生日の選択肢を生成
    let yearSelect = document.getElementById("birth-year");
    let monthSelect = document.getElementById("birth-month");
    let daySelect = document.getElementById("birth-day");

    for (let i = new Date().getFullYear(); i >= 1900; i--) {
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

    function updateDays() {
        daySelect.innerHTML = "";
        let daysInMonth = new Date(yearSelect.value, monthSelect.value, 0).getDate();
        for (let i = 1; i <= daysInMonth; i++) {
            let option = document.createElement("option");
            option.value = i;
            option.textContent = i;
            daySelect.appendChild(option);
        }
    }
    monthSelect.addEventListener("change", updateDays);
    updateDays();

    // 診断開始ボタン
    document.getElementById("start-button").addEventListener("click", function () {
        alert("Diagnosis Started!");
    });

    // UNLOCKボタンの処理
    document.querySelector(".unlock-btn").addEventListener("click", function () {
        alert("Unlocking full prediction...");
    });

    // データ解析のアニメーション
    function updateMatrix() {
        let matrixData = "";
        for (let i = 0; i < 20; i++) {
            matrixData += Math.floor(Math.random() * 2);
        }
        document.querySelector(".data-stream").innerHTML = `<p>${matrixData}</p>`;
    }
    setInterval(updateMatrix, 500);
});