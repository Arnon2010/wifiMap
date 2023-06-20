<?php
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    // The request is using the POST method
    header("HTTP/1.1 200 OK");
    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Credentials: true');
    header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header("Content-Type: application/json; charset=UTF-8");
    header('Access-Control-Max-Age: 1000');

    $this->next->call();
}

include_once "../database.php";
$postdata = file_get_contents("php://input");

$request = json_decode($postdata);

$fac_name = $request->fac_name;
$univ_id = $request->univ_id;

$sql = "INSERT INTO `tbfac`(`fac_name`,`univ_id`) VALUES('$fac_name','$univ_id')";

if ($result = mysqli_query($mysqli, $sql)) {
    http_response_code(200);
} else {
    http_response_code(404);
}
