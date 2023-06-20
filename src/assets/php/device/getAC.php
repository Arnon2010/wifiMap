<?php
include_once "../database.php";
$postdata = file_get_contents("php://input");

$sql = "SELECT a.access_id, a.access_name AS apName, a.access_mac, a.access_serail, u.univ_name, f.fac_name, b.building_name, a.floor, t.access_type_name, a.access_status, a.short_name, a.building_id, a.access_room, a.access_brand, a.access_gen, a.access_budget, a.access_budgetno, a.access_budgetuse, a.access_no, a.access_type_id, u.univ_id, f.fac_id
FROM tbaccessory a
LEFT JOIN tbaccess_type t ON a.access_type_id = t.access_type_id
LEFT JOIN tbbuilding b ON a.building_id = b.building_id
LEFT JOIN tbfac f ON b.fac_id = f.fac_id
LEFT JOIN tbuniv u ON f.univ_id = u.univ_id
WHERE a.access_status <> 'D'
ORDER BY a.access_id DESC;";

if ($result = mysqli_query($mysqli, $sql)) {
    $rows = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $rows[] = $row;
    }
    echo json_encode($rows);
} else {
    http_response_code(404);
}
