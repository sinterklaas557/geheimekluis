function checkPassword() {
    const juisteCode = "geheim123"; // Juiste code
    const ingevoerdeCode = document.getElementById("passwordInput").value;

    if (ingevoerdeCode === juisteCode) {
        // Voeg fade-out toe aan de oude inhoud
        const fadeElements = document.querySelectorAll(".fade-content");
        fadeElements.forEach(element => {
            element.classList.add("fade-out");
        });

        // Toon de nieuwe inhoud met een geoptimaliseerde fade-in
        const secretContent = document.getElementById("secretContent");
        secretContent.classList.remove("verborgen");
        secretContent.classList.add("fade-in");

        // Verberg oude inhoud volledig na de overgang
        setTimeout(() => {
            document.getElementById("mainContainer").style.display = "none";
        }, 1500); // Wacht tot fade-out animatie is voltooid
    } else {
        alert("Onjuiste code. Probeer opnieuw!");
    }
}
