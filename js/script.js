function performOCR() {
    const input = document.getElementById("imageInput");
    const image = input.files[0];
    const resultText = document.getElementById("resultText");
  
    if (!image) {
      alert("Silakan pilih gambar terlebih dahulu.");
      return;
    }
  
    resultText.value = "🔍 Memproses OCR, harap tunggu...";
  
    Tesseract.recognize(
      image,
      'eng', // Ganti 'id' jika ingin dukungan Bahasa Indonesia (perlu modelnya)
      {
        logger: m => console.log(m) // Untuk debug progress di console
      }
    ).then(({ data: { text } }) => {
      resultText.value = text;
    }).catch(err => {
      resultText.value = "❌ Gagal mengekstrak teks: " + err.message;
    });
  }
  
  document.getElementById("imageInput").addEventListener("change", function (e) {
    const preview = document.getElementById("imagePreview");
    const file = e.target.files[0];
    if (file) {
      preview.src = URL.createObjectURL(file);
      preview.hidden = false;
    }
  });
  