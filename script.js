document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submit').addEventListener('click', function() {
        const message = document.getElementById('message').value;

        fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: message })
        })
        .then(response => {
            if (response.ok) {
                return response.json(); 
            } else {
                throw new Error('Network response was not ok.');
            }
        })
        .then(data => {
            const response = data.message;
            document.getElementById('response').innerHTML = response;
            const utterance = new SpeechSynthesisUtterance(response);
            speechSynthesis.speak(utterance);
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('response').innerHTML = 'Error: ' + error.message;
        });
    });
});
