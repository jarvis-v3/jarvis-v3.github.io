// formHandler.js
import { saveToGithub } from './githubService.js';

export function initializeForm() {
    const form = document.getElementById('tukinForm');
    
    // Preview gambar
    function previewImage(input, previewId) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById(previewId).src = e.target.result;
                document.getElementById(previewId).style.display = 'block';
            }
            reader.readAsDataURL(input.files[0]);
        }
    }

    // Event listeners untuk preview gambar
    document.getElementById('sebelum_pekerjaan').addEventListener('change', function() {
        previewImage(this, 'preview_sebelum');
    });

    document.getElementById('sementara_pekerjaan').addEventListener('change', function() {
        previewImage(this, 'preview_sementara');
    });

    document.getElementById('pekerjaan_selesai').addEventListener('change', function() {
        previewImage(this, 'preview_selesai');
    });

    // Handle form submission
    form.addEventListener('submit', async function(event) {
        event.preventDefault();
        
        try {
            const formData = {
                tanggal: document.getElementById('tanggal').value,
                nama_kegiatan: document.getElementById('nama_kegiatan').value,
                petugas: document.getElementById('petugas').value,
                sebelum_pekerjaan_time: document.getElementById('sebelum_pekerjaan_time').value,
                pekerjaan_selesai_time: document.getElementById('pekerjaan_selesai_time').value
            };

            // Tampilkan loading indicator
            const submitButton = form.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.innerHTML;
            submitButton.disabled = true;
            submitButton.innerHTML = 'Menyimpan...';

            // Simpan ke GitHub
            await saveToGithub(formData);

            // Tampilkan pesan sukses
            alert('Data berhasil disimpan!');
            
            // Redirect ke halaman index
            window.location.href = 'index.html';
        } catch (error) {
            alert('Gagal menyimpan data: ' + error.message);
            
            // Reset button state
            submitButton.disabled = false;
            submitButton.innerHTML = originalButtonText;
        }
    });
}
