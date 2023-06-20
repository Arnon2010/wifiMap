<?php
include_once "../database.php";
$postdata = file_get_contents("php://input");

$request = json_decode($postdata);

@$fac_id = $request->fac_id;

$sql = "SELECT building_id, building_name FROM tbbuilding WHERE fac_id IN ('$fac_id', '100') order by building_id";
if ($result = mysqli_query($mysqli, $sql)) {
    $rows = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $rows[] = $row;
    }
    echo json_encode($rows);
} else {
    http_response_code(404);
}
