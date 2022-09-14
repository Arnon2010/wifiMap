<?php

include_once "../database.php";
$postdata = file_get_contents("php://input");

$request = json_decode($postdata);

$univ_name = $request->univ_name;
$univ_id = $request->univ_id;

$sql = "UPDATE `tbuniv`
        SET `univ_name`='$univ_name' 
        WHERE `univ_id`='$univ_id'";

if ($result = mysqli_query($mysqli, $sql)) {
    http_response_code(200);
} else {
    http_response_code(404);
}
