function checkPassword() {
    const juisteCode = "geheim123"; // Juiste code
    const ingevoerdeCode = document.getElementById("passwordInput").value;

    if (ingevoerdeCode === juisteCode) {
        // Toon de geheime inhoud
        const secretContent = document.getElementById("secretContent");
        secretContent.classList.remove("verborgen");
    } else {
        alert("Onjuiste code. Probeer opnieuw!");
    }
}
