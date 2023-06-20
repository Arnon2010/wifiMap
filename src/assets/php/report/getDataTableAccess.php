<?php
include_once("../database.php");

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json");

$building_id = $_GET['building_id'];

if($building_id > 0) { //เลือกคณะ
    $condition = "ac.building_id = '$building_id'";
} else {
    $condition = "1";
}

$sql = "SELECT ac.access_name, 
    ac.floor,
    ap.status as statusUpDown, 
    ap.totalUser as userAccess, 
    ap.upCount as capAccess
    FROM tbaccessory ac
    LEFT JOIN ap ON ac.access_name = ap.apName
    LEFT JOIN tbbuilding b ON ac.building_id = b.building_id 
    LEFT JOIN tbfac f ON b.fac_id = f.fac_id 
    WHERE $condition
    ";

if($result = mysqli_query($mysqli,$sql)){
    $rows = array();
    while($row = mysqli_fetch_assoc($result)){
        $rows[] = $row;
    }
    echo json_encode($rows);
} else {
    http_response_code(404);
}
