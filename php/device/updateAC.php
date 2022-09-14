<?php

include_once "../database.php";
$postdata = file_get_contents("php://input");

$request = json_decode($postdata);

@$id = $request->access_id;
@$name = $request->access_name;
@$sname= $request->short_name;
@$brand = $request->access_brand;
@$budget = $request->access_budget;
@$budgetno = $request->access_budgetno;
@$gen = $request->access_gen;
@$mac = $request->access_mac;
@$room = $request->access_room;
@$serial = $request->access_serail;
@$type = $request->access_type_id;
@$building_id = $request->building_id;
@$floor = $request->floor;
@$use = $request->access_budgetuse;
@$no = $request->access_no;

$sql = "UPDATE `tbaccessory`
        SET `access_name`='$name',
            `short_name`='$sname',
            `access_brand`='$brand',
            `access_budget`='$budget',
            `access_budgetno`='$budgetno',
            `access_gen`='$gen',
            `access_mac`='$mac',
            `access_room`='$room',
            `access_serail`='$serial',
            `access_type_id`='$type',
            `building_id`='$building_id',
            `floor`='$floor',
            `access_budgetuse`='$use',
            `access_no`='$no'
        WHERE `access_id`='$id'";

if ($result = mysqli_query($mysqli, $sql)) {
    http_response_code(200);
} else {
    http_response_code(404);
}
