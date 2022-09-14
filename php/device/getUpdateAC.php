<?php
include_once "../database.php";
$postdata = file_get_contents("php://input");

$request = json_decode($postdata);

@$access_id = $request->access_id;

$sql = "SELECT a.*, f.fac_id, f.univ_id, b.building_id FROM tbaccessory a
LEFT JOIN tbbuilding b ON a.building_id = b.building_id 
LEFT JOIN tbfac f ON b.fac_id = f.fac_id
WHERE access_id = '$access_id'";
if ($result = mysqli_query($mysqli, $sql)) {
    $rows = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $rows[] = $row;
    }
    echo json_encode($rows);
} else {
    http_response_code(404);
}
