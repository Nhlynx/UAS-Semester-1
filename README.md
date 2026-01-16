# UAS-Semester-1
Proyek Website Pendaftaran Event Kampus.

## Deskripsi Proyek
Website ini merupakan aplikasi berbasis web sederhana yang digunakan
untuk pendaftaran event kampus.  
Pengguna dapat melihat informasi event pada landing page dan melakukan
pendaftaran melalui form yang telah disediakan.

Proyek ini dibuat menggunakan **HTML, CSS, dan JavaScript murni**
tanpa framework, sebagai bagian dari tugas proyek.

---

## Fitur Utama
- Landing page event (judul, deskripsi, tanggal, dan lokasi)
- Tombol "Daftar Sekarang" menuju form pendaftaran
- Form pendaftaran peserta
- Validasi input menggunakan JavaScript
- Pop-up notifikasi berhasil atau gagal mendaftar
- Pembatasan jumlah peserta
- Tampilan responsif

---

## Alur Logika Aplikasi
1. Pengguna membuka website dan melihat landing page event
2. Pengguna menekan tombol **Daftar Sekarang**
3. Website melakukan scroll / navigasi ke halaman form pendaftaran
4. Pengguna mengisi data pendaftaran (nama, email, nomor HP, kategori)
5. Saat tombol **Daftar** ditekan:
   - JavaScript melakukan validasi input
   - Jika data tidak lengkap, muncul pop-up gagal
   - Jika data valid dan kuota masih tersedia:
     - Data peserta disimpan (sementara di JavaScript)
     - Jumlah peserta bertambah
     - Muncul pop-up berhasil mendaftar
6. Daftar peserta ditampilkan di halaman
