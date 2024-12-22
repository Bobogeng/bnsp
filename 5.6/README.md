# Program Penjumlahan Dua Angka

Program ini adalah aplikasi sederhana yang digunakan untuk menjumlahkan dua angka. Program ini menunjukkan perbedaan antara kode yang mengandung kesalahan (`sumProgramError.js`) dan kode yang telah diperbaiki (`sumProgramSuccess.js`).

## Struktur File

1. **sumProgramError.js**:

    - Berisi kode program yang mengandung kesalahan sintaks.

2. **sumProgramSuccess.js**:
    - Berisi kode program yang telah diperbaiki sehingga dapat berjalan dengan benar.

## Prasyarat

1. **Node.js**:

    - Pastikan Node.js telah terinstall di komputer Anda.
    - [Unduh Node.js di sini](https://nodejs.org/).

2. **File Program**:
    - Simpan file `sumProgramError.js` dan `sumProgramSuccess.js` di direktori yang sama.

## Cara Menjalankan Program

### **1. Menjalankan Kode dengan Kesalahan**

1. Buka terminal atau command prompt.
2. Jalankan file `sumProgramError.js`:

    ```bash
    node sumProgramError.js
    ```

3. **Hasil**:
    - Program akan menghasilkan error karena terdapat kesalahan sintaks.

### **2. Menjalankan Kode yang Berhasil**

1. Buka terminal atau command prompt.
2. Jalankan file `sumProgramSuccess.js`:

    ```bash
    node sumProgramSuccess.js
    ```

3. **Hasil**:

    - Program akan berjalan dengan benar dan menghasilkan output berikut:

        ```yaml
        Hasil penjumlahan adalah: 30
        ```

## Isi File

### **1. sumProgramError.js**

Kode ini mengandung kesalahan sintaks:

```javascript
// Program untuk menjumlahkan dua angka
function sumNumbers(a, b) {
    return a + B; // Kesalahan: Variabel B salah ditulis (seharusnya b)
}

const num1 = 10;
const num2 = 20;

const result = sumNumber(num1, num2); // Kesalahan: Nama fungsi salah ditulis (seharusnya sumNumbers)

console.log("Hasil penjumlahan adalah: " + result);
```

### **2. sumProgramSuccess.js**

Kode ini telah diperbaiki:

```javascript
// Program untuk menjumlahkan dua angka
function sumNumbers(a, b) {
    return a + b; // Perbaikan: Variabel b digunakan dengan benar
}

const num1 = 10;
const num2 = 20;

const result = sumNumbers(num1, num2); // Perbaikan: Nama fungsi dipanggil dengan benar

console.log("Hasil penjumlahan adalah: " + result);
```

## Penjelasan Perbaikan

1. **Kesalahan Sintaks pada `sumProgramError.js`**:

    - Variabel `B` diganti menjadi `b` untuk memastikan konsistensi penulisan variabel.
    - Nama fungsi `sumNumber` diganti menjadi `sumNumbers` agar sesuai dengan definisi fungsi.

2. **Kode yang Diperbaiki pada `sumProgramSuccess.js`**:
    - Program berhasil dijalankan tanpa kesalahan sintaks atau logika.

## Contoh Output

### **1. Output dari sumProgramError.js**

```yaml
Error: ReferenceError: B is not defined
```

### **2. Output dari sumProgramSuccess.js**

```yaml
Hasil penjumlahan adalah: 30
```

## Pengembangan Lebih Lanjut

-   Tambahkan validasi untuk memastikan input berupa angka.
-   Tambahkan fitur operasi lain seperti pengurangan, perkalian, dan pembagian.
-   Kembangkan antarmuka pengguna menggunakan HTML dan JavaScript untuk menampilkan hasil secara visual.
