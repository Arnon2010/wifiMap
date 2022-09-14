<?php
include_once "../database.php";

$postdata = file_get_contents("php://input");

$request = json_decode($postdata);

$username = $request->username;

$sql = "DELETE FROM user WHERE username = '$username'";

if ($result = mysqli_query($mysqli, $sql)) {
    http_response_code(200);
} else {
    http_response_code(404);
}
