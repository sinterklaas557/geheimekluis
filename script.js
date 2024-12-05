function checkPassword() {
    const juisteCode = "geheim123"; // Juiste code
    const ingevoerdeCode = document.getElementById("passwordInput").value;

    if (ingevoerdeCode === juisteCode) {
        const mainContainer = document.getElementById("mainContainer");
        const secretContainer = document.getElementById("secretContainer");

        // Fade-out oude inhoud
        mainContainer.classList.add("fade-out");

        // Toon de nieuwe inhoud na fade-out
        setTimeout(() => {
            mainContainer.classList.add("verborgen"); // Verberg oude inhoud
            secretContainer.classList.remove("verborgen");
            secretContainer.classList.add("fade-in"); // Fade-in nieuwe inhoud
        }, 1500); // Duur van de fade-out
    } else {
        alert("Onjuiste code. Probeer opnieuw!");
    }
}
