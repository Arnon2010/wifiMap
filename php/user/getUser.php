<?php
include_once "../database.php";
$postdata = file_get_contents("php://input");

$sql = "SELECT `username`,`role`,`ssidName`,`color`, `univ_name`, `user`.`univ_local`, `user`.`ssidId` FROM `user`
LEFT JOIN `ssid` ON `user`.`ssidId` = `ssid`.`id`
LEFT JOIN tbuniv ON user.univ_local = tbuniv.univ_local";
if ($result = mysqli_query($mysqli, $sql)) {
    $rows = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $rows[] = $row;
    }
    echo json_encode($rows);
} else {
    http_response_code(404);
}
