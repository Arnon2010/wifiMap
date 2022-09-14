<?php
include_once "database.php";
$postdata = file_get_contents("php://input");
$univ_id = $_GET['univ_id'];
$sql = "SELECT * FROM tbfac WHERE univ_id = '$univ_id '";
if ($result = mysqli_query($mysqli, $sql)) {
  $rows = array();
  while ($row = mysqli_fetch_assoc($result)) {
    $rows[] = $row;
  }
  echo json_encode($rows);
} else {
  http_response_code(404);
}
