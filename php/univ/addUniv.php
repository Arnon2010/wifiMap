<?php
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    // The request is using the POST method
    header("HTTP/1.1 200 OK");
    header("Access-Control-Allow-Origin: *");
    header('Access-Control-Allow-Credentials: true');
    header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
    //header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header('Access-Control-Allow-Headers:  Content-Type, X-Auth-Token, Authorization, Origin');
    header("Content-Type: application/json; charset=UTF-8");
    header('Access-Control-Max-Age: 1000');

    $this->next->call();
}

include_once "../database.php";

$postdata = file_get_contents("php://input");

$request = json_decode($postdata);

$univ_name = $request->univ_name;

$sql = "INSERT INTO `tbuniv`(`univ_local`,`univ_name`) VALUES('0','$univ_name')";

if ($result = mysqli_query($mysqli, $sql)) {
    http_response_code(200);
} else {
    http_response_code(404);
}
