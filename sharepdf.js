function sharePDF() {
    // Menggunakan library html2pdf.js untuk mengonversi HTML ke PDF
    const element = document.body;
    const opt = {
        margin:       10,
        filename:     'dokumentasi_kinerja.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // Buat PDF
    html2pdf().set(opt).from(element).save().then(function() {
        // Setelah PDF dibuat, tampilkan opsi berbagi jika didukung
        if (navigator.share) {
            navigator.share({
                title: 'Dokumentasi Kinerja',
                text: 'Berikut adalah dokumentasi kinerja tim.',
                files: [new File([opt.filename], opt.filename, {type: 'application/pdf'})]
            }).then(() => console.log('Berhasil berbagi'))
            .catch((error) => console.log('Gagal berbagi', error));
        } else {
            alert('Maaf, fitur berbagi tidak didukung di perangkat ini.');
        }
    });
}
