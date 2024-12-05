function checkPassword() {
    const juisteCode = "geheim123"; // Juiste code
    const ingevoerdeCode = document.getElementById("passwordInput").value;

    if (ingevoerdeCode === juisteCode) {
        // Verberg alles behalve de geheime inhoud
        document.querySelector(".wachtwoord-container").style.display = "none";
        document.querySelector(".kluis-afbeelding").style.display = "none";

        // Toon de geheime inhoud met fade-in
        const secretContent = document.getElementById("secretContent");
        secretContent.classList.add("fade-in");
    } else {
        alert("Onjuiste code. Probeer opnieuw!");
    }
}
