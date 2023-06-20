<?php

include_once "../database.php";
$postdata = file_get_contents("php://input");

$request = json_decode($postdata);

$fac_id = $request->fac_id;
$fac_name = $request->fac_name;
$univ_id = $request->univ_id;

$sql = "UPDATE tbfac
        SET fac_name = '$fac_name',
            univ_id = '$univ_id'
        WHERE fac_id = '$fac_id'";

if ($result = mysqli_query($mysqli, $sql)) {
    http_response_code(200);
} else {
    http_response_code(404);
}
