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

# Kebocoran Pipa
================

## Deskripsi Proyek
Kebocoran Pipa adalah proyek PHP yang menggunakan SQLite sebagai database. Proyek ini dirancang untuk memantau dan mengelola kebocoran pipa air.

## Struktur Direktori
```markdown
kebocoranpipa/
├── .gitignore
├── README.md
├── index.php
├── my_database.db
└── assets/
    ├── css/
    │   └── styles.css
    └── js/
        └── script.js
```

## Penjelasan Struktur
### .gitignore
File ini digunakan untuk menentukan file atau direktori mana yang harus diabaikan oleh Git.

### README.md
File ini berisi informasi tentang proyek, termasuk cara menginstal dan menjalankannya.

### index.php
File ini adalah skrip PHP utama yang berinteraksi dengan SQLite.

### my_database.db
File database SQLite yang dibuat dan digunakan oleh skrip PHP.

### assets/
Folder ini digunakan untuk menyimpan aset tambahan seperti CSS dan JavaScript.

#### css/
Folder untuk file CSS.

##### styles.css
File CSS untuk styling halaman web.

#### js/
Folder untuk file JavaScript.

##### script.js
File JavaScript untuk interaktivitas halaman web.

## Langkah Selanjutnya
Berikut adalah langkah-langkah yang dapat Anda lakukan selanjutnya untuk memastikan bahwa skrip PHP Anda berjalan dengan baik:

### Buat Database SQLite
Jika Anda belum melakukannya, pastikan untuk membuat file database SQLite (my_database.db) di direktori proyek Anda.

### Menulis Skrip PHP
Pastikan skrip index.php Anda ditulis dengan benar.

### Jalankan Skrip PHP
Jalankan skrip PHP Anda dengan perintah:
```bash
php index.php
```

## Cara Menjalankan index.php dengan Benar
Gunakan Server Built-in PHP:
```bash
php -S localhost:8000
```

## Penyimpanan Otomatis
File di Codespaces:
Ketika Anda bekerja di GitHub Codespaces, semua file yang Anda buat atau ubah disimpan di dalam lingkungan Codespace tersebut.

Penyimpanan di Repository:
Perubahan yang Anda buat tidak akan secara otomatis disimpan ke repository GitHub sampai Anda melakukan commit dan push.

## Commit dan Push
Commit:
```bash
git add .
git commit -m "Deskripsi perubahan"
```

Push:
```bash
git push origin main
```

## Keluar dari Codespace
Setelah Keluar:
Jika Anda keluar dari lingkungan Codespace tanpa melakukan commit dan push, perubahan yang belum disimpan (belum di-commit) akan hilang ketika Codespace dihentikan atau dihapus.
