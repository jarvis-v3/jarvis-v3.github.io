function sharePDF() {
    // Sembunyikan elemen yang tidak perlu di PDF
    const elementsToHide = document.querySelectorAll('.no-print');
    elementsToHide.forEach(el => el.style.display = 'none');

    // Tambahkan class pdf-mode ke body
    document.body.classList.add('pdf-mode');

    // Menggunakan library html2pdf.js untuk mengonversi HTML ke PDF
    const element = document.querySelector('.max-w-6xl');
    const opt = {
        margin: [10, 10, 10, 10],
        filename: 'dokumentasi_kinerja.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: { 
            scale: 2,
            useCORS: true,
            logging: true,
            letterRendering: true
        },
        jsPDF: { 
            unit: 'mm', 
            format: 'a4', 
            orientation: 'portrait',
            compress: true
        },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };

    // Buat PDF
    html2pdf().set(opt).from(element).save().then(function() {
        // Tampilkan kembali elemen yang disembunyikan
        elementsToHide.forEach(el => el.style.display = '');
        
        // Hapus class pdf-mode
        document.body.classList.remove('pdf-mode');

        // Setelah PDF dibuat, tampilkan opsi berbagi jika didukung
        if (navigator.share) {
            navigator.share({
                title: 'Dokumentasi Kinerja',
                text: 'Berikut adalah dokumentasi kinerja tim.',
                files: [new File([opt.filename], opt.filename, {type: 'application/pdf'})]
            }).then(() => console.log('Berhasil berbagi'))
            .catch((error) => console.log('Gagal berbagi', error));
        } else {
            alert('PDF telah dibuat. Silakan cek di folder unduhan Anda.');
        }
    });
}
