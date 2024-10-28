<?php
// inserir.php
include "conexao.php";

$nome = $_POST['nome_digitado'];
$email = $_POST['email_digitado'];
$telefone = $_POST['numero_digitado'];

$sql = "INSERT INTO tb_clientes (nome_cliente, email_cliente, telefone_cliente)
        VALUES (:nome, :email, :telefone)";
$inserir = $pdo->prepare($sql);

$inserir->bindParam(':nome', $nome);
$inserir->bindParam(':email', $email);
$inserir->bindParam(':telefone', $telefone);

try {
    $inserir->execute();
    // Redirecionar para a página com o parâmetro de sucesso
    header("Location: ../index.html?sucesso=sim");
    exit();
} catch (PDOException $erro) {
    header("Location: ../index.html?erro=sim");
    exit();
}
?>
