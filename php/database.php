<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json");

// $db_host = '128.199.142.209';
// $db_username = 'nang';
// $db_password = 'QK4xD7&j2smFYY';
// $db_name = 'ruts-map-wifi';

$db_host = 'linuxdb2.rmutsv.ac.th';
$db_username = 'root';
$db_password = ',miLiu;b=yp48';
$db_name = 'jumbomap_test';

$mysqli = new mysqli($db_host, $db_username, $db_password, $db_name);

// Change character set to utf8
$mysqli->set_charset("utf8");

if ($mysqli->connect_error) {
    die('Error : (' . $mysqli->connect_errno . ') ' . $mysqli->connect_error);
}
