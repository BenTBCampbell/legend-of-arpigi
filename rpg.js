$(function() {
//    var currentOrientation = null;
    var name;
    var initialPlayerPos = {};
    gf.initialize({baseDiv: $("#mygame"), width: 800, height: 600});
    $("#mygame").append("<div id = 'startScreen'></div>");

    // Manage account (login, create, continue)
    // configure buttons
    $("#login-create").click(function() {
        $("#login").css("display", "none");
        $("#create").css("display", "block");
        return false;
    });
    $("#login-login").click(function() {
        $.getJSON(
                "php_files/login.php",
                {
                    name: $("#login-name").val(),
                    pw: $("#login-pw").val()
                },
        function(json, status) {
            if (json.success) {
                name = $("#login-name").val();
                initialPlayerPos.x = json.x;
                initialPlayerPos.y = json.y;
                initialPlayerPos.dir = json.dir;
                gf.startGame(initialize);
            } else {
//                alert("No such user or wrong password!");
                $("#login-pw").val("");
            }
        }
        );
        return false;
    });
    $("#session-continue").click(function() {
        gf.startGame(initialize);
        return false;
    });
    $("#session-logout").click(function() {
        $.getJSON("php_files/logout.php");
        $("#session").css("display", "none");
        $("#login").css("display", "block");
        return false;
    });

    $("#create-cancel").click(function(e) {
        $("#create").css("display", "none");
        $("#login").css("display", "block");
        e.preventDefault;
    });

    $("#create-create").click(function() {
        $.getJSON(
                "php_files/createUser.php",
                {
                    name: $("#create-name").val(),
                    pw: $("#create-pw").val()
                },
        function(json, status) {
            if (json.success) {
                name = $("#create-name").val();
                initialPlayerPos.x = json.x;
                initialPlayerPos.y = json.y;
                initialPlayerPos.dir = json.dir;
                $("#create").css("display", "none");
                gf.startGame(initialize);
            } else {
//                alert("Name already taken!");
            }
        }
        );
        return false;
    });

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText)
        // var myObj = JSON.parse(this.responseText);
        // document.getElementById("demo").innerHTML = myObj.name;
      }
    };
    xmlhttp.open("GET", "php_files/session.php", true);
    xmlhttp.send();

    $.getJSON(
            "php_files/session.php",
            function(json) {
                if (json.connected) {
                    name = json.name;
                    initialPlayerPos.x = json.x;
                    initialPlayerPos.y = json.y;
                    initialPlayerPos.dir = json.dir;
                    $("#session-name").html(name);
                    $("#session").css("display", "block");
                } else {
                    $("#login").css("display", "block");
                }
            }
    );

    $.getJSON(
        "php_files/session.php",
        function(json) {
            console.log("success!")
        }
    );

    var playerAnim = {
        stand: {
            side: new gf.animation({
                url: "images/player/platearmor.png",
                offsety: 256,
                width: 128,
                numberOfFrames: 2,
                rate: 600
            }),
            up: new gf.animation({
                url: "images/player/platearmor.png",
                offsety: 640,
                width: 128,
                numberOfFrames: 2,
                rate: 600
            }),
            down: new gf.animation({
                url: "images/player/platearmor.png",
                offsety: 1024,
                width: 128,
                numberOfFrames: 2,
                rate: 600
            })
        },
        walk: {
            side: new gf.animation({
                url: "images/player/platearmor.png",
                offsety: 128,
                width: 128,
                numberOfFrames: 4,
                rate: 150
            }),
            up: new gf.animation({
                url: "images/player/platearmor.png",
                offsety: 512,
                width: 128,
                numberOfFrames: 4,
                rate: 150
            }),
            down: new gf.animation({
                url: "images/player/platearmor.png",
                offsety: 896,
                width: 128,
                numberOfFrames: 4,
                rate: 150
            })
        },
        strike: {
            side: new gf.animation({
                url: "images/player/platearmor.png",
                offsety: 0,
                width: 128,
                numberOfFrames: 5,
                rate: 60
            }),
            up: new gf.animation({
                url: "images/player/platearmor.png",
                offsety: 384,
                width: 128,
                numberOfFrames: 5,
                rate: 60
            }),
            down: new gf.animation({
                url: "images/player/platearmor.png",
                offsety: 768,
                width: 128,
                numberOfFrames: 5,
                rate: 60
            })
        }
    };
    var weaponAnim = {
        stand: {
            side: new gf.animation({
                url: "images/player/sword2.png",
                offsety: 384,
                width: 192,
                numberOfFrames: 2,
                rate: 600
            }),
            up: new gf.animation({
                url: "images/player/sword2.png",
                offsety: 960,
                width: 192,
                numberOfFrames: 2,
                rate: 600
            }),
            down: new gf.animation({
                url: "images/player/sword2.png",
                offsety: 1536,
                width: 192,
                numberOfFrames: 2,
                rate: 600
            })
        },
        walk: {
            side: new gf.animation({
                url: "images/player/sword2.png",
                offsety: 192,
                width: 192,
                numberOfFrames: 4,
                rate: 150
            }),
            up: new gf.animation({
                url: "images/player/sword2.png",
                offsety: 768,
                width: 192,
                numberOfFrames: 4,
                rate: 150
            }),
            down: new gf.animation({
                url: "images/player/sword2.png",
                offsety: 1344,
                width: 192,
                numberOfFrames: 4,
                rate: 150
            })
        },
        strike: {
            side: new gf.animation({
                url: "images/player/sword2.png",
                offsety: 0,
                width: 192,
                numberOfFrames: 5,
                rate: 60
            }),
            up: new gf.animation({
                url: "images/player/sword2.png",
                offsety: 576,
                width: 192,
                numberOfFrames: 5,
                rate: 60
            }),
            down: new gf.animation({
                url: "images/player/sword2.png",
                offsety: 1152,
                width: 192,
                numberOfFrames: 5,
                rate: 60
            })
        }
    };

    var scientistAnim = new gf.animation({
        url: "images/npc/scientist.png",
        width: 96,
        numberOfFrames: 2,
        rate: 600
    });
    var cowboyAnim = new gf.animation({
        url: "images/npc/desertnpc.png",
        width: 96,
        numberOfFrames: 2,
        rate: 600
    });


    var skeletonAnim = {
        stand: {
            side: new gf.animation({
                url: "images/enemies/skeleton2.png",
                offsety: 384,
                width: 192,
                numberOfFrames: 2,
                rate: 600
            }),
            up: new gf.animation({
                url: "images/enemies/skeleton2.png",
                offsety: 960,
                width: 192,
                numberOfFrames: 2,
                rate: 600
            }),
            down: new gf.animation({
                url: "images/enemies/skeleton2.png",
                offsety: 1536,
                width: 192,
                numberOfFrames: 2,
                rate: 600
            })
        },
        walk: {
            side: new gf.animation({
                url: "images/player/sword2.png",
                offsety: 192,
                width: 192,
                numberOfFrames: 4,
                rate: 150
            }),
            up: new gf.animation({
                url: "images/player/sword2.png",
                offsety: 768,
                width: 192,
                numberOfFrames: 4,
                rate: 150
            }),
            down: new gf.animation({
                url: "images/player/sword2.png",
                offsety: 1344,
                width: 192,
                numberOfFrames: 4,
                rate: 150
            })
        },
        strike: {
            side: new gf.animation({
                url: "images/enemies/skeleton2.png",
                offsety: 0,
                width: 192,
                numberOfFrames: 3,
                rate: 60
            }),
            up: new gf.animation({
                url: "images/enemies/skeleton2.png",
                offsety: 576,
                width: 192,
                numberOfFrames: 3,
                rate: 60
            }),
            down: new gf.animation({
                url: "images/enemies/skeleton2.png",
                offsety: 1152,
                width: 192,
                numberOfFrames: 3,
                rate: 60
            })
        }
    };
    var ogreAnim = {
        stand: {
            side: new gf.animation({
                url: "images/enemies/ogre.png",
                offsety: 384,
                width: 192,
                numberOfFrames: 2,
                rate: 600
            }),
            up: new gf.animation({
                url: "images/enemies/ogre.png",
                offsety: 960,
                width: 192,
                numberOfFrames: 2,
                rate: 600
            }),
            down: new gf.animation({
                url: "images/enemies/ogre.png",
                offsety: 1536,
                width: 192,
                numberOfFrames: 2,
                rate: 600
            })
        },
        strike: {
            side: new gf.animation({
                url: "images/enemies/ogre.png",
                offsety: 0,
                width: 192,
                numberOfFrames: 3,
                rate: 60
            }),
            up: new gf.animation({
                url: "images/enemies/ogre.png",
                offsety: 576,
                width: 192,
                numberOfFrames: 3,
                rate: 60
            }),
            down: new gf.animation({
                url: "images/enemies/ogre.png",
                offsety: 1152,
                width: 192,
                numberOfFrames: 3,
                rate: 60
            })
        }
    };

    var player = new (function() {
        // the group holding both the player sprite and the weapon
        this.div = $();
        // the sprite holding the player's avatar
        this.avatar = $();
        // the sprite holding the weapon
        this.weapon = $();
        // the hit zone
        this.hitzone = $();
        // collision zone
        this.colzone = $();

        var moveX = 0;
        var moveY = 0;
        var state = "null";
        var orientation = "down";
        var interacted = false;

        this.getState = function() {
            switch (state) {
                case "idle":
                    return 0;
                case "walk":
                    return 1;
                default:
                    return 2;
            }
        };

        this.getOrientation = function() {
            switch (orientation) {
                case "down":
                    return 0;
                case "up":
                    return 1;
                case "left":
                    return 2;
                default:
                    return 3;
            }
        };

        this.update = function() {

            var newX = gf.x(this.div) + gf.x(this.colzone) + moveX;
            var newY = gf.y(this.div) + gf.y(this.colzone) + moveY;
            var newW = gf.w(this.colzone);
            var newH = gf.h(this.colzone);
            
//            var newX = 500;
//            var newY = 210;
//            var newW = 96;
//            var newH = 96;

            var collisions = gf.tilemapCollide($("#tiles2"), {x: newX, y: newY, width: newW, height: newH});
//            var collisions = gf.tilemapCollide($("#tiles2"), {x: sciX, y: sciY, width: sciW, height: sciH});
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

                var x = gf.intersect(newX, newX + newW, collisionBox.x1, collisionBox.x2);
                var y = gf.intersect(newY, newY + newH, collisionBox.y1, collisionBox.y2);

                var diffx = (x[0] === newX) ? x[0] - x[1] : x[1] - x[0];
                var diffy = (y[0] === newY) ? y[0] - y[1] : y[1] - y[0];
                if (Math.abs(diffx) > Math.abs(diffy)) {
                    // displace along the y axis
                    newY -= diffy;
                    moveY -= diffy;
                    speed = 0;
                    if (status === "jump" && diffy > 0) {
                        status = "stand";
                        gf.setAnimation(this.div, playerAnim.stand, true);
                    }
                } else {
                    // displace along the x axis
                    newX -= diffx;
                    moveX -= diffx;
                }
            }

            var nextX = gf.x(this.div) + moveX;
            var nextY = gf.y(this.div) + moveY;

            if (nextX > 0) {
                if (nextX > 1856) {
                    nextX = 1856;
                }
            } else {
                nextX = 0;
            }
            gf.x(this.div, nextX);
            if (nextY > 0) {
                if (nextY > 1856) {
                    nextY = 1856;
                }
            } else {
                nextY = 0;
            }
            gf.y(this.div, nextY);
            this.div.css("z-index", nextY + 160);

            moveX = 0;
            moveY = 0;
        };

        this.left = function() {
            if (state !== "strike") {
                if (orientation !== "left" && moveY === 0 && moveX === 0) {
                    orientation = "left";
                    gf.x(this.hitzone, 16);
                    gf.y(this.hitzone, 16);
                    gf.h(this.hitzone, 128 + 32);
                    gf.w(this.hitzone, 64);
                    gf.setAnimation(this.avatar, playerAnim.walk.side, true);
                    gf.setAnimation(this.weapon, weaponAnim.walk.side, true);
                    gf.transform(this.avatar, {flipH: true});
                    gf.transform(this.weapon, {flipH: true});

                } else if (state !== "walk") {
                    state = "walk";
                    gf.setAnimation(this.avatar, playerAnim.walk.side, true);
                    gf.setAnimation(this.weapon, weaponAnim.walk.side, true);
                }
                if (state === "walk") {
                    moveX -= 5;
                }
            }
        };

        this.right = function() {
            if (state !== "strike") {
                if (orientation !== "right" && moveY === 0 && moveX === 0) {
                    orientation = "right";
                    state = "walk";
                    gf.x(this.hitzone, 192 - 80);
                    gf.y(this.hitzone, 16);
                    gf.h(this.hitzone, 128 + 32);
                    gf.w(this.hitzone, 64);
                    gf.setAnimation(this.avatar, playerAnim.walk.side, true);
                    gf.setAnimation(this.weapon, weaponAnim.walk.side, true);
                    gf.transform(this.avatar, {flipH: false});
                    gf.transform(this.weapon, {flipH: false});

                } else if (state !== "walk") {
                    state = "walk";
                    gf.setAnimation(this.avatar, playerAnim.walk.side, true);
                    gf.setAnimation(this.weapon, weaponAnim.walk.side, true);
                }
                if (state === "walk") {
                    moveX += 5;
                }
            }
        };

        this.up = function() {
            if (state !== "strike") {
                if (orientation !== "up" && moveY === 0 && moveX === 0) {
                    orientation = "up";
                    state = "walk";
                    gf.x(this.hitzone, 16);
                    gf.y(this.hitzone, 16);
                    gf.w(this.hitzone, 128 + 32);
                    gf.h(this.hitzone, 64);
                    gf.setAnimation(this.avatar, playerAnim.walk.up, true);
                    gf.setAnimation(this.weapon, weaponAnim.walk.up, true);
                    gf.transform(this.avatar, {flipH: false});
                    gf.transform(this.weapon, {flipH: false});

                } else if (state !== "walk") {
                    state = "walk";
                    gf.setAnimation(this.avatar, playerAnim.walk.up, true);
                    gf.setAnimation(this.weapon, weaponAnim.walk.up, true);
                }
                if (state === "walk") {
                    moveY -= 5;
                }
            }

        };

        this.down = function() {
            if (state !== "strike") {
                if (orientation !== "down" && moveY === 0 && moveX === 0) {
                    orientation = "down";
                    state = "walk";
                    gf.x(this.hitzone, 16);
                    gf.y(this.hitzone, 192 - 80);
                    gf.w(this.hitzone, 128 + 32);
                    gf.h(this.hitzone, 64);
                    gf.setAnimation(this.avatar, playerAnim.walk.down, true);
                    gf.setAnimation(this.weapon, weaponAnim.walk.down, true);
                    gf.transform(this.avatar, {flipH: false});
                    gf.transform(this.weapon, {flipH: false});
                } else if (state !== "walk") {
                    state = "walk";
                    gf.setAnimation(this.avatar, playerAnim.walk.down, true);
                    gf.setAnimation(this.weapon, weaponAnim.walk.down, true);
                }
                if (state === "walk") {
                    moveY += 5;
                }
            }
        };

        this.strike = function() {
            if (state !== "strike") {
                state = "strike";
                interacted = false;
                switch (orientation) {
                    case "left":
                        gf.setAnimation(this.avatar, playerAnim.strike.side, false, function() {
                            state = "null";
                            player.idle();
                        });
                        gf.setAnimation(this.weapon, weaponAnim.strike.side);
                        break;
                    case "right":
                        gf.setAnimation(this.avatar, playerAnim.strike.side, false, function() {
                            state = "null";
                            player.idle();
                        });
                        gf.setAnimation(this.weapon, weaponAnim.strike.side);
                        break;
                    case "up":
                        gf.setAnimation(this.avatar, playerAnim.strike.up, false, function() {
                            state = "null";
                            player.idle();
                        });
                        gf.setAnimation(this.weapon, weaponAnim.strike.up);
                        break;
                    case "down":
                        gf.setAnimation(this.avatar, playerAnim.strike.down, false, function() {
                            state = "null";
                            player.idle();
                        });
                        gf.setAnimation(this.weapon, weaponAnim.strike.down);
                        break;
                }
            }
        };

        this.idle = function() {
            if (state !== "idle" && state !== "strike") {
                state = "idle";

                switch (orientation) {
                    case "left":
                        gf.setAnimation(this.avatar, playerAnim.stand.side, true);
                        gf.setAnimation(this.weapon, weaponAnim.stand.side, true);
                        gf.transform(this.avatar, {flipH: true});
                        gf.transform(this.weapon, {flipH: true});
                        break;
                    case "right":
                        gf.setAnimation(this.avatar, playerAnim.stand.side, true);
                        gf.setAnimation(this.weapon, weaponAnim.stand.side, true);
                        gf.transform(this.avatar, {flipH: false});
                        gf.transform(this.weapon, {flipH: false});
                        break;
                    case "up":
                        gf.setAnimation(this.avatar, playerAnim.stand.up, true);
                        gf.setAnimation(this.weapon, weaponAnim.stand.up, true);
                        gf.transform(this.avatar, {flipH: false});
                        gf.transform(this.weapon, {flipH: false});
                        break;
                    case "down":
                        gf.setAnimation(this.avatar, playerAnim.stand.down, true);
                        gf.setAnimation(this.weapon, weaponAnim.stand.down, true);
                        gf.transform(this.avatar, {flipH: false});
                        gf.transform(this.weapon, {flipH: false});
                        break;
                }
            }
        };
        this.detectInteraction = function(npcs, enemies, console) {
            
            for (var i = 0; i < enemies.length; i++) {
//                console.html(gf.spriteCollide(this.colzone, enemies[i].div));
                    if (gf.spriteCollide(this.colzone, enemies[i].div)) {
//                        currentOrientation = "false";
//                        if(!currentOrientation){
//                            currentOrientation  = orientation;
////                           console.html("fail") ;
//                        }
//                        console.html(gf.spriteCollide(this.colzone, enemies[i].div));
//                    console.html("inside");
                        if (orientation === "left" || orientation == "righti") {
                            moveX += 5;
                        }
                        if (orientation === "lefti" || orientation == "right") {
                            moveX -= 5;
                        }
                        if (orientation === "up" || orientation == "downi") {
                            moveY += 5;
                        }
                        if (orientation === "upi" || orientation == "down") {
                            moveY -= 5;
                        }
                    } else if(!gf.spriteCollide(this.colzone, enemies[i].div)){
                        var currentOrientation = orientation;
//                        console.html("outside");
                    }

                }
                
            for (var i = 0; i < npcs.length; i++) {
                    if (gf.spriteCollide(this.colzone, npcs[i].div)) {
//                        if(!currentOrientation){
//                            currentOrientation  = orientation;
////                           console.html("fail") ;
//                        }
//                        console.html(currentOrientation);
                        if (orientation === "left" || orientation == "righti") {
                            moveX += 5;
                        }
                        if (orientation === "lefti" || orientation == "right") {
                            moveX -= 5;
                        }
                        if (orientation === "up" || orientation == "downi") {
                            moveY += 5;
                        }
                        if (orientation === "upi" || orientation == "down") {
                            moveY -= 5;
                        }
                    }

                }
            if (state === "strike" && !interacted) {
                for (var i = 0; i < npcs.length; i++) {
                    if (gf.spriteCollide(this.hitzone, npcs[i].div)) {
                        npcs[i].object.dialog();
                        interacted = true;
                        return;
                    }
                }
                for (var i = 0; i < enemies.length; i++) {
                    if (gf.spriteCollide(this.hitzone, enemies[i].div)) {
                        var enemyRoll = enemies[i].object.defend();
                        var playerRoll = Math.round(Math.random() * 6) + 5;

                        if (enemyRoll <= playerRoll) {
                            var dead = enemies[i].object.kill(playerRoll);
                            console.html("You hit the enemy, and it has " + enemies[i].object.life + " life left!");
                            if (dead) {
                                console.html("You killed the enemy!");
//                                enemies[i].object.dead = true;
                                enemies[i].div.fadeOut(2000, function() {
                                    $(this).remove();
                                });
                                enemies.splice(i, 1);
                                
                            }
                        } else {
                            console.html("The enemy countered your attack!");
                        }
                        interacted = true;
                        return;
                    }
                }
            }
        };
    });

    var NPC = function(name, text, console) {
        var current = 0;

        this.getText = function() {
            if (current === text.length) {
                current = 0;
                return "";
            }
            return name + ": " + text[current++];
        };

        this.dialog = function() {
            console.html(this.getText());
        };
    };

    var Enemy = function(defendModifier, life) {
        this.dead = false;
        this.defend = function() {
            return Math.round(Math.random() * 6) + defendModifier;
        };

        this.kill = function(value) {
            life -= value;
            if (life <= 0) {
                state = "dead";
                this.dead = true;
                return true;
            }
            this.life = life;
            return false;
        };
    };

    var container, tiles, world, gameState, npcsGroup, enemiesGroup, console;
    var npcs = [];
    var enemies = [];

    var initialize = function() {
        $("#mygame").append("<div id='container' style='display: none; width: 800px; height: 600px;'>");
        container = $("#container");

        // create the console
        container.append("<div id='console' style='font-family: \"Press Start 2P\", cursive; color: #fff; width: 770px; height: 60px; padding: 15px; position: absolute; bottom: 0; background: rgba(0,0,0,0.5); z-index: 3000'>");
        console = $("#console");
        // the group holding all the other stuff
        world = gf.addGroup(container, "group", {
            x: -(510 - 192) / 2,
            y: -(360 - 192) / 2
        });

        // Create the level
        tiles = gf.addGroup(world, "tiles");
        gf.importTiled("forest.json", tiles, "tiles");
        $("#tiles3").css("z-index", "2990");

        // Create the NPCs 
        npcsGroup = gf.addGroup(world, "npcs");

        npcs.push({
            div: gf.addSprite(npcsGroup, "scientist1", {
                x: 500,
                y: 210,
                width: 96,
                height: 96
            }),
            object: new NPC("Dr. Where", ["Welcome to the Secret Forest!", "This forest is a small haven that you can relax in.", "My camp is across the river...", "there's someone you may want to meet there."], console)
        });
        npcs[npcs.length - 1].object.div = npcs[npcs.length - 1].div;
        gf.setAnimation(npcs[npcs.length - 1].div, scientistAnim, true);
        $("#scientist1").css("z-index", 800 + 96);

        npcs.push({
            div: gf.addSprite(npcsGroup, "cowboy1", {
                x: 1000,
                y: 410,
                width: 96,
                height: 96
            }),
            object: new NPC("Junior", ["Howdy lad! If you explore this forest", " be carefull! There are monsters roaming around!"], console)
        });
        npcs[npcs.length - 1].object.div = npcs[npcs.length - 1].div;
        gf.setAnimation(npcs[npcs.length - 1].div, cowboyAnim, true);
        $("#cowboy1").css("z-index", 600 + 96);

        // Create the enemies
        enemiesGroup = gf.addGroup(world, "enemies");

        enemies.push({
            div: gf.addSprite(enemiesGroup, "enemy1", {
                x: 210,
                y: 700,
                width: 192,
                height: 192
            }),
            object: new Enemy(5, 15)
        });
        enemies[enemies.length - 1].object.div = enemies[enemies.length - 1].div;
        gf.setAnimation(enemies[enemies.length - 1].div, skeletonAnim.stand.up, true);
        $("#enemy1").css("z-index", 1300 + 192 - 16);

        enemies.push({
            div: gf.addSprite(enemiesGroup, "enemy2", {
                x: 900,
                y: 700,
                width: 192,
                height: 192
            }),
            object: new Enemy(2, 50)
        });
        enemies[enemies.length - 1].object.div = enemies[enemies.length - 1].div;
        gf.setAnimation(enemies[enemies.length - 1].div, ogreAnim.stand.down, true);
        $("#enemy2").css("z-index", 1200 + 192 - 16);

        // Create the player
        player.div = gf.addGroup(world, "player", {
            x: initialPlayerPos.x,
            y: initialPlayerPos.y

        });
        player.avatar = gf.addSprite(player.div, "avatar", {
            x: (192 - 128) / 2,
            y: (192 - 128) / 2,
            width: 128,
            height: 128
        });
        player.weapon = gf.addSprite(player.div, "weapon", {
            width: 192,
            height: 192
        });
        player.hitzone = gf.addSprite(player.div, "hitzone", {
            x: 16,
            y: 192 - 80,
            width: 128 + 32,
            height: 64
        });
        player.colzone = gf.addSprite(player.div, "colzone", {
            x: 72,
            y: 76,
            width: 48,
            height: 64
        });

        player.idle();

        // Start game
        gameState = "walk";

        $("#startScreen").remove();
        container.css("display", "block");



        //update server 
        var updateFunction = function() {
//            prompt("updated?");
            $.getJSON(
                    "php_files/update.php",
                    {
                        name: name,
                        x: gf.x(player.div),
                        y: gf.y(player.div),
                        dir: player.getOrientation(),
                        state: player.getState()
                    },
//                    function(data){
//                        console.html('hi');
////                        var json = jQuery.parseJSON(data);
//////                        console.html("--"+data+"--");
////                        console.html(json.players[0].name);
//                    }
//                    console.html('hi');
            function(json, status) {
                // Here we need to update the position of all the other players
                var existingOthers = {};
                var players = [];
                var others = [];
                if (json) {
                    players = json.players;
                }
                for (var i = 0; i < players.length; i++) {
                    var other = players[i];
                    other.x = parseInt(other.x) || 0;
                    other.y = parseInt(other.y) || 0;
                    other.dir = parseInt(other.dir) || 0;
                    other.state = parseInt(other.state) || 0;
                    existingOthers["other_" + other.name] = true;
                    var avatar, weapon;
                    var div = $("#other_" + other.name);
                    var created = false;
                    if (div.length > 0) {
                        avatar = $("#other_" + other.name + "_avatar");
                        weapon = $("#other_" + other.name + "_weapon");
                        // update
                        gf.x(div, other.x);
                        gf.y(div, other.y);
                        div.css("z-index", other.y + 160);
                    } else {
                        var created = true;
                        // create other players
//                        console.html(other.x + " " + other.y);
                        div = gf.addGroup(world, "other_" + other.name, {
                            x: other.x,
                            y: other.y
                        });
                        others.push(div);
                        div.css("z-index", other.y + 160);
                        avatar = gf.addSprite(div, "other_" + other.name + "_avatar", {
                            x: (192 - 128) / 2,
                            y: (192 - 128) / 2,
                            width: 128,
                            height: 128
                        });
                        weapon = gf.addSprite(div, "other_" + other.name + "_weapon", {
                            width: 192,
                            height: 192
                        });
                        div.append("<div style='font-family: \"Press Start 2P\"; background: rgba(0,0,0,0.5); padding: 5px; color: #FFF; width: 192px; position: absolute;' id='test' >" + other.name + "</div>");
                        div.data("state", {dir: other.dir, state: other.state});
                    }

                    // set the correct animation
                    if (created || other.state !== div.data("state").state || other.dir !== div.data("state").dir) {
                        div.data("state", {dir: other.dir, state: other.state});

                        gf.transform(avatar, {flipH: false});
                        gf.transform(weapon, {flipH: false});
                        var pAnim = playerAnim.stand;
                        var wAnim = weaponAnim.stand;
                        if (other.state === 1) {
                            pAnim = playerAnim.walk;
                            wAnim = weaponAnim.walk;
                        } else if (other.state === 2) {
                            pAnim = playerAnim.strike;
                            wAnim = weaponAnim.strike;
                        }
                        if (other.dir === 0) {
                            gf.setAnimation(avatar, pAnim.down, true);
                            gf.setAnimation(weapon, wAnim.down, true);
                        } else if (other.dir === 1) {
                            gf.setAnimation(avatar, pAnim.up, true);
                            gf.setAnimation(weapon, wAnim.up, true);
                        } else {
                            gf.setAnimation(avatar, pAnim.side, true);
                            gf.setAnimation(weapon, wAnim.side, true);
                            if (other.dir === 2) {
                                gf.transform(avatar, {flipH: true});
                                gf.transform(weapon, {flipH: true});
                            }
                        }
                    }

                }
                // remove gone others
                for (var i = others.length - 1; i >= 0; i--) {
                    var other = others[i];
                    if (!existingOthers[other.attr("id")]) {
                        other.fadeOut(2000, function() {
                            $(this).remove();
                        });
                        others.splice(i, 1);
                    }
                }

//                var existingEnemies = {};
//                var enemiesGroup = $("#enemies");
//                for (var i = 0; i < json.enemies.length; i++) {
//                    enemy = json.enemies[i];
//                    var div = $("#" + enemy.name);
//                    existingEnemies[enemy.name] = true;
//                    if (div.size() === 0) {
//                        // create new
//                        var div = gf.addSprite(enemiesGroup, enemy.name, {
//                            x: enemy.x,
//                            y: enemy.y,
//                            width: 192,
//                            height: 192
//                        });
//                        enemies.push(div);
//
//                        switch (enemy.type) {
//                            case "skeleton":
//                                gf.setAnimation(div, skeletonAnim.stand.down, true);
//                                break;
//                            case "ogre":
//                                gf.setAnimation(div, ogreAnim.stand.down, true);
//                                break;
//                        }
//                        $("#enemy1").css("z-index", 1300 + 192 - 16);
//                    }
//                }
//                // remove dead enemies
//                for (var i = enemies.length - 1; i >= 0; i--) {
//                    var enemy = enemies[i];
//                    if (!existingEnemies[enemy.attr("id")]) {
//                        enemy.fadeOut(2000, function() {
//                            $(this).remove();
//                        });
//                        enemies.splice(i, 1);
//                    }
//                }
            }
            );
        };

        setInterval(updateFunction, 100);
    };

    var gameLoop = function() {

        var idle = true;
        if (gf.keyboard[37]) { //left arrow
            player.left();
            idle = false;
        }
        if (gf.keyboard[38]) { //up arrow
            player.up();
            idle = false;
        }
        if (gf.keyboard[39]) { //right arrow
            player.right();
            idle = false;
        }
        if (gf.keyboard[40]) { //down arrow
            player.down();
            idle = false;
        }
        if (gf.keyboard[32]) { //space
            player.strike();
            // Enemy.strike();
            idle = false;
        }
        if (idle) {
            player.idle();
        }

        player.detectInteraction(npcs, enemies, console);
        player.update();

        var margin = {x: (800 - 192) / 2, y: (600 - 192) / 2};
        var playerPos = {x: gf.x(player.div), y: gf.y(player.div)};

        gf.x(world, margin.x - Math.min(Math.max(playerPos.x, margin.x), 2048 - 800 + margin.x));
        gf.y(world, margin.y - Math.min(Math.max(playerPos.y, margin.y), 2048 - 600 + margin.y));

    };
    gf.addCallback(gameLoop, 30);

    $("#startScreen").click(function() {
        $("#startScreen").remove();
    
    });
});