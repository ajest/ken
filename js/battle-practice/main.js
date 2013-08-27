function init_battle_practice() {
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
        function initilizeObjets() {
            object.ken_prepared.init(queue.getResult("ken-still"));
            animation.rig_left(object.ken_prepared.obj);
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

                this.init = function(img) {
                    stage.addChild(object.ken_prepared.obj);
                    this.init_ken_prepared(img);
                    this.resize();
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

                this.resize = function() {
                    object.ken_prepared.obj.x = 50;
                    object.ken_prepared.obj.y = 50;
                };
            };
        };
        
        /**
         *
         * Animations 
         */
        
        var animation = new function() {
            
            this.rig_left = function(obj) {
                
                createjs.Tween.get(obj, {loop: true})
                    .to({x: 450}, 3000)
                    .to({skewY: 180}, 150)
                    .to({x: 50}, 3000)
                    ;
            };
        
        };
        
        /**
         * 
         * End of objects and animations
         */

        initilizeObjets();
    }

    /**
     * 
     * Preload all images of this canvas
     * @returns mixed
     */
    function preload() {
        queue = new createjs.LoadQueue(true);
        queue.loadFile({id: "ken-still", src: "img/ken-still.png"});
        queue.addEventListener("complete", handleComplete);

        /**
         * Add images for preload
         */
        queue.loadManifest([
            {id: "ken-still", src: "img/ken-still.png"},
            {id: "ken-still2", src: "img/ken-still2.png"}
        ]);
    }


}