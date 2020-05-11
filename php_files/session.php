<?php
	session_start();
	
	// MySQL connection
	include 'dbconnect.php';
	
	if(isset($_SESSION['name']) && isset($_SESSION['pw'])) {
		$hash = hash('sha256', $_SESSION['pw']);
		$query = 'SELECT * FROM players WHERE name = "'.$_SESSION['name'].'" AND pw = "'.$hash.'"';
		$result = mysql_query($query);
		$num = mysql_numrows($result);
		if($num > 0){
			$x = mysql_result($result,0,"x");
			$y = mysql_result($result,0,"y");
			$dir = mysql_result($result,0,"dir");
			
			print '{ "connected" : true, "name" : "'.$_SESSION['name'].'", "x" : '.$x.', "y" : '.$y.', "dir" :'.$dir.'}';
		} else {
			session_destroy();
			print '{ "connected" : false }';	
		}
	} else {
		print '{ "connected" : false }';
	}

?>