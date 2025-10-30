// Promo Button
document.getElementById('promoBtn').addEventListener('click', function() {
  alert("🎉 Promo Spesial Malam Ini: Diskon 25% untuk semua produk NightStore!");
});

// Tombol Beli
const beliButtons = document.querySelectorAll('.beliBtn');
beliButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    alert("🛍️ Terima kasih! Produk telah ditambahkan ke keranjang belanja.");
  });
});

// Validasi Form
document.getElementById('formKontak').addEventListener('submit', function(e) {
  e.preventDefault();
  const nama = document.getElementById('nama').value.trim();
  const pesan = document.getElementById('pesan').value.trim();

  if (!nama || !pesan) {
    alert("⚠️ Harap isi semua kolom sebelum mengirim pesan.");
  } else {
    alert("📨 Pesan terkirim! Kami akan segera menghubungi Anda.");
    this.reset();
  }
});
