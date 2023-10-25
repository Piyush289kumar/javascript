<?php

$db_name = "mysql:host=localhost;dbname=art_db";
$userName = "root";
$pw = "";

$post_id = 143;

$conn = new PDO($db_name, $userName, $pw);

$sql = $conn->prepare("SELECT * FROM post WHERE post_id = ?");

$sql->bindValue(1, $post_id, PDO::PARAM_INT);

$sql->execute();
$result = $sql->fetchAll(PDO::FETCH_ASSOC);
if (count($result) > 0) {
    foreach ($result as $row) {
        echo " -==> ". $row["post_id"] ." - ". $row["title"];
    }
} else {
    echo"Not Record Found.";
}




?>