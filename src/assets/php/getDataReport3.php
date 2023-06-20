<?php
include_once("database.php");

$sql = "SELECT tbuniv.univ_name, tbfac.fac_name FROM tbuniv, tbfac";
if($result = mysqli_query($mysqli,$sql)){
    $rows = array();
    while($row = mysqli_fetch_assoc($result)){
        $rows[] = $row;
    }
    echo json_encode($rows);
} else {
    http_response_code(404);
}
?>