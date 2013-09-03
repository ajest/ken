function init_battle_practice() {
    var canvas;
    var stage;
    var screen_width;
    var screen_height;
    var queue;
    var currentChildName = "ken-still";
    var currentChild;
    var currentPosy = 0;
    var currentPosx = 0;

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
            stage.addChild(bg);

            /**
             * Put here the objects and animations
             */
            object.ken_prepared.init(queue.getResult("ken-still"), 50, 50);
            object.ken_prepared2.init(queue.getResult("ken-still2"), 50, 100);
            object.ken_kick.init(queue.getResult("ken-kick"), 50, 50);
            object.ken_kick2.init(queue.getResult("ken-kick2"), 50, 50);



            /**
             * 
             * Controls of character
             */
            var j = jQuery.noConflict();
            (function($) {
                var x = object.ken_prepared.obj.x;
                var y = object.ken_prepared.obj.y;

                $('body').keypress(function(e) {
                    console.log(e.key);
                    switch (e.key)
                    {
                        case 'Right':
                            if (x < 550) {
                                x = x + 25;
                                animation.rig(object.ken_prepared.obj, x);
                            }
                            break;
                        case 'Left':
                            if (x > 50) {
                                x = x - 25;
                                animation.left(object.ken_prepared.obj, x);
                            }
                            break;
                        case 'Down':
                            if (y < 400) {
                                y = y + 25;
                                animation.up(object.ken_prepared.obj, y);
                            }
                            break;
                        case 'Up':
                            if (y > 25) {
                                y = y - 25;
                                animation.up(object.ken_prepared.obj, y);
                            }
                            break;
                        case 'Spacebar':
                            animation.kick(object.ken_prepared.obj, object.ken_kick.obj, x, y);
                            break;
                        case 'Tab':
                            animation.kick(object.ken_prepared.obj, object.ken_kick2.obj, x, y);
                            break;
                        case 'Enter':
                            /**
                             * 
                             * Add another movement
                             */
                            break;
                    }
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
             * Ken Kick2
             */
            this.ken_kick2 = new function() {
                this.obj = new createjs.Container();
                this.bmpAnimation;

                this.init = function(img, x, y) {
                    stage.addChild(object.ken_kick2.obj);
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
            
        }
        ;

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
            this.kick = function(objO, objF, x, y) {
                createjs.Tween.get(objO)
                        .to({alpha: 0, visible: false})
                        .addEventListener("change", handleChange);
                function handleChange(event) {
//                    console.log('changed');
                }

                objF.alpha = 1;
                createjs.Tween.get(objF)
                        .to({x: x, y: y})
                        .wait(700)
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
        };

        initilizeObjects();
    }

    /**
     * 
     * Preload all images of this canvas
     * @returns mixed
     */
    function preload() {
        queue = new createjs.LoadQueue(true);
        queue.addEventListener("complete", handleComplete);

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