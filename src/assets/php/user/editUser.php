<?php

include_once "../database.php";
$postdata = file_get_contents("php://input");

$request = json_decode($postdata);

$username = $request->username;
$role = $request->role;
$ssidId = $request->ssidId;
$univ_local = $request->univ_local;

$sql = "UPDATE `user`
        SET `role`='$role' ,
            `ssidId`='$ssidId' ,
            `univ_local`='$univ_local'
        WHERE `username`='$username'";

if ($result = mysqli_query($mysqli, $sql)) {
    http_response_code(200);
} else {
    http_response_code(404);
}
