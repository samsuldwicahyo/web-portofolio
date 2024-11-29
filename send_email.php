<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    $to = "samsuldwicahyo1@gmail.com";
    $subject = "Pesan dari Formulir Kontak";
    $body = "Nama: $name\nEmail: $email\n\nPesan:\n$message";
    
    if (mail($to, $subject, $body)) {
        echo "Pesan Anda telah berhasil dikirim.";
    } else {
        echo "Maaf, terjadi kesalahan saat mengirim pesan.";
    }
}
?>
