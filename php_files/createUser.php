<?php
	session_start();
	
	include 'dbconnect.php';
	
	$name=  mysql_real_escape_string($_GET['name']);
	$pw=  mysql_real_escape_string($_GET['pw']);
	
	if(isset($name) && isset($pw)) {
		$hash = hash('sha256', $pw);
		$query = 'SELECT * FROM players WHERE name = "'.$name.'"';
		$result = mysql_query($query);
		$num = mysql_numrows($result);
		
		if($num > 0){
			print '{ "success" : false }';
		} else {
			$query = 'INSERT INTO players (name, x, y, dir, pw, state) VALUES("'.$name.'", 210, 210, 0, "'.$hash.'", 0)';
			$result = mysql_query($query);
			
			$_SESSION['name'] = $name;
			$_SESSION['pw'] = $pw;
			print '{ "success" : true, "x" : 160, "y" : 160, "dir" : 0}';
		}
	} else {
		print '{ "success" : false }';
	}

	// Close DB's connection
	mysql_close();
?>
