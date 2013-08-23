var j = jQuery.noConflict();
(function($) {
    $('#still').click(still);
    $('#walk').click(walk);
    $('#hit').click(hit);
    $('#haduken').click(haduken);
    $('#bend').click(bend);
    $('#jump').click(jump);
    $('#kick').click(kick);
    $('#kick2').click(kick_spin);
})(j);

var canvas;
var stage;
var screen_width;
var screen_height;
var bmpAnimation;
var numberOfImagesLoaded = 0;

/*
 * Current data of the element
 */
var currentPosx = 0;
/**
 * 
 * @type String
 * Put here the first element name of all
 */
var currentChildName = 'ken-still';
var currentChild;
var currentPosy = 0;

/**
 * 
 * Objetos KEN
 */
var imgKenPrepared = new Image();
var imgKenStill = new Image();
var imgKenHit = new Image();
var imgHaduken = new Image();
var imgKenBend = new Image();
var imgKenJump = new Image();
var imgKenKick = new Image();
var imgKenKick2 = new Image();
var imgPower = new Image();
var imgPowerDisolve = new Image();

window.onload = function() {
    init();
};

function init() {
    canvas = document.getElementById("battle-practice");
    
    /**
     * 
     * Ken Prepared
     */
    imgKenPrepared.onload = handleImageLoad;
    imgKenPrepared.onerror = handleImageError;
    imgKenPrepared.src = "img/ken-still.png";
    
    /**
     * 
     * Ken Still
     */
    imgKenStill.onload = handleImageLoad;
    imgKenStill.onerror = handleImageError;
    imgKenStill.src = "img/ken-still2.png";
    
    /**
     * 
     * Ken Hit
     */
    imgKenHit.onload = handleImageLoad;
    imgKenHit.onerror = handleImageError;
    imgKenHit.src = "img/ken-hit.png";
    
    /**
     * Ken Haduken
     */
    imgHaduken.onload = handleImageLoad;
    imgHaduken.onerror = handleImageError;
    imgHaduken.src = "img/ken-haduken.png";
    
    /**
     * Ken Bending over
     */
    imgKenBend.onload = handleImageLoad;
    imgKenBend.onerror = handleImageError;
    imgKenBend.src = "img/ken-bend.png";
    
    /**
     * Ken Jump
     */
    imgKenJump.onload = handleImageLoad;
    imgKenJump.onerror = handleImageError;
    imgKenJump.src = "img/ken-jump.png";
    
    /**
     * Ken Kick
     */
    imgKenKick.onload = handleImageLoad;
    imgKenKick.onerror = handleImageError;
    imgKenKick.src = "img/ken-kick.png";
    
    /**
     * Ken Strange Kick
     */
    imgKenKick2.onload = handleImageLoad;
    imgKenKick2.onerror = handleImageError;
    imgKenKick2.src = "img/ken-kick2.png";
    
    /**
     * Power of the haduken
     */
    imgPower.onload = handleImageLoad;
    imgPower.onerror = handleImageError;
    imgPower.src = "img/power.png";
    
    /**.
     * Power of the haduken disolved
     */
    imgPowerDisolve.onload = handleImageLoad;
    imgPowerDisolve.onerror = handleImageError;
    imgPowerDisolve.src = "img/power-disolve.png";
    
}

function startGame() {
    stage = new createjs.Stage(canvas);
    screen_width = canvas.width;
    screen_height = canvas.height;
    var bg = new createjs.Bitmap("img/bg.png");

    /**
     * 
     * @type @exp;createjs@call;SpriteSheet
     * Ken Still
     */
    var spriteSheet = new createjs.SpriteSheet({
        images: [imgKenPrepared],
        frames: {width: 70, height: 80, regX: 35, regY: 40},
        animations: {
            walk: [0, 3, "walk", 7]
        }
    });
    
    /**
     * 
     * @type @exp;createjs@call;SpriteSheet
     * Ken still2
     */
    var spriteSheetIdle = new createjs.SpriteSheet({
        images: [imgKenStill],
        frames: { width: 70, height: 80, regX: 35, regY: 40}, 
        animations: {
            idle: [0, 4, "idle", 9]
        }
    });
    
    /**
     * 
     * @type @exp;createjs@call;SpriteSheet
     * Ken Hit
     */
    var spriteSheetHit = new createjs.SpriteSheet({
        images: [imgKenHit],
        frames: { width: 70, height: 80, regX: 35, regY: 40}, 
        animations: {
            idle: [0, 2, "idle", 9]
        }
    });
    
    /**
     * 
     * @type @exp;createjs@call;SpriteSheet
     * Ken Haduken
     */
    var spriteSheetHaduken = new createjs.SpriteSheet({
        images: [imgHaduken],
        frames: { width: 70, height: 80, regX: 35, regY: 40}, 
        animations: {
            idle: [0, 3, "idle", 11]
        }
    });
    
    /**
     * 
     * @type @exp;createjs@call;SpriteSheet
     * Ken Bending over
     */
    var spriteSheetBend = new createjs.SpriteSheet({
        images: [imgKenBend],
        frames: { width: 70, height: 80, regX: 35, regY: 40}, 
        animations: {
            idle: [0, 0, "idle", 11]
        }
    });
    
    /**
     * 
     * @type @exp;createjs@call;SpriteSheet
     * Ken Jump
     */
    var spriteSheetJump = new createjs.SpriteSheet({
        images: [imgKenJump],
        frames: { width: 70, height: 80, regX: 35, regY: 40}, 
        animations: {
         jump: {
             frames: [0,1,2,3,4,5,6],
             next: "idle",
             frequency: 7
         },
         stand: 7
     }
    });
    
    var spriteSheetKick = new createjs.SpriteSheet({
        images: [imgKenKick],
        frames: { width: 70, height: 80, regX: 35, regY: 40}, 
        animations: {
            idle: [0, 4, "idle", 11]
        }     
    });
    
    var spriteSheetKick2 = new createjs.SpriteSheet({
        images: [imgKenKick2],
        frames: { width: 70, height: 80, regX: 35, regY: 40}, 
        animations: {
            idle: [0, 4, "idle", 11]
        }
    });

    bmpAnimationIdle = new createjs.BitmapAnimation(spriteSheetIdle);
    bmpAnimationIdle.name = "ken-still2";
    bmpAnimationIdle.x = 200;
    bmpAnimationIdle.y = 250;
    bmpAnimationIdle.shadow = new createjs.Shadow("#454", 0, 5, 4);
    
    bmpAnimationHit = new createjs.BitmapAnimation(spriteSheetHit);
    bmpAnimationHit.name = "ken-hit";
    bmpAnimationHit.x = 200;
    bmpAnimationHit.y = 250;
    bmpAnimationHit.shadow = new createjs.Shadow("#454", 0, 5, 4);
    
    bmpAnimationHaduken = new createjs.BitmapAnimation(spriteSheetHaduken);
    bmpAnimationHaduken.name = "ken-haduken";
    bmpAnimationHaduken.x = 200;
    bmpAnimationHaduken.y = 250;
    bmpAnimationHaduken.shadow = new createjs.Shadow("#454", 0, 5, 4);
    
    bmpAnimationBend = new createjs.BitmapAnimation(spriteSheetBend);
    bmpAnimationBend.name = "ken-bend";
    bmpAnimationBend.x = 200;
    bmpAnimationBend.y = 250;
    bmpAnimationBend.shadow = new createjs.Shadow("#454", 0, 5, 4);
    
    createjs.SpriteSheetUtils.addFlippedFrames(spriteSheetJump, true, false, false);
    bmpAnimationJump = new createjs.BitmapAnimation(spriteSheetJump);
    bmpAnimationJump.regX = bmpAnimationJump.spriteSheetJump.frameWidth/2|0;
    bmpAnimationJump.regY = bmpAnimationJump.spriteSheetJump.frameHeight/2|0;
    bmpAnimationJump.name = "ken-jump";
    bmpAnimationJump.shadow = new createjs.Shadow("#454", 0, 5, 4);
    bmpAnimationJump.direction = 90;
    bmpAnimationJump.vX = 0.5;
    bmpAnimationJump.x = 200;
    bmpAnimationJump.y = 250;
    bmpAnimationJump.currentFrame = 0;
    
    bmpAnimationKick = new createjs.BitmapAnimation(spriteSheetKick);
    bmpAnimationKick.name = "ken-kick";
    bmpAnimationKick.x = 200;
    bmpAnimationKick.y = 250;
    bmpAnimationKick.shadow = new createjs.Shadow("#454", 0, 5, 4);
    
    bmpAnimationKick2 = new createjs.BitmapAnimation(spriteSheetKick2);
    bmpAnimationKick2.name = "ken-kick2";
    bmpAnimationKick2.x = 200;
    bmpAnimationKick2.y = 250;
    bmpAnimationKick2.shadow = new createjs.Shadow("#454", 0, 5, 4);
    
    createjs.SpriteSheetUtils.addFlippedFrames(spriteSheet, true, false, false);
    bmpAnimation = new createjs.BitmapAnimation(spriteSheet);
    bmpAnimation.regX = bmpAnimation.spriteSheet.frameWidth/2|0;
    bmpAnimation.regY = bmpAnimation.spriteSheet.frameHeight/2|0;
    bmpAnimation.gotoAndPlay("walk");
    bmpAnimation.shadow = new createjs.Shadow("#454", 0, 5, 4);
    bmpAnimation.name = "ken-still";
    bmpAnimation.direction = 90;
    bmpAnimation.vX = 0.3;
    bmpAnimation.x = 200;
    bmpAnimation.y = 250;
    bmpAnimation.currentFrame = 0;
    
    stage.addChild(bg);
    stage.addChild(bmpAnimation);
    
    createjs.Ticker.addListener(window);
    createjs.Ticker.useRAF = true;
    createjs.Ticker.setFPS(60);
    
}

function handleImageError(e) {
	console.log("Error Loading Image : " + e.target.src);
}

function handleImageLoad(e) {
    numberOfImagesLoaded++;
 
    /**
     * Place the number of images to be loaded
     */
    if (numberOfImagesLoaded == 10) {
        numberOfImagesLoaded = 0;
        startGame();
    }
}

function tick() {
    if (bmpAnimation.x >= screen_width - 250) {
        bmpAnimation.direction = -90;
        bmpAnimation.gotoAndPlay("walk_h");
    }

    if (bmpAnimation.x < 200) {
        bmpAnimation.direction = 90;
        bmpAnimation.gotoAndPlay("walk");
    }

    if (bmpAnimation.direction == 90) {
        bmpAnimation.x += bmpAnimation.vX;
    }
    else {
        bmpAnimation.x -= bmpAnimation.vX;
    }
    
    /**
     * Agregar la animacion para el salto
     */

    stage.update();
}

function still(){
    currentChild = stage.getChildByName(currentChildName);
    currentPosx = currentChild.x;
    bmpAnimationIdle.x = currentPosx;
    stage.removeChild(currentChild);
    bmpAnimationIdle.gotoAndPlay("idle");
    stage.addChild(bmpAnimationIdle);
    currentChildName = 'ken-still2';
}

function walk(){
    currentChild = stage.getChildByName(currentChildName);
    currentPosx = currentChild.x;
    bmpAnimation.x = currentPosx;
    stage.removeChild(currentChild);
    stage.addChild(bmpAnimation);
    if (bmpAnimation.x >= screen_width - 250) {
        bmpAnimation.direction = -90;
        bmpAnimation.gotoAndPlay("walk_h");
    }

    if (bmpAnimation.x < 200) {
        bmpAnimation.direction = 90;
        bmpAnimation.gotoAndPlay("walk");
    }

    if (bmpAnimation.direction == 90) {
        bmpAnimation.x += bmpAnimation.vX;
    }
    else {
        bmpAnimation.x -= bmpAnimation.vX;
    }
    currentChildName = 'ken-still';
    stage.update();
}

function hit(){
    currentChild = stage.getChildByName(currentChildName);
    currentPosx = currentChild.x;
    bmpAnimationHit.x = currentPosx;
    stage.removeChild(currentChild);
    bmpAnimationHit.gotoAndPlay("idle");
    stage.addChild(bmpAnimationHit);
    currentChildName = 'ken-hit';
}

function haduken(){
    currentChild = stage.getChildByName(currentChildName);
    currentPosx = currentChild.x;
    bmpAnimationHaduken.x = currentPosx;
    stage.removeChild(currentChild);
    bmpAnimationHaduken.gotoAndPlay("idle");
    stage.addChild(bmpAnimationHaduken);
    currentChildName = 'ken-haduken';
}

function bend(){
    currentChild = stage.getChildByName(currentChildName);
    currentPosx = currentChild.x;
    bmpAnimationBend.x = currentPosx;
    stage.removeChild(currentChild);
    bmpAnimationBend.gotoAndPlay("idle");
    stage.addChild(bmpAnimationBend);
    currentChildName = 'ken-bend';
}

function jump(){
    currentChild = stage.getChildByName(currentChildName);
    currentPosx = currentChild.x;
    bmpAnimationJump.x = currentPosx;
    bmpAnimationJump.y = 230;
    bmpAnimationJump.y = 250;
    stage.removeChild(currentChild);
    bmpAnimationJump.gotoAndPlay("jump");
    stage.addChild(bmpAnimationJump);
    currentChildName = 'ken-jump';
}



function kick(){
    currentChild = stage.getChildByName(currentChildName);
    currentPosx = currentChild.x;
    bmpAnimationKick.x = currentPosx;
    stage.removeChild(currentChild);
    bmpAnimationKick.gotoAndPlay("idle");
    stage.addChild(bmpAnimationKick);
    currentChildName = 'ken-kick';
}

function kick_spin(){
    currentChild = stage.getChildByName(currentChildName);
    currentPosx = currentChild.x;
    bmpAnimationKick2.x = currentPosx;
    stage.removeChild(currentChild);
    bmpAnimationKick2.gotoAndPlay("idle");
    stage.addChild(bmpAnimationKick2);
    currentChildName = 'ken-kick2';
}