<?php
include_once "../database.php";
$postdata = file_get_contents("php://input");

$sql = "SELECT f.fac_id, f.fac_name, f.fac_status, f.univ_id, u.univ_name
FROM tbfac f
LEFT JOIN tbuniv u ON f.univ_id = u.univ_id 
WHERE f.fac_status = '1' 
ORDER BY u.univ_id ASC, f.fac_name ASC";
if ($result = mysqli_query($mysqli, $sql)) {
    $rows = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $rows[] = $row;
    }
    echo json_encode($rows);
} else {
    http_response_code(404);
}
