import Swal from 'sweetalert2';

export default function AlertOut(callback) {
    Swal.fire({
        title: "Apakah anda ingin keluar?",
        text: "Anda akan kembali ke halaman Login!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Ya, Keluar!"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Berhasil!",
                text: "Anda telah keluar dari akun.",
                icon: "success"
            }).then(() => {
                if (callback) callback(); // Memanggil callback jika disediakan
            });
        }
    });
}

export function AlertSimpan() {
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Disimpan",
        showConfirmButton: false,
        timer: 1500
    });
}