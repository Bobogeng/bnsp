# Program Pengurutan Nilai Siswa Menggunakan Array

Program ini adalah aplikasi sederhana yang menggunakan array untuk menyimpan nilai siswa dan mengurutkan nilai tersebut secara ascending (kecil ke besar) dan descending (besar ke kecil).

## Fitur Program

1. **Dimensi Array**:

    - Array satu dimensi digunakan untuk menyimpan nilai siswa.

2. **Tipe Data Array**:

    - Tipe data array adalah **Number** (angka).

3. **Panjang Array**:

    - Panjang array ditentukan menggunakan properti `.length`.

4. **Pengurutan Array**:
    - Array diurutkan menggunakan metode `sort()`:
        - Ascending (kecil ke besar).
        - Descending (besar ke kecil).

## Teknologi yang Digunakan

-   **JavaScript**: Bahasa pemrograman yang digunakan untuk implementasi logika.

## Cara Menjalankan Program

1. Salin kode program ke dalam file bernama `arraySorting.js`.
2. Jalankan program menggunakan Node.js:

    ```bash
    node arraySorting.js
    ```

3. Hasil akan ditampilkan di terminal.

## Contoh Output

### Input Array

```js
[80, 90, 75, 60, 85, 70, 95];
```

### Output di Terminal

```bash
Panjang array nilaiSiswa: 7
Array asli: [80, 90, 75, 60, 85, 70, 95]
Array setelah diurutkan (ascending): [60, 70, 75, 80, 85, 90, 95]
Array setelah diurutkan (descending): [95, 90, 85, 80, 75, 70, 60]
```

## Penjelasan Fitur

1. **Fungsi Pengurutan Ascending**:

    - Mengurutkan array dari kecil ke besar menggunakan `sort((a, b) => a - b)`.

2. **Fungsi Pengurutan Descending**:

    - Mengurutkan array dari besar ke kecil menggunakan `sort((a, b) => b - a)`.

3. **Salinan Array**:
    - Salinan array dibuat menggunakan `[...array]` untuk memastikan array asli tidak berubah selama proses pengurutan.

## Pengembangan Lebih Lanjut

-   Tambahkan validasi untuk input array dari pengguna.
-   Gunakan antarmuka berbasis HTML untuk menerima input array secara dinamis.
-   Implementasikan pengurutan untuk array multidimensi.
