$(function() {
    gf.initialize({baseDiv: $("#mygame"), width: 800, height: 600});
    $("#mygame").append("<div id = 'startScreen'></div>");
    
    var playerAnim = {
        stand: {
            side: new gf.animation({
                      url: "../images/player/platearmor.png",
                      offsety: 256,
                      width:  128, 
                      numberOfFrames: 2,
                      rate: 600
                  }),
            up:   new gf.animation({
                      url: "../images/player/platearmor.png",
                      offsety: 640,
                      width:  128, 
                      numberOfFrames: 2,
                      rate: 600
                  }),
            down: new gf.animation({
                      url: "../images/player/platearmor.png",
                      offsety: 1024,
                      width:  128, 
                      numberOfFrames: 2,
                      rate: 600
                  }),
        },
        walk: {
            side: new gf.animation({
                      url: "../images/player/platearmor.png",
                      offsety: 128,
                      width:  128, 
                      numberOfFrames: 4,
                      rate: 150
                  }),
            up:   new gf.animation({
                      url: "../images/player/platearmor.png",
                      offsety: 512,
                      width:  128, 
                      numberOfFrames: 4,
                      rate: 150
                   }),
            down: new gf.animation({
                      url: "../images/player/platearmor.png",
                      offsety: 896,
                      width:  128, 
                      numberOfFrames: 4,
                      rate: 150
                  }),
        },
        strike: {
            side: new gf.animation({
 
                     url: "../images/player/platearmor.png",
                      offsety: 0,
                      width:  128, 
                      numberOfFrames: 5,
                      rate: 60
                  }),
            up:   new gf.animation({
                      url: "../images/player/platearmor.png",
                      offsety: 384,
                      width:  128, 
                      numberOfFrames: 5,
                      rate: 60
                  }),
            down: new gf.animation({
                      url: "../images/player/platearmor.png",
                      offsety: 768,
                      width:  128, 
                      numberOfFrames: 5,
                      rate: 60
                  }),
        }
    };
    var weaponAnim = {
        stand: {
            side: new gf.animation({
                      url: "../images/player/sword2.png",
                      offsety: 384,
                      width:  192, 
                      numberOfFrames: 2,
                      rate: 600
                  }),
            up:   new gf.animation({
                      url: "../images/player/sword2.png",
                      offsety: 960,
                      width:  192, 
                      numberOfFrames: 2,
                      rate: 600
                  }),
            down: new gf.animation({
                      url: "../images/player/sword2.png",
                      offsety: 1536,
                      width:  192, 
                      numberOfFrames: 2,
                      rate: 600
                  }),
        },
        walk: {
            side: new gf.animation({
                      url: "../images/player/sword2.png",
                      offsety: 192,
                      width:  192, 
                      numberOfFrames: 4,
                      rate: 150
                  }),
            up:   new gf.animation({
                      url: "../images/player/sword2.png",
                      offsety: 768,
                      width:  192, 
                      numberOfFrames: 4,
                      rate: 150
                  }),
            down: new gf.animation({
                      url: "../images/player/sword2.png",
                      offsety: 1344,
                      width:  192, 
                      numberOfFrames: 4,
                      rate: 150
                  }),
        },
        strike: {
            side: new gf.animation({
                      url: "../images/player/sword2.png",
                      offsety: 0,
                      width:  192, 
                      numberOfFrames: 5,
                      rate: 60
                  }),
            up:   new gf.animation({
                      url: "../images/player/sword2.png",
                      offsety: 576,
                      width:  192, 
                      numberOfFrames: 5,
                      rate: 60
                  }),
            down: new gf.animation({
                      url: "../images/player/sword2.png",
                      offsety: 1152,
                      width:  192, 
                      numberOfFrames: 5,
                      rate: 60
                  }),
        }
    };
    
    var skeletonAnim = {
        stand : {
            side: new gf.animation({
                      url: "../images/enemies/skeleton2.png",
                      offsety: 384,
                      width:  192, 
                      numberOfFrames: 2,
                      rate: 600
                  }),
            up:   new gf.animation({
                      url: "../images/enemies/skeleton2.png",
                      offsety: 960,
                      width:  192, 
                      numberOfFrames: 2,
                      rate: 600
                  }),
            down: new gf.animation({
                      url: "../images/enemies/skeleton2.png",
                      offsety: 1536,
                      width:  192, 
                      numberOfFrames: 3,
                      rate: 600
                  }),
        },
        walk: {
            side: new gf.animation({
                      url: "../images/enemies/skeleton2.png",
                      offsety: 192,
                      width:  192, 
                      numberOfFrames: 4,
                      rate: 150
                  }),
            up:   new gf.animation({
                      url: "../images/enemies/skeleton2.png",
                      offsety: 768,
                      width:  192, 
                      numberOfFrames: 4,
                      rate: 150
                  }),
            down: new gf.animation({
                      url: "../images/enemies/skeleton2.png",
                      offsety: 1344,
                      width:  192, 
                      numberOfFrames: 4,
                      rate: 150
                  }),
        },
        strike:{
            side: new gf.animation({
                      url: "../images/enemies/skeleton2.png",
                      offsety: 0,
                      width:  192, 
                      numberOfFrames: 3,
                      rate: 60
                  }),
            up:   new gf.animation({
                      url: "../images/enemies/skeleton2.png",
                      offsety: 576,
                      width:  192, 
                      numberOfFrames: 3,
                      rate: 60
                  }),
            down: new gf.animation({
                      url: "../images/enemies/skeleton2.png",
                      offsety: 1152,
                      width:  192, 
                      numberOfFrames: 3,
                      rate: 60
                  }),
        }
    };
    var ogreAnim = {
        stand : {
            side: new gf.animation({
                      url: "../images/enemies/ogre.png",
                      offsety: 384,
                      width:  192, 
                      numberOfFrames: 2,
                      rate: 600
                  }),
            up:   new gf.animation({
                      url: "../images/enemies/ogre.png",
                      offsety: 960,
                      width:  192, 
                      numberOfFrames: 2,
                      rate: 600
                  }),
            down: new gf.animation({
                      url: "../images/enemies/ogre.png",
                      offsety: 1536,
                      width:  192, 
                      numberOfFrames: 2,
                      rate: 600
                  }),
        },
        walk: {
            side: new gf.animation({
                      url: "../images/enemies/ogre.png",
                      offsety: 192,
                      width:  192, 
                      numberOfFrames: 4,
                      rate: 150
                  }),
            up:   new gf.animation({
                      url: "../images/enemies/ogre.png",
                      offsety: 768,
                      width:  192, 
                      numberOfFrames: 4,
                      rate: 150
                  }),
            down: new gf.animation({
                      url: "../images/enemies/ogre.png",
                      offsety: 1344,
                      width:  192, 
                      numberOfFrames: 4,
                      rate: 150
                  }),
        },
        strike:{
            side: new gf.animation({
                      url: "../images/enemies/ogre.png",
                      offsety: 0,
                      width:  192, 
                      numberOfFrames: 3,
                      rate: 80
                  }),
            up:   new gf.animation({
                      url: "../images/enemies/ogre.png",
                      offsety: 576,
                      width:  192, 
                      numberOfFrames: 3,
                      rate: 80
                  }),
            down: new gf.animation({
                      url: "../images/enemies/ogre.png",
                      offsety: 1152,
                      width:  192, 
                      numberOfFrames: 3,
                      rate: 80
                  }),
        }
    };
    
    var cakeAnim = new gf.animation({
                      offsety: 128,
                      url: "../images/other/animations.png",
                      width:  192, 
                      numberOfFrames: 3,
                      rate: 150
        });
    var torchAnim = new gf.animation({
                      offsetx: 448,
                      offsety: 256,
                      url: "../images/other/animations.png",
                      width:  64, 
                      numberOfFrames: 3,
                      rate: 150
        });
    var lavaWallAnim = new gf.animation({
                      offsety: 256,
                      url: "../images/other/animations.png",
                      width:  64, 
                      numberOfFrames: 6,
                      rate: 100
        });
    var lavaFallAnim = new gf.animation({
                      offsetx: 1472,
                      url: "../images/other/animations.png",
                      width:  192, 
                      numberOfFrames: 4,
                      rate: 150
        });
    var redBubbleAnim = new gf.animation({
                      offsetx: 1088,
                      offsety: 64,
                      url: "../images/other/animations.png",
                      width:  64, 
                      numberOfFrames: 6,
                      rate: 300
                      
        });
    var yellowBubbleAnim = new gf.animation({
                      offsetx: 1216,
                      offsety: 192,
                      url: "../images/other/animations.png",
                      width:  64, 
                      numberOfFrames: 4,
                      rate: 300
        });
    var orangeBubbleAnim = new gf.animation({
                      offsetx: 960,
                      offsety: 192,
                      url: "../images/other/animations.png",
                      width:  64, 
                      numberOfFrames: 4,
                      rate: 300
        });
    var dblOrangeBubbleAnim = new gf.animation({
                      offsetx: 1088,
                      offsety: 128,
                      url: "../images/other/animations.png",
                      width:  64, 
                      numberOfFrames: 6,
                      rate: 300
        });
    var tileAnim = new gf.animation({
                      offsetx: 1088,
                      url: "../images/other/animations.png",
                      width:  64, 
                      numberOfFrames: 6,
                      rate: 150
        });
    var fireAnim = new gf.animation({
                      url: "../images/other/animations.png",
                      width:  64,
                      numberOfFrames: 3,
                      rate: 150
        });
    var waveAnim = new gf.animation({
                      offsetx: 192,
                      url: "../images/other/animations.png",
                      width:  64, 
                      numberOfFrames: 4,
                      rate: 400
        });
    var waterRockSmAnim = new gf.animation({
                      offsetx: 192,
                      offsety: 64,
                      url: "../images/other/animations.png",
                      width:  64,
                      numberOfFrames: 4,
                      rate: 250
        });
    var waterRockLgAnim = new gf.animation({
                      offsetx: 448,
                      url: "../images/other/animations.png",
                      width:  128,
                      numberOfFrames: 4,
                      rate: 250
        });
    var blueWallAnim = new gf.animation({
                      offsety: 256,
                      offsetx: 640,
                      url: "../images/other/animations.png",
                      width:  192,
                      numberOfFrames: 3,
                      rate: 100
        });
    var redWallAnim = new gf.animation({
                      offsety: 256,
                      offsetx: 1216,
                      url: "../images/other/animations.png",
                      width:  192,
                      numberOfFrames: 3,
                      rate: 100
        });
    var tideAnim = new gf.animation({
                      offsety: 448,
                      url: "../images/other/animations.png",
                      width:  64,
                      numberOfFrames: 19,
                      rate: 150
        });    
    
    var player = new (function(){
        // the group holding both the player sprite and the weapon
        this.div = $();
        // the sprite holding the player's avatar
        this.avatar = $();
        // the sprite holding the weapon
        this.weapon = $();
        // the hit zone
        this.hitzone  = $();
        // collision zone
        this.colzone = $();
        //animation
        this.animation;
        
        var moveX = 0;
        var moveY = 0;
        var state = "null";
        var orientation = "down";
        var interacted = false;
        
        this.update = function () {
            
            var newX = gf.x(this.div) + gf.x(this.colzone) + moveX;
            var newY = gf.y(this.div) + gf.y(this.colzone) + moveY;
            var newW = gf.w(this.colzone);
            var newH = gf.h(this.colzone);
            
            var collisions = gf.tilemapCollide($("#tiles2"), {x: newX, y: newY, width: newW, height: newH});
            var i = 0;
            while (i < collisions.length > 0) {
                var collision = collisions[i];
                i++;
                var collisionBox = {
                    x1: gf.x(collision),
                    y1: gf.y(collision),
                    x2: gf.x(collision) + gf.w(collision),
                    y2: gf.y(collision) + gf.h(collision)
                };
                
                var x = gf.intersect(newX, newX + newW, collisionBox.x1,collisionBox.x2);
                var y = gf.intersect(newY, newY + newH, collisionBox.y1,collisionBox.y2);
                
                var diffx = (x[0] === newX)? x[0]-x[1] : x[1]-x[0];
                var diffy = (y[0] === newY)? y[0]-y[1] : y[1]-y[0];
                if (Math.abs(diffx) > Math.abs(diffy)){
                    // displace along the y axis
                     newY -= diffy;
                     moveY -= diffy;
                } else {
                    // displace along the x axis
                    newX -= diffx;
                    moveX -= diffx;
                }
            }
            
            var nextX = gf.x(this.div) + moveX;
            var nextY = gf.y(this.div) + moveY;
            
            if(nextX > 0){
                if(nextX > 1856){
                    nextX = 1856;
                }
            } else {
                nextX = 0;
            }
            gf.x(this.div, nextX);
            if(nextY > 0){
                if(nextY > 1856){
                    nextY = 1856;
                }
            } else {
                nextY = 0;
            }
        	gf.y(this.div, nextY);
			this.div.css("z-index",nextY + 160);
            
            moveX = 0;
            moveY = 0;
        };
        
        this.left = function (){
            if(state !== "strike"){
                if(orientation !== "left" && moveY === 0 && moveX === 0){
                    orientation = "left";
                    gf.x(this.hitzone, 16);
                    gf.y(this.hitzone, 16);
                    gf.h(this.hitzone,  128 + 32);
                    gf.w(this.hitzone, 64);
                    gf.setAnimation(this.avatar, this.animation.walk.side, true);
                    gf.setAnimation(this.weapon, weaponAnim.walk.side, true);
                    gf.transform(this.avatar, {flipH: true});
                    gf.transform(this.weapon, {flipH: true});
                    
                } else if(state !== "walk") {
                    state = "walk";
                    gf.setAnimation(this.avatar, this.animation.walk.side, true);
                    gf.setAnimation(this.weapon, weaponAnim.walk.side, true);
                }
                if(state === "walk") {
                    moveX -= 3;
                }
            }
        };
        
        this.right = function (){
            if(state !== "strike"){
                if(orientation !== "right" && moveY === 0 && moveX === 0){
                    orientation = "right";
                    state = "walk";
                    gf.x(this.hitzone, 192-80);
                    gf.y(this.hitzone, 16);
                    gf.h(this.hitzone,  128 + 32);
                    gf.w(this.hitzone, 64);
                    gf.setAnimation(this.avatar, this.animation.walk.side, true);
                    gf.setAnimation(this.weapon, weaponAnim.walk.side, true);
                    gf.transform(this.avatar, {flipH: false});
                    gf.transform(this.weapon, {flipH: false});
                    
                } else if(state !== "walk") {
                    state = "walk";
                    gf.setAnimation(this.avatar, this.animation.walk.side, true);
                    gf.setAnimation(this.weapon, weaponAnim.walk.side, true);
                }
                if (state === "walk") {
                    moveX += 3;
                }
            }
        };
        
        this.up = function (){
            if(state !== "strike"){
                if(orientation !== "up" && moveY === 0 && moveX === 0) {
                    orientation = "up";
                    state = "walk";
                    gf.x(this.hitzone, 16);
                    gf.y(this.hitzone, 16);
                    gf.w(this.hitzone,  128 + 32);
                    gf.h(this.hitzone, 64);
                    gf.setAnimation(this.avatar, this.animation.walk.up, true);
                    gf.setAnimation(this.weapon, weaponAnim.walk.up, true);
                    gf.transform(this.avatar, {flipH: false});
                    gf.transform(this.weapon, {flipH: false});
                    
                } else if(state !== "walk"){
                    state = "walk";
                    gf.setAnimation(this.avatar, this.animation.walk.up, true);
                    gf.setAnimation(this.weapon, weaponAnim.walk.up, true);
                }
                if (state === "walk") {
                    moveY -= 3;
                }
            }
            
        };
        
        this.down = function (){
            if(state !== "strike"){
                if(orientation !== "down" && moveY === 0 && moveX === 0) {
                    orientation = "down";
                    state = "walk";
                    gf.x(this.hitzone, 16);
                    gf.y(this.hitzone, 192-80);
                    gf.w(this.hitzone,  128 + 32);
                    gf.h(this.hitzone, 64);
                    gf.setAnimation(this.avatar, this.animation.walk.down, true);
                    gf.setAnimation(this.weapon, weaponAnim.walk.down, true);
                    gf.transform(this.avatar, {flipH: false});
                    gf.transform(this.weapon, {flipH: false});
                } else if(state !== "walk"){
                    state = "walk";
                    gf.setAnimation(this.avatar, this.animation.walk.down, true);
                    gf.setAnimation(this.weapon, weaponAnim.walk.down, true);
                }
                if (state === "walk") {
                    moveY += 3;
                }
            }
        };
        
        this.strike = function (){
            if(state !== "strike"){
                state = "strike";
                interacted = false;
                switch(orientation) {
                    case "left":
                        gf.setAnimation(this.avatar, this.animation.strike.side, false, function(){
                            state = "null"
                            player.idle();
                        });
                        gf.setAnimation(this.weapon, weaponAnim.strike.side);
                        break;
                    case "right":
                        gf.setAnimation(this.avatar, this.animation.strike.side, false, function(){
                            state = "null"
                            player.idle();
                        });
                        gf.setAnimation(this.weapon, weaponAnim.strike.side);
                        break;
                    case "up":
                        gf.setAnimation(this.avatar, this.animation.strike.up, false, function(){
                            state = "null"
                            player.idle();
                        });
                        gf.setAnimation(this.weapon, weaponAnim.strike.up);
                        break;
                    case "down":
                        gf.setAnimation(this.avatar, this.animation.strike.down, false, function(){
                            state = "null"
                            player.idle();
                        });
                        gf.setAnimation(this.weapon, weaponAnim.strike.down);
                        break;
                }
            }
        };
        
        this.idle  = function (){
            if(state !== "idle" && state !== "strike"){
                state = "idle";
                
                switch(orientation) {
                    case "left":
                        gf.setAnimation(this.avatar, this.animation.stand.side, true);
                        gf.setAnimation(this.weapon, weaponAnim.stand.side, true);
                        gf.transform(this.avatar, {flipH: true});
                        gf.transform(this.weapon, {flipH: true});
                        break;
                    case "right":
                        gf.setAnimation(this.avatar, this.animation.stand.side, true);
                        gf.setAnimation(this.weapon, weaponAnim.stand.side, true);
                        gf.transform(this.avatar, {flipH: false});
                        gf.transform(this.weapon, {flipH: false});
                        break;
                    case "up":
                        gf.setAnimation(this.avatar, this.animation.stand.up, true);
                        gf.setAnimation(this.weapon, weaponAnim.stand.up, true);
                        gf.transform(this.avatar, {flipH: false});
                        gf.transform(this.weapon, {flipH: false});
                        break;
                    case "down":
                        gf.setAnimation(this.avatar, this.animation.stand.down, true);
                        gf.setAnimation(this.weapon, weaponAnim.stand.down, true);
                        gf.transform(this.avatar, {flipH: false});
                        gf.transform(this.weapon, {flipH: false});
                        break;
                }
            }
        };
        
        this.detectInteraction = function(npcs, enemies, console){
            if(state == "strike" && !interacted){
                for (var i = 0; i < npcs.length; i++){
                    if(gf.spriteCollide(this.hitzone, npcs[i].div)){
                        npcs[i].object.dialog();
                        interacted = true;
                        return;
                    }
                }
                for (var i = 0; i < enemies.length; i++){
                    if(gf.spriteCollide(this.hitzone, enemies[i].div)){
                        var enemyRoll = enemies[i].object.defend();
                        var playerRoll = Math.round(Math.random() * 6) + 5;
                        
                        if(enemyRoll <= playerRoll){
                            var dead = enemies[i].object.kill(playerRoll);
                            console.html("You hit the enemy, and it has "+enemies[i].object.life+" life left!");
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
                    }
                }
            }
        };
    });
    
    var NPC = function(name, text, console){
        var current = 0;
        
        this.getText = function(){
            if(current === text.length){
                current = 0;
                return "[end]";
            }
            return name + ": " + text[current++];
        };
        
        this.dialog = function(){
            console.html(this.getText());
        };
    };
    
    var Enemy = function(defendModifier, life) {
        
        this.init = function(div, anim) {
            this.div = div;
			this.anim = anim;
            this.xDir = "left";
            this.yDir = "up";
            this.dead      = false;
	
            gf.transform(div, {flipH: false});
            gf.setAnimation(div, anim.stand.up, true);
        };
        
        var state = "stand";
   
        this.defend = function(){
            return Math.round(Math.random() * 6) + defendModifier;
        };
        
        this.kill = function(value){
            life -= value;
            if (life <= 0){
                state = "dead";
                return true;
            }
            this.life = life;
            return false;
        };
    };
    
    var container, tiles, world, gameState, npcsGroup, enemiesGroup, objectsGroup, console;
    var npcs    = [];
    var enemies = [];
    var objects = [];
    
    var initialize = function() {
        $("#mygame").append("<div id='container' style='display: none; width: 800px; height: 600px;'>");
        container       = $("#container");
        
        // create the console
        container.append("<div id='console' style='font-family: \"Press Start 2P\", cursive; color: #fff; width: 770px; height: 20px; padding: 15px; position: absolute; bottom: 0; background: rgba(0,0,0,0.5); z-index: 3000'>");
        console = $("#console");
        // the group holding all the other stuff
        world           = gf.addGroup(container,"group",{
                            x: -(510-192)/2,
                            y: -(360-192)/2
                        });

        //create the objects
        objectsGroup    = gf.addGroup(world,"objects");
        var cake = gf.addSprite(objectsGroup,"cake",{width: 192, height: 128, x: 448, y: 128});
        gf.setAnimation(cake, cakeAnim, true);
        $("#cake").attr("class","object");
        objects.push(cake);
        
        var torch = gf.addSprite(objectsGroup,"torch",{width: 64, height: 192, x: 384, y: -64});
        gf.setAnimation(torch, torchAnim, true);
        $("#torch").attr("class","object");
        objects.push(torch);
        
        var lavaWall = gf.addSprite(objectsGroup,"lavaWall",{width: 64, height: 192, x: 192, y: -64});
        gf.setAnimation(lavaWall, lavaWallAnim, true);
        $("#lavaWall").attr("class","object");
        objects.push(lavaWall);
        
        var lavaFall = gf.addSprite(objectsGroup,"lavaFall",{width: 192, height: 256, x: 256, y: -64});
        gf.setAnimation(lavaFall, lavaFallAnim, true);
        $("#lavaFall").attr("class","object");
        objects.push(lavaFall);
        
         var redBubble = gf.addSprite(objectsGroup,"redBubble",{width: 64, height: 64, x: 256, y: 128});
        gf.setAnimation(redBubble, redBubbleAnim, true);
        $("#redBubble").attr("class","object");
        objects.push(redBubble);
        
         var yellowBubble = gf.addSprite(objectsGroup,"yellowBubble",{width: 64, height: 64, x: 192, y: 128});
        gf.setAnimation(yellowBubble, yellowBubbleAnim, true);
        $("#yellowBubble").attr("class","object");
        objects.push(yellowBubble);
        
         var orangeBubble = gf.addSprite(objectsGroup,"orangeBubble",{width: 64, height: 64, x: 128, y: 128});
        gf.setAnimation(orangeBubble, orangeBubbleAnim, true);
        $("#orangeBubble").attr("class","object");
        objects.push(orangeBubble);
        
         var dblOrangeBubble = gf.addSprite(objectsGroup,"dblOrangeBubble",{width: 64, height: 64, x: 128, y: 192});
        gf.setAnimation(dblOrangeBubble, dblOrangeBubbleAnim, true);
        $("#dblOrangeBubble").attr("class","object");
        objects.push(dblOrangeBubble);
        
         var tile = gf.addSprite(objectsGroup,"tile",{width: 64, height: 64, x: 192, y: 192});
        gf.setAnimation(tile, tileAnim, true);
        $("#tile").attr("class","object");
        objects.push(tile);
        
         var fire = gf.addSprite(objectsGroup,"fire",{width: 64, height: 76, x: 256, y: 180});
        gf.setAnimation(fire, fireAnim, true);
        $("#fire").attr("class","object");
        objects.push(fire);
        
          var wave = gf.addSprite(objectsGroup,"wave",{width: 64, height: 64, x: 320, y: 192});
        gf.setAnimation(wave, waveAnim, true);
        $("#wave").attr("class","object");
        objects.push(wave);
        
          var waterRockSm = gf.addSprite(objectsGroup,"waterRockSm",{width: 64, height: 64, x: 384, y: 128});
        gf.setAnimation(waterRockSm, waterRockSmAnim, true);
        $("#waterRockSm").attr("class","object");
        objects.push(waterRockSm);
        
          var waterRockLg = gf.addSprite(objectsGroup,"waterRockLg",{width: 128, height: 128, x: 256, y: 256});
        gf.setAnimation(waterRockLg, waterRockLgAnim, true);
        $("#waterRockLg").attr("class","object");
        objects.push(waterRockLg);
        
          var blueWall = gf.addSprite(objectsGroup,"blueWall",{width: 192, height: 192, x: 512, y: -64});
        gf.setAnimation(blueWall, blueWallAnim, true);
        $("#blueWall").attr("class","object");
        objects.push(blueWall);
        
          var redWall = gf.addSprite(objectsGroup,"redWall",{width: 192, height: 192, x: 704, y: -64});
        gf.setAnimation(redWall, redWallAnim, true);
        $("#redWall").attr("class","object");
        objects.push(redWall);
        
          var tide1 = gf.addSprite(objectsGroup,"tide1",{width: 64, height: 128, x: 384, y: 320});
        gf.setAnimation(tide1, tideAnim, true);
        $("#tide1").attr("class","object");
        objects.push(tide1);
        
        var tide2 = gf.addSprite(objectsGroup,"tide2",{width: 64, height: 128, x: 448, y: 320});
        gf.setAnimation(tide2, tideAnim, true);
        $("#tide2").attr("class","object");
        objects.push(tide2);
        
        var tide3 = gf.addSprite(objectsGroup,"tide3",{width: 64, height: 128, x: 512, y: 320});
        gf.setAnimation(tide3, tideAnim, true);
        $("#tide3").attr("class","object");
        objects.push(tide3);
        
        var tide4 = gf.addSprite(objectsGroup,"tide4",{width: 64, height: 128, x: 576, y: 320});
        gf.setAnimation(tide4, tideAnim, true);
        $("#tide4").attr("class","object");
        objects.push(tide4);
        
        // Create the level
        tiles           = gf.addGroup(world,"tiles");
		gf.importTiled("test.json",tiles, "tiles");
		$("#tiles3").css("z-index", "2990");
        
        // Create the player
        var askAnimation = prompt("human, ogre, or skeleton?");
        switch(askAnimation){
            case "human":
                player.animation = playerAnim;
                break;
            case "ogre":
                player.animation = ogreAnim;
                break;
            case "skeleton":
                player.animation = skeletonAnim;
                break;
            default:
                player.animation = playerAnim;
                break;
        }
        player.div      = gf.addGroup(world,"player", {
                            x: 100,
                            y: 200
                        });
        player.hitzone  = gf.addSprite(player.div, "hitzone", {
                            x:      16,
                            y:      192-80,
                            width:  128 + 32,
                            height: 64
                        });
        player.colzone  = gf.addSprite(player.div, "hitzone", {
                            x:      72,
                            y:      76,
                            width:  48,
                            height: 64
                        });
        switch(player.animation) {
            case playerAnim:
        player.avatar   = gf.addSprite(player.div, "avatar", {
                            x:      (192-128)/2,
                            y:      (192-128)/2,
                            width:  128,
                            height: 128
                        });
        player.weapon   = gf.addSprite(player.div, "weapon", {
                            width:  192,
                            height: 192
                        });
                break;
            case skeletonAnim:
            case ogreAnim:
                player.avatar   = gf.addSprite(player.div, "avatar", {
                            x:      (0)/2,
                            y:      (0)/2,
                            width:  192,
                            height: 192
                        });        
                player.weapon   = gf.addSprite(player.div, "weapon", {
                            width:  192,
                            height: 192
                        });
                player.weapon.css("display", "none") ;       
                break;
            default: 
            break;
        }
        
        player.idle();
		
		// Start game
		gameState = "walk";
        
        $("#startScreen").remove();
        container.css("display", "block");
    };
    
    var gameLoop = function() {
        var turn = 0;
        turn++;
        
        var idle = true;
        if(gf.keyboard[37]){ //left arrow
            player.left();
        	idle = false;
        }
        if(gf.keyboard[38]){ //up arrow
        	player.up();
        	idle = false;
        }
        if(gf.keyboard[39]){ //right arrow
            player.right();
 	        idle = false;
        }
        if(gf.keyboard[40]){ //down arrow
        	player.down();
        	idle = false;
        }
        if(gf.keyboard[32]){ //space
            player.strike();
            idle = false;
        }
        if(idle){
            player.idle();
        }
        
        player.detectInteraction(npcs, enemies, console);
        player.update();
        for (var i = 0; i < enemies.length; i++){
            enemies[i].update();
            if (gf.spriteCollide(player.div, enemies[i].div)){
                enemies[i].kill();
            }
        }
        
        var margin = {x: (800-192)/2, y: (600-192)/2}; 
        var playerPos = {x: gf.x(player.div), y: gf.y(player.div)};
        
        gf.x(world, margin.x-Math.min(Math.max(playerPos.x, margin.x), 2048-800+margin.x));
        gf.y(world, margin.y-Math.min(Math.max(playerPos.y, margin.y), 2048-600+margin.y));
    };
    gf.addCallback(gameLoop, 30);
    
    $("#startScreen").click(function() {
        gf.startGame(initialize);
    });
});