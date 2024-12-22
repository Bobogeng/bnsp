# Integrasi Library Yup dengan Source Code

Program ini merupakan contoh integrasi library **Yup** untuk validasi form dengan source code menggunakan Webpack sebagai bundler.

## Fitur Program

1. **Validasi Form**:

    - Email harus dalam format email yang valid.
    - Password harus minimal 6 karakter.

2. **Pesan Validasi**:

    - Jika data valid, akan muncul pesan **"Data valid!"** dengan warna hijau.
    - Jika data tidak valid, akan muncul pesan error dengan warna merah.

3. **Integrasi Library**:

    - Library Yup digunakan untuk mempermudah validasi input pengguna.

4. **Teknologi**:
    - Library Yup untuk validasi.
    - Webpack untuk pengelolaan modul dan bundling.

## Prasyarat

1. **Node.js** harus terinstal di komputer Anda.
2. Instal dependency dengan perintah berikut:

    ```bash
    npm install yup webpack webpack-cli
    ```

## Cara Menjalankan

### 1. Persiapkan File

-   Simpan file berikut di folder proyek:
    -   `validationProgram.js` (logika validasi).
    -   `index.html` (form HTML untuk validasi).
    -   `webpack.config.js` (konfigurasi Webpack).

### 2. Build dengan Webpack

Bundling file menggunakan Webpack:

```bash
npx webpack
```

### 3. Jalankan Form

Buka file `index.html` di browser untuk melihat hasil validasi form.

## Struktur Proyek

```plaintext
├── dist/
│   └── bundle.js         # File output hasil bundling Webpack
├── validationProgram.js  # Modul validasi menggunakan Yup
├── index.html            # File HTML untuk form validasi
├── webpack.config.js     # Konfigurasi Webpack
└── package.json          # File untuk mengatur dependency
```

## Contoh Output

1. **Data Valid**:

    - Input Email: `user@example.com`
    - Input Password: `123456`
    - Output: **"Data valid!"** (dengan warna hijau).

2. **Data Tidak Valid**:
    - Input Email: `user`
    - Input Password: `123`
    - Output: **"Email tidak valid, Password minimal 6 karakter"** (dengan warna merah).

## Penjelasan

1. **Ketergantungan Antar Unit**:

    - Library Yup digunakan dalam modul `validationProgram.js` untuk memvalidasi input.
    - Hasil validasi ditampilkan di form HTML.

2. **Hindari Library Obsolete**:

    - Library Yup versi terbaru digunakan untuk memastikan keamanan dan performa.

3. **Program yang Terintegrasi**:
    - Webpack digunakan untuk membundel library dan modul menjadi satu file yang siap digunakan.

## Pengembangan Lebih Lanjut

-   Tambahkan validasi untuk nomor telepon, tanggal, atau data lain sesuai kebutuhan.
-   Tambahkan backend untuk menyimpan data pengguna setelah validasi.
-   Implementasikan i18n (internationalization) untuk mendukung berbagai bahasa.
