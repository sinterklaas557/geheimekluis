function checkPassword() {
    const juisteCode = "geheim123"; // Stel hier jouw gewenste code in
    const ingevoerdeCode = document.getElementById("passwordInput").value;

    if (ingevoerdeCode === juisteCode) {
        // Toon de geheime inhoud
        const secretContent = document.getElementById("secretContent");
        secretContent.classList.remove("verborgen");

        // Voeg fade-in animatie toe aan de geheime afbeelding
        const geheimAfbeelding = document.querySelector(".geheim-afbeelding");
        geheimAfbeelding.classList.add("fade-in");

        // Maak de geheime tekst zichtbaar na de afbeelding
        setTimeout(() => {
            const secretText = document.getElementById("secretText");
            secretText.classList.add("fade-in");
            secretText.classList.remove("verborgen");
        }, 2000); // Wacht 2 seconden zodat de afbeelding eerst fade-in doet
    } else {
        alert("Onjuiste code. Probeer opnieuw!");
    }
}
