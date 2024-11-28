<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Proyek PHP SQLite Tabel Kegiatan</title>
</head>
<body>

<h1>Proyek PHP SQLite Tabel Kegiatan</h1>

<p>Proyek ini bertujuan untuk membuat aplikasi sederhana menggunakan PHP dan SQLite untuk mencatat kegiatan. Aplikasi ini memungkinkan pengguna untuk menginput data kegiatan dengan berbagai informasi, termasuk tanggal, foto, dan waktu.</p>

<h2>Fitur</h2>
<ul>
    <li>Input tanggal kegiatan</li>
    <li>Upload foto sebelum pekerjaan</li>
    <li>Input nama kegiatan</li>
    <li>Input waktu dimulai (format 24 jam)</li>
    <li>Upload foto sementara pekerjaan</li>
    <li>Upload foto setelah pekerjaan selesai</li>
    <li>Input waktu selesai (format 24 jam)</li>
</ul>

<h2>Struktur Tabel</h2>
<table border="1">
    <thead>
        <tr>
            <th>Kolom</th>
            <th>Tipe Data</th>
            <th>Keterangan</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>id</td>
            <td>INTEGER</td>
            <td>Primary Key, auto-increment</td>
        </tr>
        <tr>
            <td>tanggal</td>
            <td>TEXT</td>
            <td>Tanggal kegiatan (format YYYY-MM-DD)</td>
        </tr>
        <tr>
            <td>sebelumpekerjaan</td>
            <td>BLOB</td>
            <td>Foto sebelum pekerjaan (binary data)</td>
        </tr>
        <tr>
            <td>namakegiatan</td>
            <td>TEXT</td>
            <td>Nama kegiatan</td>
        </tr>
        <tr>
            <td>jamdimulai</td>
            <td>TEXT</td>
            <td>Waktu dimulai (format HH:MM)</td>
        </tr>
        <tr>
            <td>sementarapekerjaan</td>
            <td>BLOB</td>
            <td>Foto sementara pekerjaan (binary data)</td>
        </tr>
        <tr>
            <td>pekerjaanselesai</td>
            <td>BLOB</td>
            <td>Foto setelah pekerjaan (binary data)</td>
        </tr>
        <tr>
            <td>jamselesai</td>
            <td>TEXT</td>
            <td>Waktu selesai (format HH:MM)</td>
        </tr>
    </tbody>
</table>

<h2>Instalasi</h2>
<ol>
    <li><strong>Clone repository</strong> ini ke dalam GitHub Codespaces:
        <pre><code>git clone https://github.com/username/repo.git
cd repo</code></pre>
    </li>
    <li><strong>Buat database SQLite</strong> dan tabel yang diperlukan dengan menjalankan skrip berikut:
        <pre><code>&lt;?php
$db = new SQLite3('kegiatan.db');

$db->exec("CREATE TABLE IF NOT EXISTS kegiatan (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    tanggal TEXT NOT NULL,
    sebelumpekerjaan BLOB,
    namakegiatan TEXT NOT NULL,
    jamdimulai TEXT NOT NULL,
    sementarapekerjaan BLOB,
    pekerjaanselesai BLOB,
    jamselesai TEXT NOT NULL
)");
?&gt;</code></pre>
    </li>
    <li><strong>Jalankan server PHP</strong>:
        <pre><code>php -S localhost:8000</code></pre>
    </li>
    <li>Akses aplikasi melalui browser di <a href="http://localhost:8000">http://localhost:8000</a>.</li>
</ol>

<h2>Cara Menggunakan</h2>
<ol>
    <li>Isi form input dengan informasi kegiatan:
        <ul>
            <li>Tanggal kegiatan</li>
            <li>Upload foto sebelum pekerjaan</li>
            <li>Nama kegiatan</li>
            <li>Waktu dimulai</li>
            <li>Upload foto sementara pekerjaan</li>
            <li>Upload foto setelah pekerjaan selesai</li>
            <li>Waktu selesai</li>
        </ul>
    </li>
    <li>Setelah semua data diisi, tekan tombol "Submit" untuk menyimpan data ke dalam database.</li>
</ol>

<h2>Kontribusi</h2>
<p>Silakan lakukan kontribusi dengan cara melakukan fork repository ini, melakukan perubahan, dan mengajukan pull request.</p>

<h2>Lisensi</h2>
<p>Proyek ini dilisensikan di bawah <a href="LICENSE">MIT License</a>.</p>

</body>
</html>
