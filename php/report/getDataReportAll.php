<?php
include_once("../database.php");

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json");

$sql = "SELECT `zone_id`, `name`, `lat`, `lng`, `zoom` FROM `zone` WHERE 1";
if($result = mysqli_query($mysqli,$sql)){
    $rows = array();
    while($row = mysqli_fetch_assoc($result)){
        $rows[] = $row;
    }
    echo json_encode($rows);
} else {
    http_response_code(404);
}
