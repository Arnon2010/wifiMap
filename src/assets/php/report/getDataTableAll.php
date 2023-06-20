<?php
include_once("../database.php");

$sql = "SELECT u.univ_id, u.univ_name, u.univ_local, 
SUM(CASE WHEN status = 'up' THEN 1 ELSE 0 END) upCount,
SUM(CASE WHEN status = 'down' THEN 1 ELSE 0 END) downCount,
SUM(CASE WHEN status = 'down' OR status = 'up' THEN 1 END) deviceCount
from ap
left join tbaccessory ac ON ap.apName = ac.access_name
left join tbbuilding b ON ac.building_id = b.building_id
left join tbfac f ON b.fac_id = f.fac_id
left join tbuniv u ON f.univ_id = u.univ_id 
where 1 
GROUP BY u.univ_id";

if($result = mysqli_query($mysqli,$sql)){
    $rows = array();
    $totalUp = 0;
    $totalDown = 0;
    $totalDevice = 0;
    while($row = mysqli_fetch_assoc($result)){
        
        $totalUp += $row['upCount'];
        $totalDown += $row['downCount'];
        $totalDevice += $row['deviceCount'];

        $rows[] = $row;
    }

    $data_total[] = array('total_up'=>$totalUp, 'total_down'=>$totalDown, 'total_device'=>$totalDevice);
    echo json_encode(array('data'=>$rows, 'data_total'=>$data_total));
    //echo json_encode($rows);

} else {
    http_response_code(404);
}

?>