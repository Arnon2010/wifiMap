<?php
include_once "database.php";
$postdata = file_get_contents("php://input");

$request = json_decode($postdata);

$apName = $request->apName;

$sql = "SELECT
          tbaccessory.access_name,
          tbaccessory.building_id,
          tbbuilding.building_name,
          tbfac.fac_name,
          tbuniv.univ_name
        FROM ap
        LEFT JOIN tbaccessory ON ap.apName = tbaccessory.access_name
        LEFT JOIN tbbuilding ON tbaccessory.building_id = tbbuilding.building_id
        LEFT JOIN tbfac ON tbbuilding.fac_id = tbfac.fac_id
        LEFT JOIN tbuniv ON tbfac.univ_id = tbuniv.univ_id
        WHERE apName = '$apName'";
if ($result = mysqli_query($mysqli, $sql)) {
    $rows = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $rows[] = $row;
    }
    echo json_encode($rows);
} else {
    http_response_code(404);
}
