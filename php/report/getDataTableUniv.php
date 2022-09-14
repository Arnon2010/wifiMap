<?php
include_once("../database.php");

$fac_id = $_GET['fac_id'];
$univ_id = $_GET['univ_id'];

if ($univ_id > 0 && $fac_id > 0) { //เลือกคณะ
    $condition = "f.univ_id = '$univ_id' AND b.fac_id = '$fac_id'";
} else {
    $condition = "f.univ_id = '$univ_id'";
}

$sql = "SELECT b.building_name,
SUM(CASE WHEN ap.status = 'up' THEN 1 ELSE 0 END) upCount,
SUM(CASE WHEN ap.status = 'down' THEN 1 ELSE 0 END) downCount,
SUM(CASE WHEN ap.status = 'down' OR status = 'up' THEN 1 END) deviceCount 
FROM tbbuilding b 
LEFT JOIN tbaccessory ac ON b.building_id = ac.building_id 
LEFT JOIN ap ON ac.access_name = ap.apName
LEFT JOIN tbfac f ON b.fac_id = f.fac_id 
WHERE $condition
GROUP BY b.building_id";

$totalUp = 0;
$totalDown = 0;
$totalDevice = 0;

if ($result = mysqli_query($mysqli, $sql)) {
    $rows = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $totalUp += $row['upCount'];
        $totalDown += $row['downCount'];
        $totalDevice += $row['deviceCount'];

        $rows[] = $row;
    }
    $data_total[] = array('total_up' => $totalUp, 'total_down' => $totalDown, 'total_device' => $totalDevice);
    echo json_encode(array('data' => $rows, 'data_total' => $data_total));
    //echo json_encode($rows);
} else {
    http_response_code(404);
}
