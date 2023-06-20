<?php
include_once "../database.php";

$postdata = file_get_contents("php://input");

$request = json_decode($postdata);

$univ_id = $request->univ_id;

$sql = "DELETE FROM tbuniv WHERE univ_id = '$univ_id'";

if ($result = mysqli_query($mysqli, $sql)) {
    http_response_code(200);
} else {
    http_response_code(404);
}
