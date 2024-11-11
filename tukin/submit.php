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
