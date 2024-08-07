// Muat model BERT dari Hugging Face Transformers
const model = "bert-base-uncased"; // Ganti dengan model BERT yang Anda inginkan

// Fungsi untuk memuat model dan memproses pertanyaan
async function askJARVIS() {
    var userInput = document.getElementById('userInput').value;
    
    // Memproses pertanyaan menggunakan model BERT
    const inputs = {
        inputs: userInput,
        model: model,
    };
    
    try {
        const response = await fetch('https://api-inference.huggingface.co/models/' + model, {
            method: 'POST',
            body: JSON.stringify(inputs),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        
        if (!response.ok) {
            throw new Error('Failed to fetch model inference');
        }
        
        const data = await response.json();
        // Menampilkan respons dari model BERT
        document.getElementById('jarvisResponse').innerText = "JARVIS thinks... " + data[0].generated_text;
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('jarvisResponse').innerText = "Oops! JARVIS encountered an error. Please try again.";
    }
}
