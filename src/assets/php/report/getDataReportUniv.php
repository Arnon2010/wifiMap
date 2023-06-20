<?php
include_once("../database.php");

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json");

$sql = "SELECT u.univ_id, u.univ_name, u.univ_local,
SUM(CASE WHEN status = 'down' THEN 1 ELSE 0 END) downCount
FROM ap
left join tbaccessory ac ON ap.apName = ac.access_name
left join tbbuilding b ON ac.building_id = b.building_id
left join tbfac f ON b.fac_id = f.fac_id
left join tbuniv u ON f.univ_id = u.univ_id 
where 1 
GROUP BY u.univ_id";


if ($result = mysqli_query($mysqli, $sql)) {
  $rows = array();
  while ($row = mysqli_fetch_assoc($result)) {
    $rows[] = $row;
  }
  echo json_encode($rows);
} else {
  http_response_code(404);
}
