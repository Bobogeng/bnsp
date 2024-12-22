# Validasi Form dengan Yup dan Webpack

Program ini adalah implementasi validasi form menggunakan library **Yup** yang diintegrasikan dengan Webpack untuk pengelolaan modul. Form ini akan memvalidasi input email dan password sesuai kriteria yang telah ditentukan.

## Fitur Program

1. **Validasi Form**:

    - Email harus dalam format email yang valid.
    - Password harus minimal 6 karakter.

2. **Pesan Validasi**:

    - Jika data valid, akan muncul pesan "Data valid" dengan warna hijau.
    - Jika data tidak valid, akan muncul pesan error dengan warna merah.

3. **Teknologi yang Digunakan**:
    - Library Yup untuk validasi.
    - Webpack untuk pengelolaan modul.

## Prasyarat

1. **Node.js** harus terinstal di komputer Anda.
2. Instal dependency dengan perintah:

    ```bash
    npm install yup webpack webpack-cli
    ```

## Cara Menjalankan

1. **Persiapkan File**:

    - Simpan file `validationProgram.js`, `index.html`, dan `webpack.config.js` di folder proyek.

2. **Bundle dengan Webpack**:
   Jalankan perintah berikut untuk membuat file `bundle.js`:

    ```bash
    npx webpack
    ```

3. **Buka Form**:
    - Buka file `index.html` di browser.
    - Isi email dan password, lalu klik tombol **Validasi**.

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

1. **Input Valid**:

    - Email: `user@example.com`
    - Password: `123456`
    - Output: **"Data valid"** (dengan warna hijau).

2. **Input Tidak Valid**:
    - Email: `user`
    - Password: `123`
    - Output: **"Email tidak valid, Password minimal 6 karakter"** (dengan warna merah).

## Pengembangan Lebih Lanjut

-   Tambahkan lebih banyak validasi, seperti nomor telepon atau format tanggal.
-   Simpan data yang divalidasi ke database menggunakan backend.
-   Tambahkan fitur i18n (internationalization) untuk mendukung berbagai bahasa.
