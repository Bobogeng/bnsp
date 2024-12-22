// Menggunakan library Yup untuk validasi form
import * as Yup from "yup";

// Fungsi untuk validasi
export function validateForm(inputData, displayResult) {
    // Definisi schema validasi
    const schema = Yup.object().shape({
        email: Yup.string()
            .email("Email tidak valid")
            .required("Email wajib diisi"),
        password: Yup.string()
            .min(6, "Password harus minimal 6 karakter")
            .required("Password wajib diisi"),
    });

    // Melakukan validasi
    schema
        .validate(inputData)
        .then(() => {
            displayResult("Data valid", true);
        })
        .catch((err) => {
            displayResult(err.errors.join(", "), false);
        });
}
