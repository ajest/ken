function init_battle_practice() {
    var canvas;
    var stage;
    var screen_width;
    var screen_height;
    var queue;

    /**
     * Initial Configuration
     */
    canvas = document.getElementById("battle-practice");
    stage = new createjs.Stage(canvas);
    screen_width = canvas.width;
    screen_height = canvas.height;
    createjs.Ticker.addEventListener("tick", tick);
    createjs.Ticker.setFPS(60);
    function tick(e) {
        stage.update();
    }
    preload();

    function handleComplete() {
        function initilizeObjects() {
            /**
             * Background 
             */
            var bg = new createjs.Bitmap(queue.getResult("bg"));
            bg.scaleX = 0.45;
            bg.scaleY = 1;
            bg.x = -180;
            bg.y = -550;
            stage.addChild(bg);
            
            /**
             * Put here the objects and animations
             */
            object.ken_prepared.init(queue.getResult("ken-still"), 50, 50);
            object.ken_prepared2.init(queue.getResult("ken-still2"), 50, 100);
            object.ken_prepared3.init(queue.getResult("ken-still2"), 85, 135);
            object.ken_prepared4.init(queue.getResult("ken-still2"), 120, 170);
            object.ken_prepared5.init(queue.getResult("ken-still2"), 165, 205);
            object.ken_prepared6.init(queue.getResult("ken-still2"), 200, 240);
            object.ken_prepared7.init(queue.getResult("ken-still2"), 235, 285);
            
            object.ken_kick.init(queue.getResult("ken-kick"), 50, 50);
            object.ken_kick2.init(queue.getResult("ken-kick"), 50, 100);
            object.ken_kick3.init(queue.getResult("ken-kick"), 85, 135);
            object.ken_kick4.init(queue.getResult("ken-kick"), 120, 170);
            object.ken_kick5.init(queue.getResult("ken-kick"), 165, 205);
            object.ken_kick6.init(queue.getResult("ken-kick"), 200, 240);
            object.ken_kick7.init(queue.getResult("ken-kick"), 235, 285);
            
            object.ken_kick2_0.init(queue.getResult("ken-kick2"), 50, 50);
            object.ken_kick2_1.init(queue.getResult("ken-kick2"), 50, 100);
            object.ken_kick2_2.init(queue.getResult("ken-kick2"), 85, 135);
            object.ken_kick2_3.init(queue.getResult("ken-kick2"), 120, 170);
            object.ken_kick2_4.init(queue.getResult("ken-kick2"), 165, 205);
            object.ken_kick2_5.init(queue.getResult("ken-kick2"), 200, 240);
            object.ken_kick2_6.init(queue.getResult("ken-kick2"), 235, 285);

            /**
             * 
             * Some text
             */
            var text = new createjs.Text("¡Prove you're the leader!", "48px Arial", "#444");
            text.x = 45;
            text.y = 200;
            text.textBaseline = "alphabetic";
            stage.addChild(text);
            
            var textControls = new createjs.Text("Press arrow keys, space and tab keys", "28px Arial", "#222");
            textControls.x = -500;
            textControls.y = 200;
            textControls.textBaseline = "alphabetic";
            stage.addChild(textControls);
            
            
            animation.dance(object.ken_prepared.obj, 50, 50);
            animation.dance(object.ken_prepared2.obj, 50, 100);
            animation.dance(object.ken_prepared3.obj, 85, 135);
            animation.dance(object.ken_prepared4.obj, 120, 170);
            animation.dance(object.ken_prepared5.obj, 165, 205);
            animation.dance(object.ken_prepared6.obj, 200, 240);
            animation.dance(object.ken_prepared7.obj, 235, 285);
            animation.showText(text);
            animation.showTextControls(textControls);
            
            
            
            /**
             * 
             * Controls of character
             */
            var j = jQuery.noConflict();
            (function($) {
                var x = object.ken_prepared.obj.x;
                var y = object.ken_prepared.obj.y;
                var clave;
                
                $('body').keydown(function(e) {
                    if (e.which == null) {
                        clave = e.keyCode;
                    } else {
                        clave = e.which;
                        if (e.which != 0) {
                            clave = e.which;
                        } else {
                            clave = null;
                        }
                    }
                    
                    switch (clave)
                    {
                        case 39:
                            /**
                             * Rigth
                             */
                            if (x < 550) {
                                x = x + 25;
                                animation.rig(object.ken_prepared.obj, x);
                            }
                            break;
                        case 37:
                            /**
                             * Left
                             */
                            if (x > 50) {
                                x = x - 25;
                                animation.left(object.ken_prepared.obj, x);
                            }
                            break;
                        case 40:
                            /**
                             * Down
                             */
                            if (y < 400) {
                                y = y + 25;
                                animation.up(object.ken_prepared.obj, y);
                            }
                            break;
                        case 38:
                            /**
                             * Up
                             */
                            if (y > 25) {
                                y = y - 25;
                                animation.up(object.ken_prepared.obj, y);
                            }
                            break;
                        case 32:
                            /**
                             * Space
                             */
                            animation.kick(object.ken_prepared.obj, object.ken_kick.obj, x, y, 500);
                            
                            if (x > 300){
                                animation.kick(object.ken_prepared2.obj, object.ken_kick2.obj, 50, 100, 500);
                                animation.kick(object.ken_prepared3.obj, object.ken_kick3.obj, 85, 135, 500);
                                animation.kick(object.ken_prepared4.obj, object.ken_kick4.obj, 120, 170, 500);
                                animation.kick(object.ken_prepared5.obj, object.ken_kick5.obj, 165, 205, 500);
                                animation.kick(object.ken_prepared6.obj, object.ken_kick6.obj, 200, 240, 500);
                                animation.kick(object.ken_prepared7.obj, object.ken_kick7.obj, 235, 285, 500);
                            }
                            break;
                        case 9:
                            /**
                             * Tab
                             */
                            animation.kick(object.ken_prepared.obj, object.ken_kick2_0.obj, x, y, 500);
                            
                            if (x > 300){
                                animation.kick(object.ken_prepared2.obj, object.ken_kick2_1.obj, 50, 100, 500);
                                animation.kick(object.ken_prepared3.obj, object.ken_kick2_2.obj, 85, 135, 500);
                                animation.kick(object.ken_prepared4.obj, object.ken_kick2_3.obj, 120, 170, 500);
                                animation.kick(object.ken_prepared5.obj, object.ken_kick2_4.obj, 165, 205, 500);
                                animation.kick(object.ken_prepared6.obj, object.ken_kick2_5.obj, 200, 240, 500);
                                animation.kick(object.ken_prepared7.obj, object.ken_kick2_6.obj, 235, 285, 500);
                            }
                            break;
                        case 13:
                            /**
                             * 
                             * Add another movement
                             */
                            break;
                    }
                    return false;
                });
            })(j);
        }

        /**
         * 
         * Objects
         */
        var object = new function() {

            /**
             * 
             * Ken prepared
             */
            this.ken_prepared = new function() {
                this.obj = new createjs.Container();
                this.bmpAnimation;

                this.init = function(img, x, y) {
                    stage.addChild(object.ken_prepared.obj);
                    this.init_ken_prepared(img);
                    this.resize(x, y);
                };

                this.init_ken_prepared = function(img) {
                    var spriteSheet = new createjs.SpriteSheet({
                        images: [img],
                        frames: {width: 70, height: 80, regX: 35, regY: 40},
                        animations: {
                            walk: [0, 3, "walk", 7]
                        }
                    });

                    createjs.SpriteSheetUtils.addFlippedFrames(spriteSheet, true, true, false);
                    object.ken_prepared.bmpAnimation = new createjs.BitmapAnimation(spriteSheet);
                    object.ken_prepared.bmpAnimation.regX = object.ken_prepared.bmpAnimation.spriteSheet.frameWidth / 2 | 0;
                    object.ken_prepared.bmpAnimation.regY = object.ken_prepared.bmpAnimation.spriteSheet.frameHeight / 2 | 0;
                    object.ken_prepared.bmpAnimation.gotoAndPlay("walk");
                    object.ken_prepared.bmpAnimation.shadow = new createjs.Shadow("#454", 0, 5, 4);
                    object.ken_prepared.bmpAnimation.name = "ken-still";
                    object.ken_prepared.bmpAnimation.direction = 90;
                    object.ken_prepared.bmpAnimation.vX = 0.3;
                    object.ken_prepared.bmpAnimation.currentFrame = 0;
                    object.ken_prepared.obj.addChild(object.ken_prepared.bmpAnimation);
                };

                this.resize = function(x, y) {
                    object.ken_prepared.obj.x = x;
                    object.ken_prepared.obj.y = y;
                };
            };

            /**
             * 
             * Ken Prepared 2
             */
            this.ken_prepared2 = new function() {
                this.obj = new createjs.Container();
                this.bmpAnimation;

                this.init = function(img, x, y) {
                    stage.addChild(object.ken_prepared2.obj);
                    this.init_ken_prepared(img);
                    this.resize(x, y);
                };

                this.init_ken_prepared = function(img) {
                    var spriteSheet = new createjs.SpriteSheet({
                        images: [img],
                        frames: {width: 70, height: 80, regX: 35, regY: 40},
                        animations: {
                            walk: [0, 3, "walk", 7]
                        }
                    });

                    createjs.SpriteSheetUtils.addFlippedFrames(spriteSheet, true, true, false);
                    object.ken_prepared2.bmpAnimation = new createjs.BitmapAnimation(spriteSheet);
                    object.ken_prepared2.bmpAnimation.regX = object.ken_prepared2.bmpAnimation.spriteSheet.frameWidth / 2 | 0;
                    object.ken_prepared2.bmpAnimation.regY = object.ken_prepared2.bmpAnimation.spriteSheet.frameHeight / 2 | 0;
                    object.ken_prepared2.bmpAnimation.gotoAndPlay("walk");
                    object.ken_prepared2.bmpAnimation.shadow = new createjs.Shadow("#454", 0, 5, 4);
                    object.ken_prepared2.bmpAnimation.name = "ken-still2";
                    object.ken_prepared2.bmpAnimation.direction = 90;
                    object.ken_prepared2.bmpAnimation.vX = 0.3;
                    object.ken_prepared2.bmpAnimation.currentFrame = 0;
                    object.ken_prepared2.obj.addChild(object.ken_prepared2.bmpAnimation);
                };

                this.resize = function(x, y) {
                    object.ken_prepared2.obj.x = x;
                    object.ken_prepared2.obj.y = y;
                };
            };
            
            /**
             * 
             * Ken Prepared 3
             */
            this.ken_prepared3 = new function() {
                this.obj = new createjs.Container();
                this.bmpAnimation;

                this.init = function(img, x, y) {
                    stage.addChild(object.ken_prepared3.obj);
                    this.init_ken_prepared(img);
                    this.resize(x, y);
                };

                this.init_ken_prepared = function(img) {
                    var spriteSheet = new createjs.SpriteSheet({
                        images: [img],
                        frames: {width: 70, height: 80, regX: 35, regY: 40},
                        animations: {
                            walk: [0, 3, "walk", 7]
                        }
                    });

                    createjs.SpriteSheetUtils.addFlippedFrames(spriteSheet, true, true, false);
                    object.ken_prepared3.bmpAnimation = new createjs.BitmapAnimation(spriteSheet);
                    object.ken_prepared3.bmpAnimation.regX = object.ken_prepared3.bmpAnimation.spriteSheet.frameWidth / 2 | 0;
                    object.ken_prepared3.bmpAnimation.regY = object.ken_prepared3.bmpAnimation.spriteSheet.frameHeight / 2 | 0;
                    object.ken_prepared3.bmpAnimation.gotoAndPlay("walk");
                    object.ken_prepared3.bmpAnimation.shadow = new createjs.Shadow("#454", 0, 5, 4);
                    object.ken_prepared3.bmpAnimation.name = "ken-still2";
                    object.ken_prepared3.bmpAnimation.direction = 90;
                    object.ken_prepared3.bmpAnimation.vX = 0.3;
                    object.ken_prepared3.bmpAnimation.currentFrame = 0;
                    object.ken_prepared3.obj.addChild(object.ken_prepared3.bmpAnimation);
                };

                this.resize = function(x, y) {
                    object.ken_prepared3.obj.x = x;
                    object.ken_prepared3.obj.y = y;
                };
            };
            
            /**
             * 
             * Ken Prepared 4
             */
            this.ken_prepared4 = new function() {
                this.obj = new createjs.Container();
                this.bmpAnimation;

                this.init = function(img, x, y) {
                    stage.addChild(object.ken_prepared4.obj);
                    this.init_ken_prepared(img);
                    this.resize(x, y);
                };

                this.init_ken_prepared = function(img) {
                    var spriteSheet = new createjs.SpriteSheet({
                        images: [img],
                        frames: {width: 70, height: 80, regX: 35, regY: 40},
                        animations: {
                            walk: [0, 3, "walk", 7]
                        }
                    });

                    createjs.SpriteSheetUtils.addFlippedFrames(spriteSheet, true, true, false);
                    object.ken_prepared4.bmpAnimation = new createjs.BitmapAnimation(spriteSheet);
                    object.ken_prepared4.bmpAnimation.regX = object.ken_prepared4.bmpAnimation.spriteSheet.frameWidth / 2 | 0;
                    object.ken_prepared4.bmpAnimation.regY = object.ken_prepared4.bmpAnimation.spriteSheet.frameHeight / 2 | 0;
                    object.ken_prepared4.bmpAnimation.gotoAndPlay("walk");
                    object.ken_prepared4.bmpAnimation.shadow = new createjs.Shadow("#454", 0, 5, 4);
                    object.ken_prepared4.bmpAnimation.name = "ken-still2";
                    object.ken_prepared4.bmpAnimation.direction = 90;
                    object.ken_prepared4.bmpAnimation.vX = 0.3;
                    object.ken_prepared4.bmpAnimation.currentFrame = 0;
                    object.ken_prepared4.obj.addChild(object.ken_prepared4.bmpAnimation);
                };

                this.resize = function(x, y) {
                    object.ken_prepared4.obj.x = x;
                    object.ken_prepared4.obj.y = y;
                };
            };
            
            /**
             * 
             * Ken Prepared 5
             */
            this.ken_prepared5 = new function() {
                this.obj = new createjs.Container();
                this.bmpAnimation;

                this.init = function(img, x, y) {
                    stage.addChild(object.ken_prepared5.obj);
                    this.init_ken_prepared(img);
                    this.resize(x, y);
                };

                this.init_ken_prepared = function(img) {
                    var spriteSheet = new createjs.SpriteSheet({
                        images: [img],
                        frames: {width: 70, height: 80, regX: 35, regY: 40},
                        animations: {
                            walk: [0, 3, "walk", 7]
                        }
                    });

                    createjs.SpriteSheetUtils.addFlippedFrames(spriteSheet, true, true, false);
                    object.ken_prepared5.bmpAnimation = new createjs.BitmapAnimation(spriteSheet);
                    object.ken_prepared5.bmpAnimation.regX = object.ken_prepared5.bmpAnimation.spriteSheet.frameWidth / 2 | 0;
                    object.ken_prepared5.bmpAnimation.regY = object.ken_prepared5.bmpAnimation.spriteSheet.frameHeight / 2 | 0;
                    object.ken_prepared5.bmpAnimation.gotoAndPlay("walk");
                    object.ken_prepared5.bmpAnimation.shadow = new createjs.Shadow("#454", 0, 5, 4);
                    object.ken_prepared5.bmpAnimation.name = "ken-still2";
                    object.ken_prepared5.bmpAnimation.direction = 90;
                    object.ken_prepared5.bmpAnimation.vX = 0.3;
                    object.ken_prepared5.bmpAnimation.currentFrame = 0;
                    object.ken_prepared5.obj.addChild(object.ken_prepared5.bmpAnimation);
                };

                this.resize = function(x, y) {
                    object.ken_prepared5.obj.x = x;
                    object.ken_prepared5.obj.y = y;
                };
            };
            
            /**
             * 
             * Ken Prepared 6
             */
            this.ken_prepared6 = new function() {
                this.obj = new createjs.Container();
                this.bmpAnimation;

                this.init = function(img, x, y) {
                    stage.addChild(object.ken_prepared6.obj);
                    this.init_ken_prepared(img);
                    this.resize(x, y);
                };

                this.init_ken_prepared = function(img) {
                    var spriteSheet = new createjs.SpriteSheet({
                        images: [img],
                        frames: {width: 70, height: 80, regX: 35, regY: 40},
                        animations: {
                            walk: [0, 3, "walk", 7]
                        }
                    });

                    createjs.SpriteSheetUtils.addFlippedFrames(spriteSheet, true, true, false);
                    object.ken_prepared6.bmpAnimation = new createjs.BitmapAnimation(spriteSheet);
                    object.ken_prepared6.bmpAnimation.regX = object.ken_prepared6.bmpAnimation.spriteSheet.frameWidth / 2 | 0;
                    object.ken_prepared6.bmpAnimation.regY = object.ken_prepared6.bmpAnimation.spriteSheet.frameHeight / 2 | 0;
                    object.ken_prepared6.bmpAnimation.gotoAndPlay("walk");
                    object.ken_prepared6.bmpAnimation.shadow = new createjs.Shadow("#454", 0, 5, 4);
                    object.ken_prepared6.bmpAnimation.name = "ken-still2";
                    object.ken_prepared6.bmpAnimation.direction = 90;
                    object.ken_prepared6.bmpAnimation.vX = 0.3;
                    object.ken_prepared6.bmpAnimation.currentFrame = 0;
                    object.ken_prepared6.obj.addChild(object.ken_prepared6.bmpAnimation);
                };

                this.resize = function(x, y) {
                    object.ken_prepared6.obj.x = x;
                    object.ken_prepared6.obj.y = y;
                };
            };
            
            /**
             * 
             * Ken Prepared 7
             */
            this.ken_prepared7 = new function() {
                this.obj = new createjs.Container();
                this.bmpAnimation;

                this.init = function(img, x, y) {
                    stage.addChild(object.ken_prepared7.obj);
                    this.init_ken_prepared(img);
                    this.resize(x, y);
                };

                this.init_ken_prepared = function(img) {
                    var spriteSheet = new createjs.SpriteSheet({
                        images: [img],
                        frames: {width: 70, height: 80, regX: 35, regY: 40},
                        animations: {
                            walk: [0, 3, "walk", 7]
                        }
                    });

                    createjs.SpriteSheetUtils.addFlippedFrames(spriteSheet, true, true, false);
                    object.ken_prepared7.bmpAnimation = new createjs.BitmapAnimation(spriteSheet);
                    object.ken_prepared7.bmpAnimation.regX = object.ken_prepared7.bmpAnimation.spriteSheet.frameWidth / 2 | 0;
                    object.ken_prepared7.bmpAnimation.regY = object.ken_prepared7.bmpAnimation.spriteSheet.frameHeight / 2 | 0;
                    object.ken_prepared7.bmpAnimation.gotoAndPlay("walk");
                    object.ken_prepared7.bmpAnimation.shadow = new createjs.Shadow("#454", 0, 5, 4);
                    object.ken_prepared7.bmpAnimation.name = "ken-still2";
                    object.ken_prepared7.bmpAnimation.direction = 90;
                    object.ken_prepared7.bmpAnimation.vX = 0.3;
                    object.ken_prepared7.bmpAnimation.currentFrame = 0;
                    object.ken_prepared7.obj.addChild(object.ken_prepared7.bmpAnimation);
                };

                this.resize = function(x, y) {
                    object.ken_prepared7.obj.x = x;
                    object.ken_prepared7.obj.y = y;
                };
            };

            /**
             * 
             * Ken Kick
             */
            this.ken_kick = new function() {
                this.obj = new createjs.Container();
                this.bmpAnimation;

                this.init = function(img, x, y) {
                    stage.addChild(object.ken_kick.obj);
                    this.init_ken_kick(img);
                    this.resize(x, y);
                };

                this.init_ken_kick = function(img) {
                    var spriteSheet = new createjs.SpriteSheet({
                        images: [img],
                        frames: {width: 70, height: 80, regX: 35, regY: 40},
                        animations: {
                            walk: [0, 4, "walk", 8]
                        }
                    });

                    createjs.SpriteSheetUtils.addFlippedFrames(spriteSheet, true, true, false);
                    object.ken_kick.bmpAnimation = new createjs.BitmapAnimation(spriteSheet);
                    object.ken_kick.bmpAnimation.regX = object.ken_kick.bmpAnimation.spriteSheet.frameWidth / 2 | 0;
                    object.ken_kick.bmpAnimation.regY = object.ken_kick.bmpAnimation.spriteSheet.frameHeight / 2 | 0;
                    object.ken_kick.bmpAnimation.gotoAndPlay("walk");
                    object.ken_kick.bmpAnimation.shadow = new createjs.Shadow("#454", 0, 5, 4);
                    object.ken_kick.bmpAnimation.name = "ken-still2";
                    object.ken_kick.bmpAnimation.direction = 90;
                    object.ken_kick.bmpAnimation.vX = 0.3;
                    object.ken_kick.bmpAnimation.currentFrame = 0;
                    object.ken_kick.obj.addChild(object.ken_kick.bmpAnimation);
                };

                this.resize = function(x, y) {
                    object.ken_kick.obj.x = x;
                    object.ken_kick.obj.y = y;
                    object.ken_kick.obj.alpha = 0;
                };
            };
            
            /**
             * 
             * Ken Kick 2
             */
            this.ken_kick2 = new function() {
                this.obj = new createjs.Container();
                this.bmpAnimation;

                this.init = function(img, x, y) {
                    stage.addChild(object.ken_kick2.obj);
                    this.init_ken_kick(img);
                    this.resize(x, y);
                };

                this.init_ken_kick = function(img) {
                    var spriteSheet = new createjs.SpriteSheet({
                        images: [img],
                        frames: {width: 70, height: 80, regX: 35, regY: 40},
                        animations: {
                            walk: [0, 4, "walk", 8]
                        }
                    });

                    createjs.SpriteSheetUtils.addFlippedFrames(spriteSheet, true, true, false);
                    object.ken_kick2.bmpAnimation = new createjs.BitmapAnimation(spriteSheet);
                    object.ken_kick2.bmpAnimation.regX = object.ken_kick2.bmpAnimation.spriteSheet.frameWidth / 2 | 0;
                    object.ken_kick2.bmpAnimation.regY = object.ken_kick2.bmpAnimation.spriteSheet.frameHeight / 2 | 0;
                    object.ken_kick2.bmpAnimation.gotoAndPlay("walk");
                    object.ken_kick2.bmpAnimation.shadow = new createjs.Shadow("#454", 0, 5, 4);
                    object.ken_kick2.bmpAnimation.name = "ken-still2";
                    object.ken_kick2.bmpAnimation.direction = 90;
                    object.ken_kick2.bmpAnimation.vX = 0.3;
                    object.ken_kick2.bmpAnimation.currentFrame = 0;
                    object.ken_kick2.obj.addChild(object.ken_kick2.bmpAnimation);
                };

                this.resize = function(x, y) {
                    object.ken_kick2.obj.x = x;
                    object.ken_kick2.obj.y = y;
                    object.ken_kick2.obj.alpha = 0;
                };
            };
            
            /**
             * 
             * Ken Kick 3
             */
            this.ken_kick3 = new function() {
                this.obj = new createjs.Container();
                this.bmpAnimation;

                this.init = function(img, x, y) {
                    stage.addChild(object.ken_kick3.obj);
                    this.init_ken_kick(img);
                    this.resize(x, y);
                };

                this.init_ken_kick = function(img) {
                    var spriteSheet = new createjs.SpriteSheet({
                        images: [img],
                        frames: {width: 70, height: 80, regX: 35, regY: 40},
                        animations: {
                            walk: [0, 4, "walk", 8]
                        }
                    });

                    createjs.SpriteSheetUtils.addFlippedFrames(spriteSheet, true, true, false);
                    object.ken_kick3.bmpAnimation = new createjs.BitmapAnimation(spriteSheet);
                    object.ken_kick3.bmpAnimation.regX = object.ken_kick3.bmpAnimation.spriteSheet.frameWidth / 2 | 0;
                    object.ken_kick3.bmpAnimation.regY = object.ken_kick3.bmpAnimation.spriteSheet.frameHeight / 2 | 0;
                    object.ken_kick3.bmpAnimation.gotoAndPlay("walk");
                    object.ken_kick3.bmpAnimation.shadow = new createjs.Shadow("#454", 0, 5, 4);
                    object.ken_kick3.bmpAnimation.name = "ken-still2";
                    object.ken_kick3.bmpAnimation.direction = 90;
                    object.ken_kick3.bmpAnimation.vX = 0.3;
                    object.ken_kick3.bmpAnimation.currentFrame = 0;
                    object.ken_kick3.obj.addChild(object.ken_kick3.bmpAnimation);
                };

                this.resize = function(x, y) {
                    object.ken_kick3.obj.x = x;
                    object.ken_kick3.obj.y = y;
                    object.ken_kick3.obj.alpha = 0;
                };
            };
            
            /**
             * 
             * Ken Kick 4
             */
            this.ken_kick4 = new function() {
                this.obj = new createjs.Container();
                this.bmpAnimation;

                this.init = function(img, x, y) {
                    stage.addChild(object.ken_kick4.obj);
                    this.init_ken_kick(img);
                    this.resize(x, y);
                };

                this.init_ken_kick = function(img) {
                    var spriteSheet = new createjs.SpriteSheet({
                        images: [img],
                        frames: {width: 70, height: 80, regX: 35, regY: 40},
                        animations: {
                            walk: [0, 4, "walk", 8]
                        }
                    });

                    createjs.SpriteSheetUtils.addFlippedFrames(spriteSheet, true, true, false);
                    object.ken_kick4.bmpAnimation = new createjs.BitmapAnimation(spriteSheet);
                    object.ken_kick4.bmpAnimation.regX = object.ken_kick4.bmpAnimation.spriteSheet.frameWidth / 2 | 0;
                    object.ken_kick4.bmpAnimation.regY = object.ken_kick4.bmpAnimation.spriteSheet.frameHeight / 2 | 0;
                    object.ken_kick4.bmpAnimation.gotoAndPlay("walk");
                    object.ken_kick4.bmpAnimation.shadow = new createjs.Shadow("#454", 0, 5, 4);
                    object.ken_kick4.bmpAnimation.name = "ken-still2";
                    object.ken_kick4.bmpAnimation.direction = 90;
                    object.ken_kick4.bmpAnimation.vX = 0.3;
                    object.ken_kick4.bmpAnimation.currentFrame = 0;
                    object.ken_kick4.obj.addChild(object.ken_kick4.bmpAnimation);
                };

                this.resize = function(x, y) {
                    object.ken_kick4.obj.x = x;
                    object.ken_kick4.obj.y = y;
                    object.ken_kick4.obj.alpha = 0;
                };
            };
            
            /**
             * 
             * Ken Kick 5
             */
            this.ken_kick5 = new function() {
                this.obj = new createjs.Container();
                this.bmpAnimation;

                this.init = function(img, x, y) {
                    stage.addChild(object.ken_kick5.obj);
                    this.init_ken_kick(img);
                    this.resize(x, y);
                };

                this.init_ken_kick = function(img) {
                    var spriteSheet = new createjs.SpriteSheet({
                        images: [img],
                        frames: {width: 70, height: 80, regX: 35, regY: 40},
                        animations: {
                            walk: [0, 4, "walk", 8]
                        }
                    });

                    createjs.SpriteSheetUtils.addFlippedFrames(spriteSheet, true, true, false);
                    object.ken_kick5.bmpAnimation = new createjs.BitmapAnimation(spriteSheet);
                    object.ken_kick5.bmpAnimation.regX = object.ken_kick5.bmpAnimation.spriteSheet.frameWidth / 2 | 0;
                    object.ken_kick5.bmpAnimation.regY = object.ken_kick5.bmpAnimation.spriteSheet.frameHeight / 2 | 0;
                    object.ken_kick5.bmpAnimation.gotoAndPlay("walk");
                    object.ken_kick5.bmpAnimation.shadow = new createjs.Shadow("#454", 0, 5, 4);
                    object.ken_kick5.bmpAnimation.name = "ken-still2";
                    object.ken_kick5.bmpAnimation.direction = 90;
                    object.ken_kick5.bmpAnimation.vX = 0.3;
                    object.ken_kick5.bmpAnimation.currentFrame = 0;
                    object.ken_kick5.obj.addChild(object.ken_kick5.bmpAnimation);
                };

                this.resize = function(x, y) {
                    object.ken_kick5.obj.x = x;
                    object.ken_kick5.obj.y = y;
                    object.ken_kick5.obj.alpha = 0;
                };
            };
            
            /**
             * 
             * Ken Kick 6
             */
            this.ken_kick6 = new function() {
                this.obj = new createjs.Container();
                this.bmpAnimation;

                this.init = function(img, x, y) {
                    stage.addChild(object.ken_kick6.obj);
                    this.init_ken_kick(img);
                    this.resize(x, y);
                };

                this.init_ken_kick = function(img) {
                    var spriteSheet = new createjs.SpriteSheet({
                        images: [img],
                        frames: {width: 70, height: 80, regX: 35, regY: 40},
                        animations: {
                            walk: [0, 4, "walk", 8]
                        }
                    });

                    createjs.SpriteSheetUtils.addFlippedFrames(spriteSheet, true, true, false);
                    object.ken_kick6.bmpAnimation = new createjs.BitmapAnimation(spriteSheet);
                    object.ken_kick6.bmpAnimation.regX = object.ken_kick6.bmpAnimation.spriteSheet.frameWidth / 2 | 0;
                    object.ken_kick6.bmpAnimation.regY = object.ken_kick6.bmpAnimation.spriteSheet.frameHeight / 2 | 0;
                    object.ken_kick6.bmpAnimation.gotoAndPlay("walk");
                    object.ken_kick6.bmpAnimation.shadow = new createjs.Shadow("#454", 0, 5, 4);
                    object.ken_kick6.bmpAnimation.name = "ken-still2";
                    object.ken_kick6.bmpAnimation.direction = 90;
                    object.ken_kick6.bmpAnimation.vX = 0.3;
                    object.ken_kick6.bmpAnimation.currentFrame = 0;
                    object.ken_kick6.obj.addChild(object.ken_kick6.bmpAnimation);
                };

                this.resize = function(x, y) {
                    object.ken_kick6.obj.x = x;
                    object.ken_kick6.obj.y = y;
                    object.ken_kick6.obj.alpha = 0;
                };
            };
            
            /**
             * 
             * Ken Kick 7
             */
            this.ken_kick7 = new function() {
                this.obj = new createjs.Container();
                this.bmpAnimation;

                this.init = function(img, x, y) {
                    stage.addChild(object.ken_kick7.obj);
                    this.init_ken_kick(img);
                    this.resize(x, y);
                };

                this.init_ken_kick = function(img) {
                    var spriteSheet = new createjs.SpriteSheet({
                        images: [img],
                        frames: {width: 70, height: 80, regX: 35, regY: 40},
                        animations: {
                            walk: [0, 4, "walk", 8]
                        }
                    });

                    createjs.SpriteSheetUtils.addFlippedFrames(spriteSheet, true, true, false);
                    object.ken_kick7.bmpAnimation = new createjs.BitmapAnimation(spriteSheet);
                    object.ken_kick7.bmpAnimation.regX = object.ken_kick7.bmpAnimation.spriteSheet.frameWidth / 2 | 0;
                    object.ken_kick7.bmpAnimation.regY = object.ken_kick7.bmpAnimation.spriteSheet.frameHeight / 2 | 0;
                    object.ken_kick7.bmpAnimation.gotoAndPlay("walk");
                    object.ken_kick7.bmpAnimation.shadow = new createjs.Shadow("#454", 0, 5, 4);
                    object.ken_kick7.bmpAnimation.name = "ken-still2";
                    object.ken_kick7.bmpAnimation.direction = 90;
                    object.ken_kick7.bmpAnimation.vX = 0.3;
                    object.ken_kick7.bmpAnimation.currentFrame = 0;
                    object.ken_kick7.obj.addChild(object.ken_kick7.bmpAnimation);
                };

                this.resize = function(x, y) {
                    object.ken_kick7.obj.x = x;
                    object.ken_kick7.obj.y = y;
                    object.ken_kick7.obj.alpha = 0;
                };
            };
            
            
            /**
             * 
             * Ken Kick 2_0
             */
            this.ken_kick2_0 = new function() {
                this.obj = new createjs.Container();
                this.bmpAnimation;

                this.init = function(img, x, y) {
                    stage.addChild(object.ken_kick2_0.obj);
                    this.init_ken_kick2(img);
                    this.resize(x, y);
                };

                this.init_ken_kick2 = function(img) {
                    var spriteSheet = new createjs.SpriteSheet({
                        images: [img],
                        frames: {width: 70, height: 80, regX: 35, regY: 40},
                        animations: {
                            walk: [0, 4, "walk", 8]
                        }
                    });

                    createjs.SpriteSheetUtils.addFlippedFrames(spriteSheet, true, true, false);
                    object.ken_kick2_0.bmpAnimation = new createjs.BitmapAnimation(spriteSheet);
                    object.ken_kick2_0.bmpAnimation.regX = object.ken_kick2_0.bmpAnimation.spriteSheet.frameWidth / 2 | 0;
                    object.ken_kick2_0.bmpAnimation.regY = object.ken_kick2_0.bmpAnimation.spriteSheet.frameHeight / 2 | 0;
                    object.ken_kick2_0.bmpAnimation.gotoAndPlay("walk");
                    object.ken_kick2_0.bmpAnimation.shadow = new createjs.Shadow("#454", 0, 5, 4);
                    object.ken_kick2_0.bmpAnimation.name = "ken-still2";
                    object.ken_kick2_0.bmpAnimation.direction = 90;
                    object.ken_kick2_0.bmpAnimation.vX = 0.3;
                    object.ken_kick2_0.bmpAnimation.currentFrame = 0;
                    object.ken_kick2_0.obj.addChild(object.ken_kick2_0.bmpAnimation);
                };

                this.resize = function(x, y) {
                    object.ken_kick2_0.obj.x = x;
                    object.ken_kick2_0.obj.y = y;
                    object.ken_kick2_0.obj.alpha = 0;
                };
            };
            
            /**
             * 
             * Ken Kick 2_1
             */
            this.ken_kick2_1 = new function() {
                this.obj = new createjs.Container();
                this.bmpAnimation;

                this.init = function(img, x, y) {
                    stage.addChild(object.ken_kick2_1.obj);
                    this.init_ken_kick2(img);
                    this.resize(x, y);
                };

                this.init_ken_kick2 = function(img) {
                    var spriteSheet = new createjs.SpriteSheet({
                        images: [img],
                        frames: {width: 70, height: 80, regX: 35, regY: 40},
                        animations: {
                            walk: [0, 4, "walk", 8]
                        }
                    });

                    createjs.SpriteSheetUtils.addFlippedFrames(spriteSheet, true, true, false);
                    object.ken_kick2_1.bmpAnimation = new createjs.BitmapAnimation(spriteSheet);
                    object.ken_kick2_1.bmpAnimation.regX = object.ken_kick2_1.bmpAnimation.spriteSheet.frameWidth / 2 | 0;
                    object.ken_kick2_1.bmpAnimation.regY = object.ken_kick2_1.bmpAnimation.spriteSheet.frameHeight / 2 | 0;
                    object.ken_kick2_1.bmpAnimation.gotoAndPlay("walk");
                    object.ken_kick2_1.bmpAnimation.shadow = new createjs.Shadow("#454", 0, 5, 4);
                    object.ken_kick2_1.bmpAnimation.name = "ken-still2";
                    object.ken_kick2_1.bmpAnimation.direction = 90;
                    object.ken_kick2_1.bmpAnimation.vX = 0.3;
                    object.ken_kick2_1.bmpAnimation.currentFrame = 0;
                    object.ken_kick2_1.obj.addChild(object.ken_kick2_1.bmpAnimation);
                };

                this.resize = function(x, y) {
                    object.ken_kick2_1.obj.x = x;
                    object.ken_kick2_1.obj.y = y;
                    object.ken_kick2_1.obj.alpha = 0;
                };
            };
            
            /**
             * 
             * Ken Kick 2_2
             */
            this.ken_kick2_2 = new function() {
                this.obj = new createjs.Container();
                this.bmpAnimation;

                this.init = function(img, x, y) {
                    stage.addChild(object.ken_kick2_2.obj);
                    this.init_ken_kick2(img);
                    this.resize(x, y);
                };

                this.init_ken_kick2 = function(img) {
                    var spriteSheet = new createjs.SpriteSheet({
                        images: [img],
                        frames: {width: 70, height: 80, regX: 35, regY: 40},
                        animations: {
                            walk: [0, 4, "walk", 8]
                        }
                    });

                    createjs.SpriteSheetUtils.addFlippedFrames(spriteSheet, true, true, false);
                    object.ken_kick2_2.bmpAnimation = new createjs.BitmapAnimation(spriteSheet);
                    object.ken_kick2_2.bmpAnimation.regX = object.ken_kick2_2.bmpAnimation.spriteSheet.frameWidth / 2 | 0;
                    object.ken_kick2_2.bmpAnimation.regY = object.ken_kick2_2.bmpAnimation.spriteSheet.frameHeight / 2 | 0;
                    object.ken_kick2_2.bmpAnimation.gotoAndPlay("walk");
                    object.ken_kick2_2.bmpAnimation.shadow = new createjs.Shadow("#454", 0, 5, 4);
                    object.ken_kick2_2.bmpAnimation.name = "ken-still2";
                    object.ken_kick2_2.bmpAnimation.direction = 90;
                    object.ken_kick2_2.bmpAnimation.vX = 0.3;
                    object.ken_kick2_2.bmpAnimation.currentFrame = 0;
                    object.ken_kick2_2.obj.addChild(object.ken_kick2_2.bmpAnimation);
                };

                this.resize = function(x, y) {
                    object.ken_kick2_2.obj.x = x;
                    object.ken_kick2_2.obj.y = y;
                    object.ken_kick2_2.obj.alpha = 0;
                };
            };
            
            /**
             * 
             * Ken Kick 2_3
             */
            this.ken_kick2_3 = new function() {
                this.obj = new createjs.Container();
                this.bmpAnimation;

                this.init = function(img, x, y) {
                    stage.addChild(object.ken_kick2_3.obj);
                    this.init_ken_kick2(img);
                    this.resize(x, y);
                };

                this.init_ken_kick2 = function(img) {
                    var spriteSheet = new createjs.SpriteSheet({
                        images: [img],
                        frames: {width: 70, height: 80, regX: 35, regY: 40},
                        animations: {
                            walk: [0, 4, "walk", 8]
                        }
                    });

                    createjs.SpriteSheetUtils.addFlippedFrames(spriteSheet, true, true, false);
                    object.ken_kick2_3.bmpAnimation = new createjs.BitmapAnimation(spriteSheet);
                    object.ken_kick2_3.bmpAnimation.regX = object.ken_kick2_3.bmpAnimation.spriteSheet.frameWidth / 2 | 0;
                    object.ken_kick2_3.bmpAnimation.regY = object.ken_kick2_3.bmpAnimation.spriteSheet.frameHeight / 2 | 0;
                    object.ken_kick2_3.bmpAnimation.gotoAndPlay("walk");
                    object.ken_kick2_3.bmpAnimation.shadow = new createjs.Shadow("#454", 0, 5, 4);
                    object.ken_kick2_3.bmpAnimation.name = "ken-still2";
                    object.ken_kick2_3.bmpAnimation.direction = 90;
                    object.ken_kick2_3.bmpAnimation.vX = 0.3;
                    object.ken_kick2_3.bmpAnimation.currentFrame = 0;
                    object.ken_kick2_3.obj.addChild(object.ken_kick2_3.bmpAnimation);
                };

                this.resize = function(x, y) {
                    object.ken_kick2_3.obj.x = x;
                    object.ken_kick2_3.obj.y = y;
                    object.ken_kick2_3.obj.alpha = 0;
                };
            };
            
            /**
             * 
             * Ken Kick 2_4
             */
            this.ken_kick2_4 = new function() {
                this.obj = new createjs.Container();
                this.bmpAnimation;

                this.init = function(img, x, y) {
                    stage.addChild(object.ken_kick2_4.obj);
                    this.init_ken_kick2(img);
                    this.resize(x, y);
                };

                this.init_ken_kick2 = function(img) {
                    var spriteSheet = new createjs.SpriteSheet({
                        images: [img],
                        frames: {width: 70, height: 80, regX: 35, regY: 40},
                        animations: {
                            walk: [0, 4, "walk", 8]
                        }
                    });

                    createjs.SpriteSheetUtils.addFlippedFrames(spriteSheet, true, true, false);
                    object.ken_kick2_4.bmpAnimation = new createjs.BitmapAnimation(spriteSheet);
                    object.ken_kick2_4.bmpAnimation.regX = object.ken_kick2_4.bmpAnimation.spriteSheet.frameWidth / 2 | 0;
                    object.ken_kick2_4.bmpAnimation.regY = object.ken_kick2_4.bmpAnimation.spriteSheet.frameHeight / 2 | 0;
                    object.ken_kick2_4.bmpAnimation.gotoAndPlay("walk");
                    object.ken_kick2_4.bmpAnimation.shadow = new createjs.Shadow("#454", 0, 5, 4);
                    object.ken_kick2_4.bmpAnimation.name = "ken-still2";
                    object.ken_kick2_4.bmpAnimation.direction = 90;
                    object.ken_kick2_4.bmpAnimation.vX = 0.3;
                    object.ken_kick2_4.bmpAnimation.currentFrame = 0;
                    object.ken_kick2_4.obj.addChild(object.ken_kick2_4.bmpAnimation);
                };

                this.resize = function(x, y) {
                    object.ken_kick2_4.obj.x = x;
                    object.ken_kick2_4.obj.y = y;
                    object.ken_kick2_4.obj.alpha = 0;
                };
            };
            
            /**
             * 
             * Ken Kick 2_5
             */
            this.ken_kick2_5 = new function() {
                this.obj = new createjs.Container();
                this.bmpAnimation;

                this.init = function(img, x, y) {
                    stage.addChild(object.ken_kick2_5.obj);
                    this.init_ken_kick2(img);
                    this.resize(x, y);
                };

                this.init_ken_kick2 = function(img) {
                    var spriteSheet = new createjs.SpriteSheet({
                        images: [img],
                        frames: {width: 70, height: 80, regX: 35, regY: 40},
                        animations: {
                            walk: [0, 4, "walk", 8]
                        }
                    });

                    createjs.SpriteSheetUtils.addFlippedFrames(spriteSheet, true, true, false);
                    object.ken_kick2_5.bmpAnimation = new createjs.BitmapAnimation(spriteSheet);
                    object.ken_kick2_5.bmpAnimation.regX = object.ken_kick2_5.bmpAnimation.spriteSheet.frameWidth / 2 | 0;
                    object.ken_kick2_5.bmpAnimation.regY = object.ken_kick2_5.bmpAnimation.spriteSheet.frameHeight / 2 | 0;
                    object.ken_kick2_5.bmpAnimation.gotoAndPlay("walk");
                    object.ken_kick2_5.bmpAnimation.shadow = new createjs.Shadow("#454", 0, 5, 4);
                    object.ken_kick2_5.bmpAnimation.name = "ken-still2";
                    object.ken_kick2_5.bmpAnimation.direction = 90;
                    object.ken_kick2_5.bmpAnimation.vX = 0.3;
                    object.ken_kick2_5.bmpAnimation.currentFrame = 0;
                    object.ken_kick2_5.obj.addChild(object.ken_kick2_5.bmpAnimation);
                };

                this.resize = function(x, y) {
                    object.ken_kick2_5.obj.x = x;
                    object.ken_kick2_5.obj.y = y;
                    object.ken_kick2_5.obj.alpha = 0;
                };
            };
            
            /**
             * 
             * Ken Kick 2_6
             */
            this.ken_kick2_6 = new function() {
                this.obj = new createjs.Container();
                this.bmpAnimation;

                this.init = function(img, x, y) {
                    stage.addChild(object.ken_kick2_6.obj);
                    this.init_ken_kick2(img);
                    this.resize(x, y);
                };

                this.init_ken_kick2 = function(img) {
                    var spriteSheet = new createjs.SpriteSheet({
                        images: [img],
                        frames: {width: 70, height: 80, regX: 35, regY: 40},
                        animations: {
                            walk: [0, 4, "walk", 8]
                        }
                    });

                    createjs.SpriteSheetUtils.addFlippedFrames(spriteSheet, true, true, false);
                    object.ken_kick2_6.bmpAnimation = new createjs.BitmapAnimation(spriteSheet);
                    object.ken_kick2_6.bmpAnimation.regX = object.ken_kick2_6.bmpAnimation.spriteSheet.frameWidth / 2 | 0;
                    object.ken_kick2_6.bmpAnimation.regY = object.ken_kick2_6.bmpAnimation.spriteSheet.frameHeight / 2 | 0;
                    object.ken_kick2_6.bmpAnimation.gotoAndPlay("walk");
                    object.ken_kick2_6.bmpAnimation.shadow = new createjs.Shadow("#454", 0, 5, 4);
                    object.ken_kick2_6.bmpAnimation.name = "ken-still2";
                    object.ken_kick2_6.bmpAnimation.direction = 90;
                    object.ken_kick2_6.bmpAnimation.vX = 0.3;
                    object.ken_kick2_6.bmpAnimation.currentFrame = 0;
                    object.ken_kick2_6.obj.addChild(object.ken_kick2_6.bmpAnimation);
                };

                this.resize = function(x, y) {
                    object.ken_kick2_6.obj.x = x;
                    object.ken_kick2_6.obj.y = y;
                    object.ken_kick2_6.obj.alpha = 0;
                };
            };
        };

        /**
         *
         * Animations 
         */
        var animation = new function() {

            /**
             * 
             * @param {object} obj 
             * @param {int} x
             * @returns {}
             */
            this.rig = function(obj, x) {
                createjs.Tween.get(obj, {override: true})
                        .to({skewY: 0}, 50)
                        .to({x: x}, 50)
                        .addEventListener("change", handleChange);
                function handleChange(event) {
//                    console.log('changed');
                }
            };

            /**
             * 
             * @param {object} obj
             * @param {int} x
             * @returns {}
             */
            this.left = function(obj, x) {
                createjs.Tween.get(obj, {override: true})
                        .to({skewY: 180}, 50)
                        .to({x: x}, 50)
                        .addEventListener("change", handleChange);
                function handleChange(event) {
//                    console.log('changed');
                }
            };

            /**
             * 
             * @param {object} obj
             * @param {int} y
             * @returns {}
             */
            this.up = function(obj, y) {
                createjs.Tween.get(obj, {override: true})
                        .to({y: y}, 50)
                        .addEventListener("change", handleChange);
                function handleChange(event) {
//                    console.log('changed');
                }
            };

            /**
             * 
             * @param {object} obj
             * @param {int} y
             * @returns {}
             */
            this.kick = function(objO, objF, x, y, tw) {
                createjs.Tween.get(objO)
                        .to({alpha: 0, visible: false})
                        .addEventListener("change", handleChange);
                function handleChange(event) {
//                    console.log('changed');
                    objF.alpha = 1;
                }

                
                createjs.Tween.get(objF)
                        .to({x: x, y: y})
                        .wait(tw)
                        .call(onComplete);
                        function onComplete() {
                            createjs.Tween.get(objO)
                                    .to({alpha: 1, visible: true})
                                    .call(onComplete2);
                                    function onComplete2() {
                                       objF.alpha = 0;
                                    }
                        }
            };
            
            
            this.dance = function(obj, x, y) {
                createjs.Tween.get(obj, {override: true})
                        .wait(1000)
                        .to({x: x+75}, 1000, createjs.Ease.elasticInOut)
                        .to({y: y+12}, 1000, createjs.Ease.elasticInOut)
                        .wait(600)
                        .to({x:x+25, y:y+25}, 1000)
                        .to({x:x+75, y:y+75}, 1000)
                        .to({x:x+25, y:y+25}, 1000)
                        .to({x:x+75, y:y+75}, 1000)
                        .to({skewY: 180}, 250)
                        .to({skewY: 360}, 250)
                        .to({skewY: 100}, 150)
                        .to({skewY: 180}, 100)
                        .to({skewX: 180}, 500)
                        .to({skewX: 180}, 500)
                        .to({x: x, y: y}, 2000)
                        .wait(500)
                        .to({skewX: 180}, 500)
                        .to({skewY: 0}, 500)
                        .to({skewX: 0}, 500)
                        .addEventListener("change", handleChange);
                function handleChange(event) {
//                    console.log('changed');
                }
            };
            
            this.showText = function(txt){
              createjs.Tween.get(txt, {override: true})
                        .wait(2000)
                        .to({x: 300}, 500, createjs.Ease.sineIn())
                        .to({x: 200}, 500, createjs.Ease.sineIn())
                        .to({x:600}, 250, createjs.Ease.sineIn())
                function handleChange(event) {
//                    console.log('changed');
                }  
            };
            
            this.showTextControls = function(txt){
              createjs.Tween.get(txt, {override: true})
                        .wait(4000)
                        .to({x: 50}, 200, createjs.Ease.elasticIn())
                        .wait(3000)
                        .to({x: 300}, 500, createjs.Ease.sineIn())
                        .to({x: 200}, 500, createjs.Ease.sineIn())
                        .to({x:600}, 250, createjs.Ease.sineIn())
                function handleChange(event) {
//                    console.log('changed');
                }  
            };
            
        };

        initilizeObjects();
    }
    
    /**
     * 
     * @param {object} e
     * @returns {mixed}
     */
    function handleProgress(e){
        var progressSet = e.progress * 400;
        var graphics = new createjs
                .Graphics()
                .beginFill("#222")
                .drawRect(100, 100, progressSet, 10);
        var shape = new createjs.Shape(graphics);
        stage.addChild(shape);
    }

    /**
     * 
     * Preload all images of this canvas
     * @returns mixed
     */
    function preload() {
        queue = new createjs.LoadQueue(true);
        queue.addEventListener("complete", handleComplete);
        queue.addEventListener("progress", handleProgress);

        /**
         * Add images for preload
         */
        queue.loadManifest([
            {id: "bg", src: "img/bg.png"},
            {id: "ken-still", src: "img/ken-still.png"},
            {id: "ken-still2", src: "img/ken-still2.png"},
            {id: "ken-kick", src: "img/ken-kick.png"},
            {id: "ken-kick2", src: "img/ken-kick2.png"}
        ]);
    }
}