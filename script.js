function checkPassword() {
    const juisteCode = "geheim123"; // Juiste code
    const ingevoerdeCode = document.getElementById("passwordInput").value;

    if (ingevoerdeCode === juisteCode) {
        // Voeg fade-out toe aan oude inhoud
        const fadeElements = document.querySelectorAll(".fade-content");
        fadeElements.forEach(element => {
            element.classList.add("fade-out");
        });

        // Na 1.5s fade-out, start fade-in
        setTimeout(() => {
            const secretContent = document.getElementById("secretContent");
            secretContent.classList.add("fade-in");
            secretContent.classList.remove("verborgen");
        }, 1500); // Wacht tot fade-out klaar is
    } else {
        alert("Onjuiste code. Probeer opnieuw!");
    }
}
