<?php
	session_start();
	
	include 'dbconnect.php';
	
	$name = $_GET['name'];
	$pw    = $_GET['pw'];
	
	if(isset($name) && isset($pw)) {
		$hash = hash('sha256', $pw);
		$query = 'SELECT * FROM players WHERE name = "'.$name.'" AND pw = "'.$hash.'"';
		$result = mysql_query($query);
		$num = mysql_numrows($result);
		if($num > 0){
			$x = mysql_result($result,$i,"x");
			$y = mysql_result($result,$i,"y");
			$dir = mysql_result($result,$i,"dir");
			
			print '{ "success" : true , "x" : '.$x.', "y" : '.$y.', "dir" :'.$dir.'}';
			$_SESSION['name'] = $name;
			$_SESSION['pw'] = $pw;
		} else {
			print '{ "success" : false }';
		}
	} else {
		print '{ "success" : false }';
	}

	// Close DB's connection
	mysql_close();
?>