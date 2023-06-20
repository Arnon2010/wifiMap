<?php
include_once "../database.php";
$postdata = file_get_contents("php://input");

$sql = "SELECT b.building_id, b.building_name, b.building_status, f.fac_id, f.fac_name
FROM tbbuilding b
LEFT JOIN tbfac f ON b.fac_id = f.fac_id";
if ($result = mysqli_query($mysqli, $sql)) {
  $rows = array();
  while ($row = mysqli_fetch_assoc($result)) {
    $rows[] = $row;
  }
  echo json_encode($rows);
} else {
  http_response_code(404);
}
