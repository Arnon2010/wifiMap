<?php
include_once "../database.php";

$postdata = file_get_contents("php://input");

$request = json_decode($postdata);

@$id = $request->access_id;

$sql = "DELETE FROM tbaccessory WHERE access_id = '$id'";

if ($result = mysqli_query($mysqli, $sql)) {
    http_response_code(200);
} else {
    http_response_code(404);
}
