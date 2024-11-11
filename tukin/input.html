<?php
// Koneksi ke database
$servername = "sql.freedb.tech";
$username = "freedb_vendetta25";
$password = "pkKJ85M!9Kzwprv";
$dbname = "freedb_tukin25";

// Membuat koneksi
$conn = new mysqli($servername, $username, $password, $dbname);

// Memeriksa koneksi
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

// Memeriksa apakah formulir telah disubmit
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $tanggal = $_POST['tanggal'];
    $nama_kegiatan = $_POST['nama_kegiatan'];
    $petugas = $_POST['petugas'];
    $sebelum_pekerjaan_time = $_POST['sebelum_pekerjaan_time'];
    $pekerjaan_selesai_time = $_POST['pekerjaan_selesai_time'];

    // Mengambil gambar dan mengkonversi menjadi base64
    $sebelum_pekerjaan = $_FILES['sebelum_pekerjaan']['tmp_name'] ? base64_encode(file_get_contents($_FILES['sebelum_pekerjaan']['tmp_name'])) : null;
    $sementara_pekerjaan = $_FILES['sementara_pekerjaan']['tmp_name'] ? base64_encode(file_get_contents($_FILES['sementara_pekerjaan']['tmp_name'])) : null;
    $pekerjaan_selesai = $_FILES['pekerjaan_selesai']['tmp_name'] ? base64_encode(file_get_contents($_FILES['pekerjaan_selesai']['tmp_name'])) : null;

    // Menyiapkan dan mengikat
    $stmt = $conn->prepare("INSERT INTO tukin_data (tanggal, nama_kegiatan, petugas, sebelum_pekerjaan, sementara_pekerjaan, pekerjaan_selesai, sebelum_pekerjaan_time, pekerjaan_selesai_time) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssssss", $tanggal, $nama_kegiatan, $petugas, $sebelum_pekerjaan, $sementara_pekerjaan, $pekerjaan_selesai, $sebelum_pekerjaan_time, $pekerjaan_selesai_time);

    // Menjalankan pernyataan
    if ($stmt->execute()) {
        echo "Data berhasil disimpan.";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Menutup pernyataan dan koneksi
    $stmt->close();
    $conn->close();
}
?>

<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Input Tukin</title>
    <link href="css/tailwind.min.css" rel="stylesheet">
</head>
<body class="bg-gray-100">
    <div class="container mx-auto p-4">
        <h1 class="text-2xl font-bold mb-4">Input Data Tukin</h1>
        <form id="tukinForm" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" method="POST" enctype="multipart/form-data">
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="tanggal">
                    Tanggal
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="tanggal" name="tanggal" type="date" required>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="nama_kegiatan">
                    Nama Kegiatan
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nama_kegiatan" name="nama_kegiatan" type="text" required>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="petugas">
                    Petugas
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="pet ugas" name="petugas" type="text" required>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="sebelum_pekerjaan">
                    Foto Sebelum Pekerjaan
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="sebelum_pekerjaan" name="sebelum_pekerjaan" type="file" accept="image/*">
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="sementara_pekerjaan">
                    Foto Sementara Pekerjaan
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="sementara_pekerjaan" name="sementara_pekerjaan" type="file" accept="image/*">
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="pekerjaan_selesai">
                    Foto Pekerjaan Selesai
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="pekerjaan_selesai" name="pekerjaan_selesai" type="file" accept="image/*">
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="sebelum_pekerjaan_time">
                    Waktu Mulai Pekerjaan
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="sebelum_pekerjaan_time" name="sebelum_pekerjaan_time" type="time" required>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="pekerjaan_selesai_time">
                    Waktu Selesai Pekerjaan
                </label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="pekerjaan_selesai_time" name="pekerjaan_selesai_time" type="time" required>
            </div>
            <div class="flex items-center justify-between">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Simpan
                </button>
                <button onclick="window.location.href='../'" class="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition duration-300">
                    <i class="fas fa-arrow-left mr-2"></i> Kembali ke Halaman Utama
                </button>
            </div>
        </form>
    </div>
</body>
</html>
