function checkPassword() {
    const juisteCode = "1968-1984-1987"; // Juiste code
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

            // Scroll automatisch naar boven
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }, 1500); // Wacht tot fade-out is voltooid
    } else {
        alert("Onjuiste code. Probeer opnieuw!");
    }
}
