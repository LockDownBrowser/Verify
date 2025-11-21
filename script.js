function generateKey() {
    const now = new Date();

    // Convert current time to KST (UTC+9)
    const koreaOffsetMinutes = 9 * 60;
    const localOffsetMinutes = now.getTimezoneOffset();
    const koreaTime = new Date(now.getTime() + (koreaOffsetMinutes + localOffsetMinutes) * 60000);

    // Extract hour/day/month from Korean time
    const hour = koreaTime.getHours();        // ALWAYS 0–23 (24-hour based internally)
    const day = koreaTime.getDate();          // 1–31
    const month = koreaTime.getMonth() + 1;   // 1–12

    // Calculate sum
    const sum = hour + day + month;

    // Final secret key
    const secretKey = 1350900 + sum;

    // Display
    document.getElementById("key").innerText = "Secret Key: " + secretKey;
}

document.getElementById("generateBtn").addEventListener("click", generateKey);