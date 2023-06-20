<?php
include_once("database.php");

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
?>