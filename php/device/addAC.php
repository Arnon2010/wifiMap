<?php
include_once "../database.php";
$postdata = file_get_contents("php://input");
@$request = json_decode($postdata);
@$name = $request->access_name;
@$sname= $request->short_name;
@$brand = $request->access_brand;
@$budget = $request->access_budget;
@$budgetno = $request->access_budgetno;
@$gen = $request->access_gen;
@$mac = $request->access_mac;
@$room = $request->access_room;
@$serial = $request->access_serial;
@$type = $request->access_type_id;
@$building_id = $request->building_id;
@$floor = $request->floor;
@$use = $request->access_budgetuse;
@$no = $request->access_no;
@$building_new = $request->building_new;
@$fac_id = $request->fac_id;
@$univ_id = $request->univ_id;
@$fac_new = $request->fac_new;

$objSql = "INSERT INTO `tbaccessory` (`access_name`, `short_name`, `access_mac`, `access_serail`, `building_id`, `floor`, `access_room`, `access_brand`, `access_gen`, `access_budget`, `access_budgetno`, `access_budgetuse`, `access_no`, `access_type_id`, `access_status`) VALUES ('$name', '$sname', '$mac', '$serial', '$building_id', '$floor', '$room', '$brand', '$gen', '$budget', '$budgetno', '$use', '$no', '$type', '1');";
if(mysqli_query($mysqli,$objSql)){
    //echo 1;//Insert Success !
    http_response_code(200);
} else {
    http_response_code(404);
}
?>