<?php
	/* Server side version of:
	 var Enemy = function(defendModifier, life) {
                
        this.defend = function(){
            return Math.round(Math.random() * 6) + defendModifier;
        }
        
        this.kill = function(value){
            life -= value;
            if (life <= 0){
                state = "dead";
                return true;
            }
            return false;
        }
    }
	 * and:  
    var enemyRoll = enemies[i].object.defend();
    var playerRoll = Math.round(Math.random() * 6) + 5;
    
    if(enemyRoll <= playerRoll){
        var dead = enemies[i].object.kill(playerRoll);
        console.html("You hit the enemy "+playerRoll+"pt");
        if (dead) {
            console.html("You killed the enemy!");
            enemies[i].div.fadeOut(2000, function(){
                $(this).remove();
            });
            enemies.splice(i,1);
        }
    } else {
        console.html("The enemy countered your attack");
    }
    interacted = true;
    return;
	 */
	session_start();
	include 'dbconnect.php';
	
	$name = $_GET['name'];
	if(isset($name)){
		// do the combat here!
		
		// get the enemy form DB
		$query = 'SELECT * FROM enemies WHERE life <> 0 AND name = "'.$name.'"';
		$result = mysql_query($query);
		$num = mysql_numrows($result);
		if ($num > 0) {
			$life    = mysql_result($result,$i,"life");
			$defense = mysql_result($result,$i,"defense");
			
			$playerRoll = rand ( 5 , 11 );
			$enemyRoll  = rand ( $defense, $defense + 6);
			
			if ($playerRoll > $enemyRoll){
				if($playerRoll > $life){
					print '{"hit": true, "success" : true, "killed" : true}';
					// update DB
					mysql_query('UPDATE enemies SET life = 0 WHERE name = "'.$name.'"');
				} else {
					print '{"hit": true, "success" : true, "killed" : false, "damage" : '.$playerRoll.'}';
					// update DB
					mysql_query('UPDATE enemies SET life = '.($life - $playerRoll).' WHERE name = "'.$name.'"');
				}
			} else {
				print '{"hit": true, "success" : false}';
			}
		} else {
			print '{"hit": false, "success" : false}';
		}
	} else {
		print '{"hit": false, "success" : false}';
	}
?>