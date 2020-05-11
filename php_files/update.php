<?php
	session_start();
	
	function formatUser($name, $x, $y, $dir, $state)
	{
		return '{"name": "'.$name.'", "x": '.$x.', "y":'.$y.', "dir": '.$dir.', "state": '.$state.'}';
	}
	
//	function formatEnemy($name, $type, $x, $y)
//	{
//		return '{"name": "'.$name.'", "type" : "'.$type.'", "x": '.$x.', "y":'.$y.'}';
//	}
	
	// MySQL connection
	include 'dbconnect.php';
	//mysql_connect('localhost', 'root', 'root');
//	@mysql_select_db('rpg') or die( "Unable to select database");
	
	// Retrieving all the other player positions
        $name=  mysql_real_escape_string($_GET['name']);
	$query = 'SELECT * FROM players WHERE lastupdate > TIMESTAMPADD(MINUTE, -10, NOW()) AND name <> "'.$name.'"';
	$result = mysql_query($query);
	$num = mysql_numrows($result);
	$i=0;
	$first = true;
//	print '{"players":[';
	while ($i < $num) {
            $response['players'][$i]['name']= mysql_result($result,$i,"name");
            $response['players'][$i]['x']= mysql_result($result,$i,"x");
            $response['players'][$i]['y']= mysql_result($result,$i,"y");
            $response['players'][$i]['dir']= mysql_result($result,$i,"dir");
            $response['players'][$i]['state']= mysql_result($result,$i,"state");
//		$x     = mysql_result($result,$i,"x");
//		$y     = mysql_result($result,$i,"y");
//		$dir   = mysql_result($result,$i,"dir");
//		$state = mysql_result($result,$i,"state");
		
		if($first){
			$first = false;
		}  else {
			print ',';
		}
//		print formatUser($name, $x, $y, $dir, $state);
		
		$i++;
	}
        echo json_encode($response);
//        exit();
//        print ']}';
//	print '],"enemies" : [';
//	
//	
//	// Retriving all the enemies
//	$query = "SELECT * FROM enemies WHERE life <> 0";
//	$result = mysql_query($query);
//	$num = mysql_numrows($result);
//	$i=0;
//	$first = true;
//	while ($i < $num) {
//		$name  = mysql_result($result,$i,"name");
//		$type  = mysql_result($result,$i,"type");
//		$x     = mysql_result($result,$i,"x");
//		$y     = mysql_result($result,$i,"y");
//		
//		if($first){
//			$first = false;
//		}  else {
//			print ',';
//		}
//		print formatEnemy($name, $type, $x, $y);
//		
//		$i++;
//	}
//	
//	print ']}';
	
	// Revtrieve the value from parameters
	$name = mysql_real_escape_string($_GET['name']);
	$x    = $_GET['x'];
	$y    = $_GET['y'];
	$dir  = $_GET['dir'];
	$state  = $_GET['state'];
	//print 'You:<br>'.formatUser($name, $x, $y, $dir);
	
	// Update DB
	mysql_query('UPDATE players SET x='.$x.', y ='.$y.', dir = '.$dir.', state = '.$state.', lastupdate = NOW() WHERE name="'.$name.'"');
	
	// Close DB's connection
	mysql_close();
?>