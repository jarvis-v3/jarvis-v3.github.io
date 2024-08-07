document.addEventListener('DOMContentLoaded', function() {
    // Event listener ketika tombol submit ditekan
    document.getElementById('submit').addEventListener('click', function() {
        const message = document.getElementById('message').value;

        // 1. Mengirim pesan ke model AI
        // ... (kode untuk mengirim pesan ke model AI)
        fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: message })
        })
        .then(response => response.json())
        .then(data => {
            // 2. Mendapatkan respon dari model AI
            // ... (kode untuk mendapatkan respon dari model AI)
            const response = data.message;

            // 3. Menampilkan respon di `#response`
            document.getElementById('response').innerHTML = response;

            // 4. (Opsional) Mengucapkan respon dengan text-to-speech
            // ... (kode untuk mengonversi teks ke suara dan memutarnya)
            // Gunakan library seperti SpeechSynthesisUtterance untuk text-to-speech
            const utterance = new SpeechSynthesisUtterance(response);
            speechSynthesis.speak(utterance);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});
