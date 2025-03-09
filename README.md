<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AI診断 - 生年月日入力</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #0d1117;
            color: #fff;
            text-align: center;
            padding: 20px;
        }
        .chat-container {
            max-width: 400px;
            margin: auto;
            background: #161b22;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0px 0px 10px rgba(0, 255, 255, 0.5);
        }
        .chat-bubble {
            background: #1f6feb;
            padding: 10px;
            border-radius: 15px;
            text-align: left;
            margin: 10px 0;
        }
        .input-container {
            margin-top: 20px;
        }
        input {
            width: 80%;
            padding: 10px;
            border-radius: 5px;
            border: none;
            text-align: center;
            background: #222;
            color: #fff;
        }
        button {
            background: #00ccff;
            color: #000;
            padding: 10px 15px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 10px;
        }
        button:hover {
            background: #0099cc;
        }
    </style>
</head>
<body>
    <div class="chat-container">
        <div class="chat-bubble">🔮 こんにちは！私はAIアシスタント。あなたの未来を診断します。</div>
        <div class="chat-bubble">📅 まずは生年月日を教えてください！</div>
        <div class="input-container">
            <input type="date" id="birthdate" required>
            <button onclick="startDiagnosis()">診断開始！</button>
        </div>
    </div>

    <script>
        function startDiagnosis() {
            let birthdate = document.getElementById('birthdate').value;
            if (birthdate) {
                window.location.href = `diagnosis_result.html?dob=${birthdate}`;
            } else {
                alert('生年月日を入力してください！');
            }
        }
    </script>
</body>
</html>

