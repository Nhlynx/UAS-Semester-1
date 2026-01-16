const form = document.getElementById("formDaftar");
const listPeserta = document.getElementById("listPeserta");
const jumlahPesertaEl = document.getElementById("jumlahPeserta");
const modal = document.getElementById("modal");
const modalText = document.getElementById("modalText");

let jumlahPeserta = 0;
const kuotaMaks = 50;

function tampilkanModal(teks, sukses) {
  modalText.textContent = teks;
  modalText.style.color = sukses ? "green" : "red";
  modal.style.display = "flex";
}

function tutupModal() {
  modal.style.display = "none";
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (jumlahPeserta >= kuotaMaks) {
    tampilkanModal("Pendaftaran ditutup, kuota sudah penuh.", false);
    return;
  }

  const nama = document.getElementById("nama").value.trim();
  const email = document.getElementById("email").value.trim();
  const hp = document.getElementById("hp").value.trim();
  const kategori = document.getElementById("kategori").value;

  if (!nama || !email || !hp || !kategori) {
    tampilkanModal("Semua field wajib diisi.", false);
    return;
  }

  if (!email.includes("@")) {
    tampilkanModal("Email tidak valid.", false);
    return;
  }

  if (!/^[0-9]+$/.test(hp)) {
    tampilkanModal("Nomor HP hanya boleh angka.", false);
    return;
  }

  const div = document.createElement("div");
  div.className = "peserta";
  div.innerHTML = `
    <strong>${nama}</strong><br>
    ${email} | ${hp}<br>
    Kategori: ${kategori}
  `;

  listPeserta.appendChild(div);

  jumlahPeserta++;
  jumlahPesertaEl.textContent = jumlahPeserta;

  tampilkanModal("Pendaftaran berhasil! Terima kasih.", true);

  form.reset();
});