<?php
$db_name = "mysql:host=localhost;dbname=art_db";
$userName = "root";
$pwd = "";
$conn = new PDO($db_name, $userNamem, $pwd);
$sql = $conn->prepare("SELECT * FROM post");
$sql->execute();
$result = $sql->fetchAll(PDO::FETCH_ASSOC);
if (count($result) > 0) {
    foreach ($result as $row) {
        echo $row['post_id'] . " - " .  $row['title'] .  " - " . $row['author'] . "<br>";
    }
} else {
    echo "NO RECORD FOUND...";
}
