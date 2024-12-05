function checkPassword() {
    const juisteCode = "geheim123"; // Juiste code
    const ingevoerdeCode = document.getElementById("passwordInput").value;

    if (ingevoerdeCode === juisteCode) {
        // Voeg fade-out toe aan de oude inhoud
        const fadeElements = document.querySelectorAll(".fade-content");
        fadeElements.forEach(element => {
            element.classList.add("fade-out");
        });

        // Wacht 1.5 seconden voordat de nieuwe inhoud zichtbaar wordt
        setTimeout(() => {
            const secretContent = document.getElementById("secretContent");
            secretContent.classList.remove("verborgen");
            secretContent.classList.add("fade-in");
        }, 1500); // Wacht tot fade-out animatie is voltooid
    } else {
        alert("Onjuiste code. Probeer opnieuw!");
    }
}
