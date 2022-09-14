<?php
include_once "../database.php";
$postdata = file_get_contents("php://input");

$sql = "SELECT access_type_id, access_type_name FROM tbaccess_type  order by access_type_id";
if ($result = mysqli_query($mysqli, $sql)) {
    $rows = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $rows[] = $row;
    }
    echo json_encode($rows);
} else {
    http_response_code(404);
}
