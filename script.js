/* =====================================
   DATA MATERI
===================================== */

const materi = [

    {
        nama: "Eksponen",
        deskripsi: "Mempelajari bilangan berpangkat dan sifat-sifatnya.",
        rumus: "aᵐ × aⁿ = aᵐ⁺ⁿ"
    },

    {
        nama: "Bentuk Akar",
        deskripsi: "Menyederhanakan dan melakukan operasi bentuk akar.",
        rumus: "√a × √b = √(ab)"
    },

    {
        nama: "Logaritma",
        deskripsi: "Memahami konsep dan sifat-sifat logaritma.",
        rumus: "logₐ(xy) = logₐx + logₐy"
    },

    {
        nama: "Persamaan Kuadrat",
        deskripsi: "Menyelesaikan persamaan kuadrat.",
        rumus: "x = (-b ± √(b² - 4ac)) / 2a"
    },

    {
        nama: "Fungsi Kuadrat",
        deskripsi: "Mempelajari grafik dan karakteristik fungsi kuadrat.",
        rumus: "y = ax² + bx + c"
    },

    {
        nama: "Pertidaksamaan",
        deskripsi: "Menyelesaikan berbagai bentuk pertidaksamaan.",
        rumus: "ax + b > c"
    },

    {
        nama: "Sistem Persamaan Linear",
        deskripsi: "Menyelesaikan sistem persamaan linear.",
        rumus: "a₁x + b₁y = c₁"
    },

    {
        nama: "Matriks",
        deskripsi: "Operasi matriks, determinan, dan invers.",
        rumus: "det(A) = ad - bc"
    },

    {
        nama: "Barisan Aritmetika",
        deskripsi: "Mempelajari pola bilangan dengan beda tetap.",
        rumus: "Un = a + (n - 1)b"
    },

    {
        nama: "Barisan Geometri",
        deskripsi: "Mempelajari barisan dengan rasio tetap.",
        rumus: "Un = arⁿ⁻¹"
    },

    {
        nama: "Trigonometri Dasar",
        deskripsi: "Sinus, cosinus, dan tangen.",
        rumus: "sin θ = depan / miring"
    },

    {
        nama: "Identitas Trigonometri",
        deskripsi: "Mempelajari identitas dasar trigonometri.",
        rumus: "sin²x + cos²x = 1"
    },

    {
        nama: "Persamaan Trigonometri",
        deskripsi: "Menyelesaikan persamaan trigonometri.",
        rumus: "sin x = sin α"
    },

    {
        nama: "Vektor",
        deskripsi: "Operasi dan panjang vektor.",
        rumus: "|a| = √(x² + y²)"
    },

    {
        nama: "Statistika",
        deskripsi: "Mean, median, modus, dan data.",
        rumus: "Mean = jumlah data / banyak data"
    },

    {
        nama: "Statistika Data Berkelompok",
        deskripsi: "Mengolah data dalam tabel distribusi frekuensi.",
        rumus: "x̄ = Σfx / Σf"
    },

    {
        nama: "Peluang",
        deskripsi: "Mempelajari kemungkinan terjadinya suatu kejadian.",
        rumus: "P(A) = n(A) / n(S)"
    },

    {
        nama: "Kaidah Pencacahan",
        deskripsi: "Aturan perkalian dan prinsip pencacahan.",
        rumus: "n! = n(n-1)(n-2)...1"
    },

    {
        nama: "Permutasi",
        deskripsi: "Menyusun objek dengan memperhatikan urutan.",
        rumus: "P(n,r) = n!/(n-r)!"
    },

    {
        nama: "Kombinasi",
        deskripsi: "Memilih objek tanpa memperhatikan urutan.",
        rumus: "C(n,r) = n!/[r!(n-r)!]"
    },

    {
        nama: "Limit",
        deskripsi: "Mempelajari nilai pendekatan suatu fungsi.",
        rumus: "lim f(x), x → a"
    },

    {
        nama: "Turunan",
        deskripsi: "Mempelajari perubahan suatu fungsi.",
        rumus: "d(xⁿ)/dx = nxⁿ⁻¹"
    },

    {
        nama: "Aplikasi Turunan",
        deskripsi: "Mencari maksimum, minimum, dan gradien.",
        rumus: "f'(x) = 0"
    },

    {
        nama: "Integral Tak Tentu",
        deskripsi: "Mempelajari antiturunan.",
        rumus: "∫xⁿ dx = xⁿ⁺¹/(n+1) + C"
    },

    {
        nama: "Integral Tentu",
        deskripsi: "Menghitung luas menggunakan integral.",
        rumus: "∫aᵇ f(x)dx = F(b)-F(a)"
    },

    {
        nama: "Program Linear",
        deskripsi: "Menentukan nilai maksimum dan minimum.",
        rumus: "Uji titik pojok"
    },

    {
        nama: "Transformasi Geometri",
        deskripsi: "Translasi, refleksi, rotasi, dan dilatasi.",
        rumus: "(x,y) → (-x,y)"
    },

    {
        nama: "Lingkaran",
        deskripsi: "Persamaan lingkaran dan unsur-unsurnya.",
        rumus: "(x-a)² + (y-b)² = r²"
    },

    {
        nama: "Dimensi Tiga",
        deskripsi: "Jarak dan sudut dalam bangun ruang.",
        rumus: "Gunakan Teorema Pythagoras"
    },

    {
        nama: "Polinomial",
        deskripsi: "Operasi dan pembagian polinomial.",
        rumus: "Jika f(a)=0 maka (x-a) faktor"
    }

];


/* =====================================
   DATA CONTOH SOAL
===================================== */

const contohSoal = [

    {
        materi: "Eksponen",

        soal:
            "Tentukan hasil dari 2³ × 2².",

        langkah: [
            "Gunakan sifat perkalian bilangan berpangkat.",
            "Jika basisnya sama, pangkat dijumlahkan.",
            "2³ × 2² = 2³⁺².",
            "2⁵ = 32."
        ],

        jawaban:
            "Jadi, hasilnya adalah 32."
    },


    {
        materi: "Persamaan Kuadrat",

        soal:
            "Tentukan akar-akar dari x² - 5x + 6 = 0.",

        langkah: [
            "Cari dua bilangan yang jika dikalikan menghasilkan 6.",
            "Kedua bilangan tersebut jika dijumlahkan menghasilkan -5.",
            "Bilangan tersebut adalah -2 dan -3.",
            "Maka x² - 5x + 6 = (x-2)(x-3).",
            "Jadi x = 2 atau x = 3."
        ],

        jawaban:
            "Akar-akarnya adalah x = 2 dan x = 3."
    },


    {
        materi: "Barisan Aritmetika",

        soal:
            "Tentukan suku ke-5 dari barisan 3, 6, 9, 12, ...",

        langkah: [
            "Tentukan suku pertama: a = 3.",
            "Tentukan beda: b = 6 - 3 = 3.",
            "Gunakan rumus Un = a + (n-1)b.",
            "U5 = 3 + (5-1)(3).",
            "U5 = 3 + 12 = 15."
        ],

        jawaban:
            "Suku ke-5 adalah 15."
    },


    {
        materi: "Peluang",

        soal:
            "Sebuah dadu dilempar sekali. Berapa peluang muncul angka 6?",

        langkah: [
            "Banyak seluruh kemungkinan = 6.",
            "Kejadian yang diinginkan hanya angka 6.",
            "Jadi banyak kejadian yang diinginkan = 1.",
            "Gunakan P(A) = n(A) / n(S).",
            "P(A) = 1/6."
        ],

        jawaban:
            "Peluang muncul angka 6 adalah 1/6."
    },


    {
        materi: "Turunan",

        soal:
            "Tentukan turunan dari f(x) = x³.",

        langkah: [
            "Gunakan rumus turunan xⁿ.",
            "Turunan xⁿ adalah n xⁿ⁻¹.",
            "Karena pangkatnya 3, maka turunannya adalah 3x²."
        ],

        jawaban:
            "f'(x) = 3x²."
    }

];


/* =====================================
   DATA LATIHAN
===================================== */

let soalLatihan = [

    {
        soal: "Hasil dari 2³ adalah ...",
        pilihan: ["6", "8", "9", "12", "16"],
        benar: 1
    },

    {
        soal: "Hasil dari 3² adalah ...",
        pilihan: ["6", "8", "9", "12", "15"],
        benar: 2
    },

    {
        soal: "Jika x + 5 = 10, maka x = ...",
        pilihan: ["3", "4", "5", "6", "7"],
        benar: 2
    },

    {
        soal: "Hasil dari 10 - 4 adalah ...",
        pilihan: ["4", "5", "6", "7", "8"],
        benar: 2
    },

    {
        soal: "Hasil dari 5 × 4 adalah ...",
        pilihan: ["10", "15", "20", "25", "30"],
        benar: 2
    },

    {
        soal: "Hasil dari 20 ÷ 5 adalah ...",
        pilihan: ["2", "3", "4", "5", "6"],
        benar: 2
    },

    {
        soal: "Jika 2x = 10, maka x = ...",
        pilihan: ["2", "3", "4", "5", "6"],
        benar: 3
    },

    {
        soal: "√25 = ...",
        pilihan: ["3", "4", "5", "6", "7"],
        benar: 2
    },

    {
        soal: "Hasil dari 4² adalah ...",
        pilihan: ["8", "12", "16", "20", "24"],
        benar: 2
    },

    {
        soal: "Hasil dari 100 ÷ 10 adalah ...",
        pilihan: ["5", "10", "15", "20", "25"],
        benar: 1
    }

];


/* =====================================
   VARIABEL
===================================== */

let user = JSON.parse(
    localStorage.getItem("mathLearnUser")
);

let nilai = JSON.parse(
    localStorage.getItem("mathLearnNilai")
) || [];

let soalSekarang = 0;

let jawabanBenar = 0;

let materiLatihan = "";


/* =====================================
   LOGIN
===================================== */

document
    .getElementById("loginForm")
    .addEventListener("submit", function(e) {

        e.preventDefault();

        const nama =
            document
                .getElementById("nama")
                .value
                .trim();

        const kelas =
            document
                .getElementById("kelas")
                .value;


        user = {
            nama: nama,
            kelas: kelas
        };


        localStorage.setItem(
            "mathLearnUser",
            JSON.stringify(user)
        );


        tampilkanAplikasi();

    });


/* =====================================
   TAMPILKAN APLIKASI
===================================== */

function tampilkanAplikasi() {

    document
        .getElementById("loginPage")
        .classList.add("hidden");

    document
        .getElementById("app")
        .classList.remove("hidden");


    document
        .getElementById("welcome")
        .textContent =
        `Selamat Datang, ${user.nama}!`;


    document
        .getElementById("userInfo")
        .textContent =
        `Kelas ${user.kelas} • Math Learn`;


    tampilkanMateri();

    tampilkanContoh();

    tampilkanLatihan();

    tampilkanNilai();

    updateStatistik();

}


/* =====================================
   BUKA HALAMAN
===================================== */

function bukaHalaman(nama) {

    document
        .querySelectorAll(".page")
        .forEach(page => {

            page.classList.remove("active");

        });


    document
        .getElementById(nama)
        .classList.add("active");


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    if (nama === "nilai") {

        tampilkanNilai();

    }

}


/* =====================================
   MATERI
===================================== */

function tampilkanMateri() {

    const container =
        document.getElementById("daftarMateri");


    container.innerHTML = "";


    materi.forEach((item, index) => {

        container.innerHTML += `

            <div class="materi-card">

                <small>
                    MATERI ${index + 1}
                </small>

                <h3>
                    ${item.nama}
                </h3>

                <p>
                    ${item.deskripsi}
                </p>

                <button
                    class="card-button"
                    onclick="lihatMateri(${index})"
                >
                    Pelajari →
                </button>

            </div>

        `;

    });

}


/* =====================================
   LIHAT MATERI
===================================== */

function lihatMateri(index) {

    const item = materi[index];


    document
        .getElementById("isiModal")
        .innerHTML = `

        <h2>
            ${item.nama}
        </h2>

        <p>
            ${item.deskripsi}
        </p>

        <h3>
            Rumus penting
        </h3>

        <div class="rumus">
            ${item.rumus}
        </div>

        <h3>
            Cara belajar
        </h3>

        <p>
            Pahami konsep dasar ${item.nama},
            pelajari rumus yang digunakan,
            kemudian coba mengerjakan contoh soal
            sebelum masuk ke latihan.
        </p>

    `;


    document
        .getElementById("modal")
        .classList.remove("hidden");

}


/* =====================================
   CONTOH SOAL
===================================== */

function tampilkanContoh() {

    const container =
        document.getElementById("daftarContoh");


    container.innerHTML = "";


    contohSoal.forEach((item, index) => {

        container.innerHTML += `

            <div class="materi-card">

                <small>
                    CONTOH SOAL
                </small>

                <h3>
                    ${item.materi}
                </h3>

                <p>
                    ${item.soal}
                </p>

                <button
                    class="card-button"
                    onclick="lihatContoh(${index})"
                >
                    Lihat Pembahasan →
                </button>

            </div>

        `;

    });

}


/* =====================================
   LIHAT CONTOH
===================================== */

function lihatContoh(index) {

    const item =
        contohSoal[index];


    let langkahHTML = "";


    item.langkah.forEach(
        (langkah, i) => {

            langkahHTML += `

                <div class="langkah">

                    <b>
                        Langkah ${i + 1}
                    </b>

                    <br>

                    ${langkah}

                </div>

            `;

        }
    );


    document
        .getElementById("isiModal")
        .innerHTML = `

        <h2>
            ${item.materi}
        </h2>

        <h3>
            Soal
        </h3>

        <p>
            ${item.soal}
        </p>

        <h3>
            Langkah Pengerjaan
        </h3>

        ${langkahHTML}

        <h3>
            Jawaban
        </h3>

        <div class="jawaban">

            ${item.jawaban}

        </div>

    `;


    document
        .getElementById("modal")
        .classList.remove("hidden");

}


/* =====================================
   LATIHAN
===================================== */

function tampilkanLatihan() {

    const container =
        document.getElementById(
            "daftarLatihan"
        );


    container.innerHTML = "";


    materi.forEach((item, index) => {

        container.innerHTML += `

            <div class="materi-card">

                <small>
                    10 SOAL
                </small>

                <h3>
                    ${item.nama}
                </h3>

                <p>
                    Kerjakan 10 soal
                    tentang materi ${item.nama}.
                </p>

                <button
                    class="card-button"
                    onclick="mulaiLatihan(${index})"
                >
                    Mulai Latihan →
                </button>

            </div>

        `;

    });

}


/* =====================================
   MULAI LATIHAN
===================================== */

function mulaiLatihan(index) {

    materiLatihan =
        materi[index].nama;


    soalSekarang = 0;

    jawabanBenar = 0;


    document
        .getElementById("pilihLatihan")
        .classList.add("hidden");


    document
        .getElementById("quiz")
        .classList.remove("hidden");


    document
        .getElementById("judulQuiz")
        .textContent =
        materiLatihan;


    tampilkanSoal();

}


/* =====================================
   TAMPILKAN SOAL
===================================== */

function tampilkanSoal() {

    const soal =
        soalLatihan[soalSekarang];


    document
        .getElementById("nomorSoal")
        .textContent =
        `Soal ${soalSekarang + 1} / 10`;


    document
        .getElementById("pertanyaan")
        .textContent =
        soal.soal;


    const progress =
        ((soalSekarang + 1) / 10) * 100;


    document
        .getElementById("progressBar")
        .style.width =
        progress + "%";


    const pilihan =
        document.getElementById(
            "pilihan"
        );


    pilihan.innerHTML = "";


    soal.pilihan.forEach(
        (jawaban, index) => {

            const tombol =
                document.createElement(
                    "button"
                );


            tombol.textContent =
                `${String.fromCharCode(65 + index)}. ${jawaban}`;


            tombol.onclick = function() {

                document
                    .querySelectorAll(
                        ".pilihan button"
                    )
                    .forEach(
                        btn =>
                            btn.classList.remove(
                                "selected"
                            )
                    );


                tombol.classList.add(
                    "selected"
                );


                tombol.dataset.dipilih =
                    index;

            };


            pilihan.appendChild(
                tombol
            );

        }
    );


    document
        .getElementById(
            "tombolBerikutnya"
        )
        .textContent =
        soalSekarang === 9
            ? "Selesai ✓"
            : "Soal Berikutnya →";

}


/* =====================================
   TOMBOL BERIKUTNYA
===================================== */

document
    .getElementById(
        "tombolBerikutnya"
    )
    .addEventListener(
        "click",
        function() {

            const dipilih =
                document.querySelector(
                    ".pilihan button.selected"
                );


            if (!dipilih) {

                alert(
                    "Silakan pilih jawaban terlebih dahulu!"
                );

                return;

            }


            const jawaban =
                Number(
                    dipilih.dataset.dipilih
                );


            if (
                jawaban ===
                soalLatihan[
                    soalSekarang
                ].benar
            ) {

                jawabanBenar++;

            }


            if (soalSekarang < 9) {

                soalSekarang++;

                tampilkanSoal();

            }

            else {

                selesaiLatihan();

            }

        }
    );


/* =====================================
   SELESAI LATIHAN
===================================== */

function selesaiLatihan() {

    const nilaiAkhir =
        jawabanBenar * 10;


    const hasil = {

        materi: materiLatihan,

        benar: jawabanBenar,

        salah: 10 - jawabanBenar,

        nilai: nilaiAkhir,

        tanggal:
            new Date().toLocaleDateString(
                "id-ID"
            )

    };


    nilai.push(hasil);


    localStorage.setItem(
        "mathLearnNilai",
        JSON.stringify(nilai)
    );


    document
        .getElementById("quiz")
        .innerHTML = `

        <div style="
            text-align:center;
            padding:30px;
        ">

            <div style="
                font-size:60px;
            ">
                🎉
            </div>

            <h2>
                Latihan Selesai!
            </h2>

            <p style="
                margin:15px 0;
            ">
                Kamu menjawab
                <b>
                    ${jawabanBenar}
                </b>
                dari 10 soal dengan benar.
            </p>

            <div class="rumus">

                Nilai Kamu

                <br>

                <strong
                    style="
                        font-size:40px;
                    "
                >
                    ${nilaiAkhir}
                </strong>

            </div>

            <button
                class="btn-primary"
                onclick="kembaliLatihan()"
            >
                Kembali ke Latihan
            </button>

        </div>

    `;


    updateStatistik();

}


/* =====================================
   KEMBALI LATIHAN
===================================== */

function kembaliLatihan() {

    location.reload();

}


/* =====================================
   TAMPILKAN NILAI
===================================== */

function tampilkanNilai() {

    const tabel =
        document.getElementById(
            "tabelNilai"
        );


    document
        .getElementById(
            "totalLatihan"
        )
        .textContent =
        nilai.length;


    if (nilai.length === 0) {

        document
            .getElementById(
                "nilaiRata"
            )
            .textContent =
            "-";


        tabel.innerHTML = `

            <div
                style="
                    background:white;
                    padding:30px;
                    border-radius:20px;
                    text-align:center;
                "
            >

                📚

                <br><br>

                Belum ada nilai.

                <br>

                Yuk mulai mengerjakan
                latihan soal!

            </div>

        `;

        return;

    }


    let total = 0;


    nilai.forEach(item => {

        total += item.nilai;

    });


    const rata =
        Math.round(
            total / nilai.length
        );


    document
        .getElementById(
            "nilaiRata"
        )
        .textContent =
        rata;


    let html = `

        <table>

            <thead>

                <tr>

                    <th>
                        Materi
                    </th>

                    <th>
                        Benar
                    </th>

                    <th>
                        Salah
                    </th>

                    <th>
                        Nilai
                    </th>

                    <th>
                        Tanggal
                    </th>

                </tr>

            </thead>

            <tbody>

    `;


    nilai.forEach(item => {

        html += `

            <tr>

                <td>
                    ${item.materi}
                </td>

                <td>
                    ${item.benar}
                </td>

                <td>
                    ${item.salah}
                </td>

                <td>
                    <b>
                        ${item.nilai}
                    </b>
                </td>

                <td>
                    ${item.tanggal}
                </td>

            </tr>

        `;

    });


    html += `

            </tbody>

        </table>

    `;


    tabel.innerHTML = html;

}


/* =====================================
   UPDATE STATISTIK
===================================== */

function updateStatistik() {

    document
        .getElementById(
            "jumlahLatihan"
        )
        .textContent =
        nilai.length;


    if (nilai.length === 0) {

        document
            .getElementById(
                "rataNilai"
            )
            .textContent =
            "-";

        return;

    }


    let total = 0;


    nilai.forEach(item => {

        total += item.nilai;

    });


    const rata =
        Math.round(
            total / nilai.length
        );


    document
        .getElementById(
            "rataNilai"
        )
        .textContent =
        rata;

}


/* =====================================
   MODAL
===================================== */

function tutupModal() {

    document
        .getElementById("modal")
        .classList.add("hidden");

}


document
    .getElementById("modal")
    .addEventListener(
        "click",
        function(e) {

            if (
                e.target ===
                document.getElementById("modal")
            ) {

                tutupModal();

            }

        }
    );


/* =====================================
   LOGOUT
===================================== */

document
    .getElementById("logoutBtn")
    .addEventListener(
        "click",
        function() {

            const yakin =
                confirm(
                    "Apakah kamu yakin ingin keluar?"
                );


            if (yakin) {

                localStorage.removeItem(
                    "mathLearnUser"
                );

                location.reload();

            }

        }
    );


/* =====================================
   CEK LOGIN SAAT WEBSITE DIBUKA
===================================== */

if (user) {

    tampilkanAplikasi();

}