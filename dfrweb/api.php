<?php header('Access-Control-Allow-Origin: *'); ?>
<?php

	$servername = "localhost";
	$username = "##########################";
	$password = "##########################";
	$db = "c0_vm3_BD1_a1";
	
	$con = new mysqli($servername, $username, $password, $db) or die("Connection failed: " . mysqli_error($con));
	$param = $_GET["table"];
	
	if ($param == "indikator"){
		$sql = "SELECT * FROM Indikator";
	} else if ($param == "enabler"){
		$sql = "SELECT * FROM Enabler";
	} else if ($param == "faehigkeitslevel"){
		$sql = "SELECT * FROM Faehigkeitslevel";
	} else if ($param == "reifegrad"){
		$sql = "SELECT * FROM Reifegrad";
	}
	
	$result = mysqli_query($con, $sql) or die("Table doesn't exist! " . mysqli_error($con));

    //create an array
    $objectArray = array();
    while($row =mysqli_fetch_assoc($result))
    {
        $objectArray[] = $row;
    }
	
	echo json_encode($objectArray, JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP | JSON_UNESCAPED_UNICODE);

?>