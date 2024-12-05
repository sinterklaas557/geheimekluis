function openKluis() {
    const juisteCode = "1234"; // Stel hier de kluiscode in
    const ingevoerdeCode = document.getElementById("codeInput").value;

    if (ingevoerdeCode === juisteCode) {
        document.getElementById("kluisInhoud").classList.remove("verborgen");
    } else {
        alert("Onjuiste code. Probeer opnieuw!");
    }
}
