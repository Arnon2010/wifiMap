<?php
include_once "../database.php";
$postdata = file_get_contents("php://input");

$request = json_decode($postdata);

@$univ_id = $request->univ_id;

$sql = "SELECT fac_id, fac_name FROM tbfac WHERE univ_id IN ('$univ_id','10') order by fac_id";
if ($result = mysqli_query($mysqli, $sql)) {
    $rows = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $rows[] = $row;
    }
    echo json_encode($rows);
} else {
    http_response_code(404);
}
