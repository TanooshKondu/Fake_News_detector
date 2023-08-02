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
