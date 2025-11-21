function generateKey() {
    const now = new Date();

    // Convert current time to Korea time (UTC+9)
    const koreaOffsetMinutes = 9 * 60;
    const localOffsetMinutes = now.getTimezoneOffset();
    const koreaTime = new Date(now.getTime() + (koreaOffsetMinutes + localOffsetMinutes) * 60000);

    const day = koreaTime.getDate();
    const month = koreaTime.getMonth() + 1;

    // 24-hour hour value
    const hour24 = koreaTime.getHours();

    // 12-hour hour value
    let hour12 = hour24 % 12;
    if (hour12 === 0) hour12 = 12;

    // Calculate both keys
    const key24 = 1350900 + (hour24 + day + month);
    const key12 = 1350900 + (hour12 + day + month);

    // Display both
    const displayText = `Here's the codes:\n${key24}\n${key12}`;
    document.getElementById("key").innerText = displayText;
}

// Generate button
document.getElementById("generateBtn").addEventListener("click", generateKey);

// Copy button
document.getElementById("copyBtn").addEventListener("click", () => {
    const text = document.getElementById("key").innerText;
    navigator.clipboard.writeText(text).then(() => {
        alert("Codes copied to clipboard!");
    });
});