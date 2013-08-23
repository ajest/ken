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
        function initilizeObjets(){
            ken_prepared.init(queue.getResult("ken-still"));
            
            /**
             * Pasar las animaciones a POO
             */
            
            createjs.Tween.get(ken_prepared.obj, {loop:true})
                    .to({x:450}, 3000)
                    .to({skewY:180})
                    .to({x:50}, 3000);       
        }
        
        /**
         * 
         * Objets
         */
        
        /**
         * 
         * @type mixed
         * Ken prepared
         */
        var ken_prepared = new function() {
            this.obj = new createjs.Container();
            this.bmpAnimation;

            this.init = function(img) {
                stage.addChild(ken_prepared.obj);
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
                ken_prepared.bmpAnimation = new createjs.BitmapAnimation(spriteSheet);
                ken_prepared.bmpAnimation.regX = ken_prepared.bmpAnimation.spriteSheet.frameWidth / 2 | 0;
                ken_prepared.bmpAnimation.regY = ken_prepared.bmpAnimation.spriteSheet.frameHeight / 2 | 0;
                ken_prepared.bmpAnimation.gotoAndPlay("walk");
                ken_prepared.bmpAnimation.shadow = new createjs.Shadow("#454", 0, 5, 4);
                ken_prepared.bmpAnimation.name = "ken-still";
                ken_prepared.bmpAnimation.direction = 90;
                ken_prepared.bmpAnimation.vX = 0.3;
                ken_prepared.bmpAnimation.currentFrame = 0;
                ken_prepared.obj.addChild(ken_prepared.bmpAnimation);
            };

            this.resize = function() {
                ken_prepared.obj.x = 50;
                ken_prepared.obj.y = 50;
            };
        };
        
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