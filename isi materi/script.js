document.addEventListener("DOMContentLoaded", () => {
  // Data untuk setiap materi
  const materiData = {
    "asam-basa": {
      title: "Teori Asam Basa",
      content: `
                <p>Teori asam basa adalah konsep fundamental dalam kimia yang membantu mengklasifikasikan zat berdasarkan sifat-sifatnya. Ada tiga teori utama yang sering digunakan:</p>
                <br>
                <h4>1. Teori Arrhenius</h4>
                <p>Teori ini dikemukakan oleh Svante Arrhenius. Ia mendefinisikan:</p>
                <ul>
                    <li><strong>Asam:</strong> Zat yang melepaskan ion hidrogen (H^+) saat dilarutkan dalam air. Contoh: HCl \rightarrow H^+ + Cl^-.</li>
                    <li><strong>Basa:</strong> Zat yang melepaskan ion hidroksida (OH^-) saat dilarutkan dalam air. Contoh: NaOH \rightarrow Na^+ + OH^-.</li>
                </ul>
                <br>
                <h4>2. Teori Brønsted-Lowry</h4>
                <p>Dikembangkan oleh Johannes Brønsted dan Thomas Lowry, teori ini lebih luas dari Arrhenius:</p>
                <ul>
                    <li><strong>Asam:</strong> Donatur proton (H^+).</li>
                    <li><strong>Basa:</strong> Akseptor proton (H^+).</li>
                </ul>
                <p>Reaksi ini melibatkan transfer proton, menciptakan pasangan asam-basa konjugasi.</p>
                <br>
                <h4>3. Teori Lewis</h4>
                <p>Teori yang paling umum, dikembangkan oleh G.N. Lewis, berfokus pada elektron:</p>
                <ul>
                    <li><strong>Asam:</strong> Akseptor pasangan elektron.</li>
                    <li><strong>Basa:</strong> Donatur pasangan elektron.</li>
                </ul>
                <p>Teori ini menjelaskan reaksi yang tidak melibatkan transfer proton, seperti reaksi BF_3 + NH_3.</p>
            `,
    },
    "sifat-larutan": {
      title: "Sifat Larutan Asam Basa",
      content: `
                <p>Larutan asam dan basa memiliki sifat-sifat khas yang dapat dibedakan.</p>
                <br>
                <h4>Sifat Asam:</h4>
                <ul>
                    <li>Rasa masam (jangan dicicipi!).</li>
                    <li>Korosif.</li>
                    <li>Mengubah lakmus biru menjadi merah.</li>
                    <li>Bereaksi dengan logam menghasilkan gas hidrogen (H_2).</li>
                    <li>Nilai pH kurang dari 7.</li>
                </ul>
                <br>
                <h4>Sifat Basa:</h4>
                <ul>
                    <li>Rasa pahit dan terasa licin di kulit (jangan dicicipi!).</li>
                    <li>Dapat merusak jaringan (kaustik).</li>
                    <li>Mengubah lakmus merah menjadi biru.</li>
                    <li>Bereaksi dengan minyak atau lemak.</li>
                    <li>Nilai pH lebih dari 7.</li>
                </ul>
                <br>
                <h4>Indikator Asam Basa:</h4>
                <p>Zat yang berubah warna tergantung pada pH larutan, seperti lakmus, metil jingga, atau fenolftalein.</p>
            `,
    },
    "perhitungan-ph": {
      title: "Perhitungan pH",
      content: `
                <p>pH adalah ukuran derajat keasaman atau kebasaan suatu larutan, dihitung dengan rumus:</p>
                <p class="formula-block">pH = -\log[H^+]</p>
                <br>
                <h4>Asam Kuat dan Basa Kuat:</h4>
                <p>Zat yang terionisasi sempurna dalam air. Konsentrasi H^+ atau OH^- langsung dihitung dari konsentrasi zat awal.</p>
                <p class="formula-block">[H^+] = M_a \times a (untuk asam kuat)</p>
                <p class="formula-block">[OH^-] = M_b \times b (untuk basa kuat)</p>
                <p>di mana M adalah molaritas, dan a/b adalah valensi asam/basa.</p>
                <br>
                <h4>Asam Lemah dan Basa Lemah:</h4>
                <p>Zat yang terionisasi sebagian. Konsentrasi H^+ atau OH^- dihitung menggunakan konstanta ionisasi (K_a atau K_b).</p>
                <p class="formula-block">[H^+] = \sqrt{K_a \times M_a} (untuk asam lemah)</p>
                <p class="formula-block">[OH^-] = \sqrt{K_b \times M_b} (untuk basa lemah)</p>
            `,
    },
    titrasi: {
      title: "Titrasi Asam Basa",
      content: `
                <p>Titrasi adalah metode untuk menentukan konsentrasi suatu zat dalam larutan (analit) dengan menambahkan larutan yang konsentrasinya diketahui (titran) sedikit demi sedikit.</p>
                <br>
                <h4>Prinsip Dasar:</h4>
                <p>Pada titik ekuivalen, mol asam sama dengan mol basa, yang dirumuskan:</p>
                <p class="formula-block">M_a \times V_a \times n_a = M_b \times V_b \times n_b</p>
                <p>di mana M adalah molaritas, V adalah volume, dan n adalah valensi.</p>
                <br>
                <h4>Kurva Titrasi:</h4>
                <p>Grafik yang menunjukkan perubahan pH terhadap volume titran. Titik ekuivalen adalah titik di mana kurva naik tajam.</p>
            `,
    },
  };

  // Temukan semua kartu materi
  const materiCards = document.querySelectorAll(".materi-card");
  const materiDetailContainer = document.getElementById("materi-detail");

  // Tambahkan event listener untuk setiap kartu
  materiCards.forEach((card) => {
    card.addEventListener("click", () => {
      const materiId = card.dataset.materi;
      const materi = materiData[materiId];

      if (materi) {
        // Buat konten detail materi
        materiDetailContainer.innerHTML = `
                    <a href="#" class="back-btn detail-back-btn"><i class="fas fa-arrow-left"></i></a>
                    <div class="materi-content">
                        <h2>${materi.title}</h2>
                        ${materi.content}
                    </div>
                `;

        // Tampilkan container detail
        materiDetailContainer.classList.add("active");

        // Tambahkan event listener untuk tombol kembali di halaman detail
        document
          .querySelector(".detail-back-btn")
          .addEventListener("click", (e) => {
            e.preventDefault();
            materiDetailContainer.classList.remove("active");
          });
      }
    });
  });
});
