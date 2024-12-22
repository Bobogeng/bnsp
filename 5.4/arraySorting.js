// Program untuk mengurutkan nilai siswa menggunakan array

// 1. Penentuan Dimensi Array
// Array satu dimensi untuk menyimpan nilai siswa
let nilaiSiswa = [80, 90, 75, 60, 85, 70, 95];

// 2. Tipe Data Array
// Array ini berisi tipe data Number (angka)

// 3. Panjang Array
// Panjang array ditentukan berdasarkan jumlah elemen
console.log("Panjang array nilaiSiswa:", nilaiSiswa.length);

// 4. Pengurutan Array
// Fungsi untuk mengurutkan array nilai siswa secara ascending
function urutkanNilaiAsc(array) {
    return array.sort((a, b) => a - b); // Mengurutkan dari kecil ke besar
}

// Fungsi untuk mengurutkan array nilai siswa secara descending
function urutkanNilaiDesc(array) {
    return array.sort((a, b) => b - a); // Mengurutkan dari besar ke kecil
}

// Menampilkan array asli sebelum diurutkan
console.log("Array asli:", nilaiSiswa);

// Mengurutkan array secara ascending
let nilaiAscending = urutkanNilaiAsc([...nilaiSiswa]); // Salin array agar tidak mengubah aslinya
console.log("Array setelah diurutkan (ascending):", nilaiAscending);

// Mengurutkan array secara descending
let nilaiDescending = urutkanNilaiDesc([...nilaiSiswa]); // Salin array agar tidak mengubah aslinya
console.log("Array setelah diurutkan (descending):", nilaiDescending);
