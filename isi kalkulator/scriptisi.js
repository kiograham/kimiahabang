document.addEventListener('DOMContentLoaded', () => {
    const inputKonsentrasi = document.getElementById('input-konsentrasi');
    const resultDisplay = document.getElementById('result-display');
    const buttons = document.querySelectorAll('.calc-btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const action = button.dataset.action;
            const konsentrasi = parseFloat(inputKonsentrasi.value);

            if (action === 'calculate') {
                if (isNaN(konsentrasi) || konsentrasi <= 0) {
                    resultDisplay.textContent = "Masukkan nilai > 0";
                    return;
                }
                // Hitung pH dari konsentrasi H+
                const pH = -Math.log10(konsentrasi);
                resultDisplay.textContent = `pH = ${pH.toFixed(2)}`;
            } else if (action === 'poh') {
                if (isNaN(konsentrasi) || konsentrasi <= 0) {
                    resultDisplay.textContent = "Masukkan nilai > 0";
                    return;
                }
                // Hitung pOH dari konsentrasi OH-
                const pOH = -Math.log10(konsentrasi);
                const pH = 14 - pOH;
                resultDisplay.textContent = `pH = ${pH.toFixed(2)}`;
            } else if (action === 'reset') {
                inputKonsentrasi.value = '';
                resultDisplay.textContent = "pH = ?";
            }
        });
    });
});