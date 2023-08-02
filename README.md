# Fake_News_detector
I have created a fake news detector using html, css, js. It was a basic front-end project on web development. 
I have used html-5 for basic structure of the project
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta
     name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fake News Detector</title>
    <link rel="stylesheet" href="task_1.css">
</head>
<body>
    <div class="container">
        <h1>Fake News Detector</h1>
        <div class="input-area">
            <textarea id="news-content" placeholder="Write your Article here!!...."></textarea>
            <button id="detect-button" style="margin-left: 40%;margin-right: 40%;margin-top: 5%;">Detect</button>
        </div>
        <div id="result" class="result-box">.....</div>
    </div>
    <script src="task_1.js"></script>
</body>
</html>


#### css
body {
    font-family: 'Helvetica Neue', Arial, sans-serif;
    background: linear-gradient(90deg, #ff6699, #0099cc);
    margin: 0;
    padding: 0;
}

.container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: transparent;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
}

h1 {
    text-align: center;
    color: linear-gradient(90deg, #03f8fc,#89a4f5);
    margin-bottom: 20px;
}

.input-area {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}

textarea {
    width: 100%;
    height: 150px;
    resize: vertical;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
}

button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.2s ease;
}

button:hover {
    background-color: #0056b3;
}

.result-box {
    padding: 10px;
    background-color: transparent;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
    display: none;
    color:cornsilk;
}


## Js
document.getElementById("detect-button").addEventListener("click", async () => {
    const newsContent = document.getElementById("news-content").value;

    if (newsContent.trim() === "") {
        alert("Please enter or paste the news article content.");
        return;
    }

    // Simulate fake news detection - Replace this with your real implementation
    const result = await fakeNewsDetectionAPI(newsContent);

    displayResult(result);
});

async function fakeNewsDetectionAPI(newsContent) {
    // Simulate the fake news detection process
    // Replace this with your real implementation using API or NLP models
    const isFake = Math.random() < 0.5;
    return isFake ? "This news is likely fake." : "This news seems to be real.";
}

function displayResult(result) {
    const resultElement = document.getElementById("result");
    resultElement.innerText = result;
    resultElement.style.display = "block";
}
