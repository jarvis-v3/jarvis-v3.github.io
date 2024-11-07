// githubService.js
import { GITHUB_CONFIG } from './config.js';
import { convertToCSV } from './csvConverter.js';

export async function saveToGithub(newData) {
    try {
        // Ambil konten file yang ada (jika ada)
        const response = await fetch(`https://api.github.com/repos/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}/contents/${GITHUB_CONFIG.path}`, {
            headers: {
                'Authorization': `token ${GITHUB_CONFIG.token}`,
                'Accept': 'application/vnd.github.v3+json'
            }
        });

        let existingContent = '';
        let sha;

        if (response.ok) {
            const fileData = await response.json();
            existingContent = atob(fileData.content);
            sha = fileData.sha;
        }

        // Gabungkan data yang ada dengan data baru
        const allData = existingContent ? 
            existingContent.split('\n').slice(1).map(row => {
                const [tanggal, nama_kegiatan, petugas, sebelum_pekerjaan_time, pekerjaan_selesai_time] = row.split(',');
                return { tanggal, nama_kegiatan, petugas, sebelum_pekerjaan_time, pekerjaan_selesai_time };
            }) : [];

        allData.push(newData);

        // Konversi semua data ke CSV
        const csvContent = convertToCSV(allData);

        // Persiapkan request untuk update/create file
        const content = btoa(csvContent);
        const requestBody = {
            message: 'Update data tukin',
            content: content,
            branch: GITHUB_CONFIG.branch
        };

        if (sha) {
            requestBody.sha = sha;
        }

        // Kirim request ke GitHub API
        const updateResponse = await fetch(`https://api.github.com/repos/${GITHUB_CONFIG.owner}/${GITHUB_CONFIG.repo}/contents/${GITHUB_CONFIG.path}`, {
            method: 'PUT',
            headers: {
                'Authorization': `token ${GITHUB_CONFIG.token}`,
                'Content-Type': 'application/json',
                'Accept': 'application/vnd.github.v3+json'
            },
            body: JSON.stringify(requestBody)
        });

        if (!updateResponse.ok) {
            throw new Error('Failed to save to GitHub');
        }

        return true;
    } catch (error) {
        console.error('Error saving to GitHub:', error);
        throw error;
    }
}
