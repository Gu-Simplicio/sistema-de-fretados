<?php
include 'conecta.php';

$username = $_POST['username'] ?? '';
$password = $_POST['password'] ?? '';
$tipo;
$stmt = $conn->prepare("SELECT * FROM usuario WHERE Nome = :username AND Senha = :password LIMIT 1");
$stmt->execute([
    ':username' => $username,
    ':password' => $password,
    ':tipo' =>  $tipo
]);

if ($stmt && $stmt->rowCount() > 0) {
    $comp = $stmt->fetch(PDO::FETCH_ASSOC);
    header('Content-Type: application/json');
    echo json_encode(['data' => [$comp]]);
} else {
    header('Content-Type: application/json');
    echo json_encode(['data' => 'usuario ou senha incorretos']);
}