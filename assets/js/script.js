// CTA - See More
const cta = document.querySelector(".cta");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal-close");

cta.addEventListener("click", function (e) {
  e.preventDefault();
  modal.classList.toggle("active");
});

modalClose.addEventListener("click", function (e) {
  e.preventDefault();
  modal.classList.remove("active");
});

// Render Web App Github
const modalContent = document.querySelector(".modal-content");
let contentWebApp = "";
webApp.forEach((wa) => {
  contentWebApp += `<a class="card" href="${wa.link}" target="_blank">
                    <img
                      src="assets/img/webapp/${wa.gambar}"
                      class="card-img"
                      alt="${wa.judul}"
                    />
                    <h4 class="card-title">${wa.judul}</h4>
                  </a>`;
});
modalContent.innerHTML = contentWebApp;

// Waktu
let spanDate = document.querySelectorAll(".date");
let spanClock = document.querySelectorAll(".clock");
setInterval(() => {
  let waktu = new Date();
  let hr = waktu.getDay();
  const namaHari = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
    "Minggu",
  ];
  let hari = namaHari[hr];
  let tgl = waktu.getDate() < 10 ? "0" + waktu.getDate() : waktu.getDate();
  let bln = waktu.getMonth();
  const namaBulan = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  let bulan = namaBulan[bln];
  let thn = waktu.getFullYear();
  let jam = waktu.getHours() < 10 ? "0" + waktu.getHours() : waktu.getHours();
  let menit =
    waktu.getMinutes() < 10 ? "0" + waktu.getMinutes() : waktu.getMinutes();
  let detik =
    waktu.getSeconds() < 10 ? "0" + waktu.getSeconds() : waktu.getSeconds();
  spanDate.forEach((dt) => {
    dt.innerHTML = `${hari}, ${tgl} ${bulan} ${thn}`;
  });
  spanClock.forEach((clk) => {
    clk.innerHTML = `${jam} : ${menit} : ${detik} WITA`;
  });
}, 1);
