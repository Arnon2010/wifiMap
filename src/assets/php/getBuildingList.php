<?php
include_once "database.php";

$fac_id = $_GET['fac_id'];

$sql = "SELECT * FROM tbbuilding WHERE fac_id = '$fac_id '";

if ($result = mysqli_query($mysqli, $sql)) {
  $rows = array();
  while ($row = mysqli_fetch_assoc($result)) {
    $rows[] = $row;
  }
  echo json_encode($rows);
} else {
  http_response_code(404);
}
