# Menjalankan Skrip PHP dengan SQLite di GitHub Codespaces

## Langkah-Langkah

### 1. Buat Repository di GitHub

Jika Anda belum memiliki repository, buatlah satu di GitHub.

### 2. Buat Codespace

Di halaman repository Anda, klik tombol "Code" dan pilih "Open with Codespaces" untuk membuat Codespace baru.

### 3. Instal PHP

Pastikan PHP terinstal di Codespace Anda. Anda dapat memeriksa dengan menjalankan perintah berikut di terminal:
```bash
php -v
```
Jika PHP belum terinstal, Anda dapat menginstalnya menggunakan perintah berikut:
```bash
sudo apt-get install php
```

### 4. Buat File PHP

Buat file PHP di dalam repository Anda. Misalnya, buat file `index.php` dan tambahkan kode berikut untuk mengakses SQLite:
```php
<?php
// Membuat atau membuka database SQLite
$db = new SQLite3('my_database.db');

// Membuat tabel jika belum ada
$db->exec("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT)");

// Menambahkan data
$db->exec("INSERT INTO users (name) VALUES ('John Doe')");

// Mengambil data
$result = $db->query('SELECT * FROM users');
while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
    echo "ID: " . $row['id'] . " - Name: " . $row['name'] . "\n";
}

// Menutup koneksi
$db->close();
```

### 5. Jalankan Skrip PHP

Jalankan skrip PHP Anda dengan perintah berikut di terminal:
```bash
php index.php
```

### 6. Lihat Output

Output dari skrip Anda akan ditampilkan di terminal.

Dengan langkah-langkah di atas, Anda dapat menjalankan skrip PHP yang menggunakan SQLite di GitHub Codespaces. Pastikan untuk menyesuaikan kode Anda sesuai kebutuhan.
