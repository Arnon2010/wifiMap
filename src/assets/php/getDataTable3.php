<?php
include_once("database.php");

$sql = "SELECT ap.id, ap.apName,  IF (tbaccessory.access_status = 1, 'up', 'down') AS status , ap.apMac, tbuniv.univ_name, tbfac.fac_name, tbbuilding.building_name, tbaccessory.floor FROM ap 
left JOIN tbaccessory ON ap.apName = tbaccessory.access_name 
left JOIN tbbuilding ON tbaccessory.building_id = tbbuilding.building_id 
left join tbfac ON tbbuilding.fac_id = tbfac.fac_id 
left join tbuniv ON tbfac.univ_id=tbuniv.univ_id";


$sql2 = "SELECT a.access_id AS id, a.access_name AS apName, ap.apMac AS apMac, IF(a.access_status = 1, 'up', 'down') AS status, a.floor, u.univ_name, f.fac_name, b.building_name
FROM tbaccessory a
LEFT JOIN ap ON a.access_name = ap.apName
LEFT JOIN tbaccess_type t ON a.access_type_id = t.access_type_id
LEFT JOIN tbbuilding b ON a.building_id = b.building_id
LEFT JOIN tbfac f ON b.fac_id = f.fac_id
LEFT JOIN tbuniv u ON f.univ_id = u.univ_id";

if ($result = mysqli_query($mysqli, $sql2)) {
    $rows = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $rows[] = $row;
    }
    echo json_encode($rows);
} else {
    http_response_code(404);
}
