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
$downDateTime = $request->down_time;
$updownCause = $request->updown_cause;
$updownSolutions = $request->updown_solutions;

$sql1 = "INSERT INTO tbupdown(updown_status, access_id, down_time, updown_cause, updown_solutions) VALUES ('down', $accessId, '$downDateTime', '$updownCause', '$updownSolutions')";

if ($result = mysqli_query($mysqli, $sql1)) {
  $sql2 = "UPDATE tbaccessory SET access_status = 2, access_datemodified = '$downDateTime' WHERE access_id = '$accessId'";

  if (mysqli_query($mysqli, $sql2)) {
    http_response_code(200);
  } else {
    http_response_code(404);
  }
} else {
  http_response_code(404);
}
