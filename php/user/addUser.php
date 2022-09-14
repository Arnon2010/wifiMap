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

    //$this->next->call();
}

include_once "../database.php";

$postdata = file_get_contents("php://input");

$request = json_decode($postdata);

$name = $request->name;
$passwd = $request->passwd;
$role = $request->role;
$ssidId = $request->ssidId;
$univ_id = $request->univ_id;

$sql = "INSERT INTO `user`(`username`,`password`,`role`,`ssidId`, `univ_local`) VALUES('$name','$passwd','$role','$ssidId', '$univ_id')";

if ($result = mysqli_query($mysqli, $sql)) {
    http_response_code(200);
} else {
    http_response_code(404);
}
