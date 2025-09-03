document.addEventListener("DOMContentLoaded", function () {
  const checkButton = document.getElementById("check-color-btn");
  const colorInput = document.getElementById("color-input");
  const indicatorSelect = document.getElementById("indicator-select");
  const resultText = document.getElementById("result-text");
  const colorBox = document.getElementById("color-box");
  const indicatorTableBody = document.querySelector("#indicator-table tbody");

  const indicatorData = {
    telang: {
      "1-5": { desc: "merah", color: "#FF0000" },
      "3-5": { desc: "merah keunguan", color: "#8B008B" },
      "9-13": { desc: "hijau", color: "#008000" },
    },
    bugenvil: {
      "1-5": { desc: "merah", color: "#FF0000" },
      "9-13": { desc: "kuning", color: "#FFFF00" },
    },
    "kulit-buah-naga": {
      "1-2": { desc: "merah muda", color: "#FF69B4" },
      "3-5": { desc: "merah keunguan", color: "#9932CC" },
      "9-11": { desc: "biru keunguan", color: "#8A2BE2" },
      13: { desc: "kuning", color: "#FFD700" },
    },
  };

  // Fungsi untuk memperbarui tabel indikator
  function updateIndicatorTable(indicatorKey) {
    const data = indicatorData[indicatorKey];
    indicatorTableBody.innerHTML = ""; // Bersihkan tabel

    if (data) {
      for (const phRange in data) {
        const row = document.createElement("tr");
        const colorCell = document.createElement("td");
        const phCell = document.createElement("td");

        const colorCircle = document.createElement("div");
        colorCircle.style.width = "20px";
        colorCircle.style.height = "20px";
        colorCircle.style.borderRadius = "50%";
        colorCircle.style.backgroundColor = data[phRange].color;
        colorCircle.style.display = "inline-block";
        colorCircle.style.marginRight = "8px";

        colorCell.textContent = data[phRange].desc;
        colorCell.prepend(colorCircle);
        phCell.textContent = phRange;

        row.appendChild(colorCell);
        row.appendChild(phCell);
        indicatorTableBody.appendChild(row);
      }
    }
  }

  // Panggil fungsi ini saat halaman dimuat untuk menampilkan tabel awal
  updateIndicatorTable(indicatorSelect.value);

  // Tambahkan event listener untuk memperbarui tabel saat pilihan indikator berubah
  indicatorSelect.addEventListener("change", function () {
    updateIndicatorTable(this.value);
    // Reset hasil pencarian saat indikator berubah
    resultText.textContent = "Hasil akan muncul di sini";
    colorBox.style.backgroundColor = "#ccc";
    colorInput.value = "";
  });

  checkButton.addEventListener("click", function () {
    const selectedIndicator = indicatorSelect.value;
    const inputColor = colorInput.value.toLowerCase().trim();
    let found = false;

    if (inputColor === "") {
      resultText.textContent = "Silakan masukkan deskripsi warna.";
      colorBox.style.backgroundColor = "#ccc";
      return;
    }

    const indicator = indicatorData[selectedIndicator];

    if (indicator) {
      for (const phRange in indicator) {
        if (indicator[phRange].desc === inputColor) {
          resultText.textContent = `Warna "${inputColor}" menunjukkan pH sekitar ${phRange}.`;
          colorBox.style.backgroundColor = indicator[phRange].color;
          found = true;
          break;
        }
      }
    }

    if (!found) {
      resultText.textContent = `Nilai pH untuk warna "${inputColor}" tidak ditemukan pada indikator ini.`;
      colorBox.style.backgroundColor = "#ccc";
    }
  });
});
