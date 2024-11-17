<?php
// Buat koneksi ke database SQLite
$db = new SQLite3('mekanikal.db');

// Buat tabel jika belum ada
$db->exec("CREATE TABLE IF NOT EXISTS kegiatan (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    tanggal TEXT,
    detail_kegiatan TEXT,
    petugas TEXT,
    lama_pekerjaan TEXT,
    sebelum_pekerjaan BLOB,
    sementara_pekerjaan BLOB,
    pekerjaan_selesai BLOB
)");

// Proses form jika sudah disubmit
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $tanggal = $_POST['tanggal'];
    $detail_kegiatan = $_POST['detail_kegiatan'];
    $petugas = $_POST['petugas'];
    $lama_pekerjaan = $_POST['lama_pekerjaan'];

    // Mengupload file
    $sebelum_pekerjaan = $_FILES['sebelum_pekerjaan']['tmp_name'];
    $sementara_pekerjaan = $_FILES['sementara_pekerjaan']['tmp_name'];
    $pekerjaan_selesai = $_FILES['pekerjaan_selesai']['tmp_name'];

    // Membaca file dan menyimpannya sebagai blob
    $sebelum_pekerjaan_blob = file_get_contents($sebelum_pekerjaan);
    $sementara_pekerjaan_blob = file_get_contents($sementara_pekerjaan);
    $pekerjaan_selesai_blob = file_get_contents($pekerjaan_selesai);

    // Menyimpan data ke dalam database
    $stmt = $db->prepare("INSERT INTO kegiatan (tanggal, detail_kegiatan, petugas, lama_pekerjaan, sebelum_pekerjaan, sementara_pekerjaan, pekerjaan_selesai) VALUES (:tanggal, :detail_kegiatan, :petugas, :lama_pekerjaan, :sebelum_pekerjaan, :sementara_pekerjaan, :pekerjaan_selesai)");
    $stmt->bindValue(':tanggal', $tanggal);
    $stmt->bindValue(':detail_kegiatan', $detail_kegiatan);
    $stmt->bindValue(':petugas', $petugas);
    $stmt->bindValue(':lama_pekerjaan', $lama_pekerjaan);
    $stmt->bindValue(':sebelum_pekerjaan', $sebelum_pekerjaan_blob, SQLITE3_BLOB);
    $stmt->bindValue(':sementara_pekerjaan', $sementara_pekerjaan_blob, SQLITE3_BLOB);
    $stmt->bindValue(':pekerjaan_selesai', $pekerjaan_selesai_blob, SQLITE3_BLOB);
    $stmt->execute();

    echo "<div class='bg-green-500 text-white p-4 rounded'>Data berhasil disimpan!</div>";
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Input Kegiatan</title>
    <link rel="stylesheet" href="../../css/tailwind.min.css">
</head>
<body class="bg-gray-100">
    <div class="max-w-md mx-auto p-6 bg-white shadow-md rounded mt-10">
        <h1 class="text-3xl font-bold mb-4">Form Input Kegiatan</h1>
        <form action="" method="post" enctype="multipart/form-data">
            <label for="tanggal" class="block mb-2 text-sm font-bold">Tanggal:</label>
            <input type="date" id="tanggal" name="tanggal" required class="w-full p-2 border border-gray-300 rounded mb-4">

            <label for="detail_kegiatan" class="block mb-2 text-sm font-bold">Detail Kegiatan:</label>
            <textarea id="detail_kegiatan" name="detail_kegiatan" rows="4" required class="w-full p-2 border border-gray-300 rounded mb-4"></textarea>

            <label for="petugas" class="block mb-2 text-sm font-bold">Petugas:</label>
            <select id="petugas" name="petugas" required class="w-full p-2 border border-gray-300 rounded mb-4">
                <option value="Suleman">Suleman</option>
                <option value="Ivan">Ivan</option>
            </select>

            <label for="lama_pekerjaan" class="block mb-2 text-sm font-bold">Lama Pekerjaan:</label>
            <input type="text" id="lama_pekerjaan" name="lama_pekerjaan" placeholder="Mulai - Selesai = Jam" required class=" w-full p-2 border border-gray-300 rounded mb-4">

            <label for="sebelum_pekerjaan" class="block mb-2 text-sm font-bold">Sebelum Pekerjaan (Foto):</label>
            <input type="file" id="sebelum_pekerjaan" name="sebelum_pekerjaan" accept="image/*" required class="w-full p-2 border border-gray-300 rounded mb-4">

            <label for="sementara_pekerjaan" class="block mb-2 text-sm font-bold">Sementara Pekerjaan (Foto):</label>
            <input type="file" id="sementara_pekerjaan" name="sementara_pekerjaan" accept="image/*" required class="w-full p-2 border border-gray-300 rounded mb-4">

            <label for="pekerjaan_selesai" class="block mb-2 text-sm font-bold">Pekerjaan Selesai (Foto):</label>
            <input type="file" id="pekerjaan_selesai" name="pekerjaan_selesai" accept="image/*" required class="w-full p-2 border border-gray-300 rounded mb-4">

            <input type="submit" value="Simpan" class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
        </form>
    </div>

    <script src="https://cdn.tailwindcss.com"></script>
</body>
</html>
