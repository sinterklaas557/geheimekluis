function checkPassword() {
    const juisteCode = "geheim123"; // Stel hier jouw gewenste code in
    const ingevoerdeCode = document.getElementById("passwordInput").value;

    if (ingevoerdeCode === juisteCode) {
        // Zorg ervoor dat succesbericht zichtbaar wordt
        const successMessage = document.getElementById("successMessage");
        successMessage.classList.remove("verborgen");

        // Toon de geheime afbeelding met fade-in effect
        const geheimAfbeelding = document.querySelector(".geheim-afbeelding");
        geheimAfbeelding.classList.add("fade-in");

        // Toon de geheime tekst na de afbeelding
        setTimeout(() => {
            const secretText = document.getElementById("secretText");
            secretText.classList.add("fade-in");
            secretText.classList.remove("verborgen");
        }, 2000); // Wacht 2 seconden zodat de afbeelding eerst fade-in doet
    } else {
        alert("Onjuiste code. Probeer opnieuw!");
    }
}
