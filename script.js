function askJARVIS() {
    var userInput = document.getElementById('userInput').value;
    // Tambahkan logika untuk memproses pertanyaan userInput dengan model Hugging Face Transformers di sini
    var jarvisResponse = "JARVIS thinks... " + userInput;
    document.getElementById('jarvisResponse').innerText = jarvisResponse;
}
