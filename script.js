document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById("start-button");

    startButton.addEventListener("click", () => {
        alert("Diagnosis started!");
        // 本番環境では window.location.href = "診断結果ページ.html";
    document.addEventListener("DOMContentLoaded", function () {
    const yearSelect = document.getElementById("birth-year");
    const monthSelect = document.getElementById("birth-month");
    const daySelect = document.getElementById("birth-day");

    // 年を追加（現在の年から1900年まで）
    for (let y = new Date().getFullYear(); y >= 1900; y--) {
        let option = document.createElement("option");
        option.value = y;
        option.textContent = y;
        yearSelect.appendChild(option);
    }

    // 月を追加（1月～12月）
    for (let m = 1; m <= 12; m++) {
        let option = document.createElement("option");
        option.value = m;
        option.textContent = m;
        monthSelect.appendChild(option);
    }

    // 日を追加
    function updateDays() {
        daySelect.innerHTML = "";
        let daysInMonth = new Date(yearSelect.value, monthSelect.value, 0).getDate();
        for (let d = 1; d <= daysInMonth; d++) {
            let option = document.createElement("option");
            option.value = d;
            option.textContent = d;
            daySelect.appendChild(option);
        }
    }

    yearSelect.addEventListener("change", updateDays);
    monthSelect.addEventListener("change", updateDays);

    // 初期化
    updateDays();
});
    });
});
