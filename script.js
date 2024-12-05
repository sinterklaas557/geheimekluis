function checkPassword() {
    const juisteCode = "geheim123"; // Juiste code
    const ingevoerdeCode = document.getElementById("passwordInput").value;

    if (ingevoerdeCode === juisteCode) {
        const mainContainer = document.getElementById("mainContainer");
        const secretContainer = document.getElementById("secretContainer");

        // Voeg fade-out toe aan mainContainer
        mainContainer.classList.remove("visible");
        mainContainer.classList.add("verborgen");

        // Toon fade-in voor secretContainer
        setTimeout(() => {
            secretContainer.classList.remove("verborgen");
            secretContainer.classList.add("visible");
        }, 1500); // Wacht tot fade-out is voltooid
    } else {
        alert("Onjuiste code. Probeer opnieuw!");
    }
}
