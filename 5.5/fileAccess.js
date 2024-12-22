// Import modul fs (File System) bawaan Node.js
const fs = require("fs");

// Nama file yang digunakan
const fileName = "data.txt";

// Fungsi untuk menulis data ke dalam file
function writeToFile(data) {
    // Menulis data ke file
    fs.writeFileSync(fileName, data, "utf8", (err) => {
        if (err) {
            console.error("Terjadi kesalahan saat menulis ke file:", err);
        } else {
            console.log("Data berhasil ditulis ke file.");
        }
    });
}

// Fungsi untuk membaca data dari file
function readFromFile() {
    // Membaca data dari file
    try {
        const data = fs.readFileSync(fileName, "utf8");
        console.log("Data yang dibaca dari file:");
        console.log(data);
    } catch (err) {
        console.error("Terjadi kesalahan saat membaca file:", err);
    }
}

// Fungsi utama untuk demonstrasi akses file
function main() {
    console.log("Program Akses File Sederhana");

    // Data yang akan ditulis ke file
    const dataToWrite = "Nama: John Doe\nUmur: 30 Tahun\nPekerjaan: Developer";

    console.log("\nMenulis data ke file...");
    writeToFile(dataToWrite); // Menulis data ke file

    console.log("\nMembaca data dari file...");
    readFromFile(); // Membaca data dari file
}

// Menjalankan program utama
main();
