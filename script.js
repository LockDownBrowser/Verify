function generateKey() {
    const now = new Date();

    // Convert to Korea time (UTC+9)
    const koreaOffset = 9 * 60; // minutes
    const koreaTime = new Date(now.getTime() + (koreaOffset + now.getTimezoneOffset()) * 60000);

    const hour = koreaTime.getHours();
    const day = koreaTime.getDate();
    const month = koreaTime.getMonth() + 1; // 0-indexed

    const sum = hour + day + month;
    const secretKey = 1350900 + sum;

    document.getElementById("key").innerText = "Secret Key: " + secretKey;
}

// Add click listener
document.getElementById("generateBtn").addEventListener("click", generateKey);

// Optional: generate on page load
generateKey();