function checkPassword() {
    const juisteCode = "geheim123"; // Stel hier jouw gewenste code in
    const ingevoerdeCode = document.getElementById("passwordInput").value;

    if (ingevoerdeCode === juisteCode) {
        // Toon succesbericht
        const successMessage = document.getElementById("successMessage");
        successMessage.classList.remove("verborgen");

        // Toon de geheime afbeelding
        const geheimAfbeelding = document.querySelector(".geheim-afbeelding");
        geheimAfbeelding.classList.add("fade-in");

        // Toon de geheime tekst na de afbeelding
        setTimeout(() => {
            const secretText = document.getElementById("secretText");
            secretText.classList.add("fade-in");
            secretText.classList.remove("verborgen");
        }, 2000);
    } else {
        alert("Onjuiste code. Probeer opnieuw!");
    }
}
