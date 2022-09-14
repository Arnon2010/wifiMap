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

$accessId = $request->access_id;
$upDateTime = $request->up_time;

$sql1 = "INSERT INTO tbupdown(updown_status, access_id, up_time) VALUES ('up', $accessId, '$upDateTime')";

if ($result = mysqli_query($mysqli, $sql1)) {
  $sql2 = "UPDATE tbaccessory SET access_status = 1, access_datemodified = '$upDateTime' WHERE access_id = '$accessId'";

  if (mysqli_query($mysqli, $sql2)) {
    http_response_code(200);
  } else {
    http_response_code(404);
  }
} else {
  http_response_code(404);
}
