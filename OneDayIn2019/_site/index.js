let gameStart = false
let onlyOnceFlag = false
let otherOnlyOnce = false
let newFlag = false
let decText = false
let twentyNinteenText = false
let rbmPlaying = false
let start = false
let gameState = false
let clockScore = 5

let gameScore = 0

let startTime = false;
let am = true
let isTwentyTwenty = false;
let cnv
let finalScore = 0

let onlyOnceOne = false
let onlyOnceTwo = false
let onlyOnceThree = false
let onlyOnceFour = false
let onlyOnceFive = false
let onlyOnceSix = false
let onlyOnceSeven = false

let damageState = false

let onlyOnceFox = false
let onlyOnceWolfy = false

let onlyOnce2020 = false
let onlyOnce20202 = false
let onlyOnce20203 = false
let onlyOnce20204 = false

let onlyOnceEndScreen = false
let onlyOnceEndScreen2 = false
let onlyOnceEndScreen3 = false

let enemies = []
let enemiesToDelte = []
let hero

let isMobile = false



//anti-IOS scroll code
function preventBehavior(e) {
    e.preventDefault();
};
document.addEventListener("touchmove", preventBehavior, {passive: false});
//end

function preload(){
  song = loadSound('assets/rbm.mp3');
  happyImg = loadImage('assets/img/happy.png');
  skypeImg = loadImage('assets/img/skype.png');
}

function setup() {

  if ((window.innerWidth < 780)){
    isMobile = true
   }


  songMK = loadSound('assets/fox.mp3');
  cantlet = loadSound('assets/oy.mp3');
  sadImg = loadImage('assets/img/concern.png');
  moonImg = loadImage('assets/img/Moon.png')

  cnv = createCanvas(window.innerWidth, window.innerHeight);

  setInterval(() => {
    if (startTime == true){
      clockScore += 1
    }
  }, 5210)

  setInterval(() => {
    if (startTime == true){
      gameScore += 1
    }
  }, 200)

   hero = new Hero({x: (window.innerWidth/2), y:window.innerHeight-200}, 30, happyImg);


}

function setIntervalX(callback, delay, repetitions) {
    let x = 0;
    let intervalID = window.setInterval(function () {

       callback();

       if (++x === repetitions) {
           window.clearInterval(intervalID);
       }
    }, delay);

    return true
}

function draw() {


  background(0);
  fill(255);
  textAlign(CENTER, CENTER);
  textFont("Futura");

  textSize(window.innerWidth * .1);
  text('Tap to begin', window.innerWidth/2, window.innerHeight/2);

  cnv.mousePressed(canvasPressed);

  if (rbmPlaying) {
    background(0);
    gameStart = true;
  }


  if (gameStart == true) {

    if (decText == false) {
      setTimeout(() => {
        decText = true;
      }, 100)
    }

    if (decText == true) {
      background(0);
      textSize(window.innerWidth * .065);
      text("There's a bogey", window.innerWidth/2, window.innerHeight/2);

    }

    if (twentyNinteenText == false) {
      setTimeout(() => {
        twentyNinteenText = true;
      }, 2000)
    }

    if (twentyNinteenText == true) {
      background(0);
      textSize(window.innerWidth * .17);
      text("on my tail.", window.innerWidth/2, window.innerHeight/2);
    }

    if (start == false) {
      setTimeout(() => {
        start = true;
      }, 4000)
    }

    if (start == true) {
      background(0);
      textSize(window.innerWidth * .1);
      text("- Melee, 2020", window.innerWidth/2, window.innerHeight/2);
    }

    if (gameState == false) {
      setTimeout(() => {
        gameState = true;
      }, 6000)
    }

    if (gameState == true) {
      gameStateF();
   }

  }
}

function gameStateF() {



    let bgColor = [0,0,0];
    let delay = 2444;

    startTime = true;

    background(...bgColor);

    

    textSize(40);

    text("HP "+hero.health, (window.innerWidth/2), 190);

    damageState = true

    textSize(55);

    if ((clockScore == 6 || clockScore == 7) && am == true) {

      textSize(window.innerWidth * .02);

      if (isMobile) {
        textSize(window.innerWidth * .07);
      }
      
      if (onlyOnceFox == false) {
        songMK.play();
        onlyOnceFox = true;
      }
      
      text("Avoid C&D", window.innerWidth/2, window.innerHeight/2);
      textSize(55);
    }

    if (clockScore == 7 && onlyOnceOne == false) {

      onlyOnceOne = true

      setIntervalX( () => {
        for (let x = 0; x < 30; x++){
          enemies.push(new Bubble({x: window.innerWidth - 50, y: window.innerHeight - 50 }, 30, skypeImg, (1/3.14)+x, 6));
        }
      }, 500, 5)

      setIntervalX( () => {
        for (let x = 0; x < 30; x++){
          enemies.push(new Bubble({x: window.innerWidth - 50, y: window.innerHeight - 50 }, 30, skypeImg, (1/3.14)+x, 3));
        }
      }, 500, 3)

      setIntervalX( () => {
        for (let x = 0; x < 30; x++){
          enemies.push(new Bubble({x: window.innerWidth /2, y: window.innerHeight/2 }, 30, skypeImg, (1/3.14)+x, 2));
        }
      }, 2500, 2)

      setIntervalX( () => {
        for (let x = 0; x < 30; x++){
          enemies.push(new Bubble({x: window.innerWidth /4, y: window.innerHeight/8 }, 30, skypeImg, (1/3.14)+x, 2));
        }
      }, 4500, 4)

      setIntervalX( () => {
        for (let x = 0; x < 30; x++){
          enemies.push(new Bubble({x: window.innerWidth /2, y: window.innerHeight/6 }, 30, skypeImg, (1/3.14)+x, 2));
        }
      }, 4500, 4)

      setIntervalX( () => {
        for (let x = 0; x < 30; x++){
          enemies.push(new Bubble({x: window.innerWidth /5, y: window.innerHeight/3 }, 30, skypeImg, (1/3.14)+x, 2));
        }
      }, 7500, 3)




    }

    if (gameScore > 150 && gameScore < 190) {

      if (onlyOnceWolfy == false) {
        cantlet.play();
        onlyOnceWolfy = true;
      }

      textSize(30);
      text("Nintendo's sent incoming.", window.innerWidth/2, window.innerHeight/2);
      textSize(50);

    }


    if (clockScore == 11 && onlyOnceTwo == false) {

      onlyOnceTwo = true

      setIntervalX(() => {
          for (let x = 0; x < 500; x+=40){
            enemies.push(new Bubble({x: window.innerWidth/2, y: window.innerHeight/2}, 10, skypeImg, -4.71 + (x), 5 + x/1000));}
            enemies.push(new Tracker({x: window.innerWidth/2, y: window.innerHeight/2}, 10, skypeImg, -4.71, 4));
       }, 1300, 10)


      setIntervalX( () => {
        for (let x = 0; x < 50; x++){
          enemies.push(new Bubble({x: window.innerWidth / 2, y: window.innerHeight}, 30, skypeImg, (1/3.14)+x, 13));
        }
      }, 200, 9);


      
   


    }

    if (clockScore == 12) {
      am = false;
      if (!otherOnlyOnce){
        otherOnlyOnce = true;
      }
 
      if (onlyOnceThree == false) {
        moonImg.resize(window.innerWidth, 0)
        if(isMobile){
          enemies.push(new Moon({x: window.innerWidth/2, y: -500 }, window.innerWidth/2, moonImg, 1.5708, .7));
        } else {
          enemies.push(new Moon({x: window.innerWidth/2, y: -800 }, window.innerWidth/2, moonImg, 1.5708, .7));
        }
  
         onlyOnceThree = true
      } 
 
    }

    if ((clockScore == 11 && am == true) || (clockScore == 12 && am == false) || (clockScore == 1 && am == false)) {
      textSize(window.innerWidth * .03);

      if (isMobile) {
        textSize(window.innerWidth * .055);
      }


    }

    if (((clockScore == 12 && am == false) || clockScore == 1) && onlyOnceThree == false) {

      onlyOnceThree = true

      setIntervalX( () => {
        for (let x = 0; x < 30; x++){
          enemies.push(new Bubble({x: window.innerWidth - 50 - (Math.random() * 150), y: window.innerHeight - 50 }, 30, skypeImg, (1/3.14)+x, 8));
        }
      }, 500, 14);

    }

   

  
  

   

  







    if (hero.health < 0) {
      textSize(window.innerWidth * .06);
      text("Please don't\ncrater\nMelee tourneys.", window.innerWidth/2, window.innerHeight/2);

      setTimeout(() => {
        onlyOnceEndScreen = true
      }, 3250)


      if (onlyOnceEndScreen) {
        background(0);


        setTimeout(() => {
          onlyOnceEndScreen2 = true
        }, 2250)
        if (onlyOnceEndScreen2) {

          background(0);



          if (isMobile){

            moonImg.resize(window.innerWidth * .5, 0)
            image(moonImg, window.innerWidth/2, 100)

            textSize(window.innerWidth * .06);
            text("Melee's online tourneys.\nWe ask because we love.\n#FreeMelee", window.innerWidth/2, window.innerHeight/2);
          } else {
            textSize(window.innerWidth * .025);
            text("Melee's online tourneys.\nWe ask because we love.\n#FreeMelee", window.innerWidth/2, window.innerHeight/2);
          }


        }






      }


 
      return
    }



    if (am) {
      text("Survive", (window.innerWidth/2), 50);
    }

    if (!am  && clockScore < 9 || clockScore == 12) {
      text("Survive", (window.innerWidth/2), 50);
    }

    if (!am && clockScore > 8 && clockScore != 12) {
      text("Survive", (window.innerWidth/2) + Math.floor(Math.random()*2), 50);
    }

    textSize(45);
    text(''+gameScore, (window.innerWidth/2), 123);





    updateGameState();

}

function canvasPressed() {
  if (rbmPlaying == false) {
    song.play();
    rbmPlaying = true;
  }
}

function mountainKing() {
 
}

function finalText(){
  textSize(50);
}

function updateGameState() {

  enemies.forEach( (enemy, index, arr) => {

    if (enemy.is_tracker()) {
      enemy.track(hero)
    }

    enemy.move()

    if (enemy.outOfBounds() == true && enemy.isMoon() == false) {
      arr.splice(index,1);
    } else {
      enemy.render();
    }

    if (damageState == true && onlyOnceEndScreen3 == false) {
      console.log('launched')
      onlyOnceEndScreen3 = true
      finalScore = hero.health;
    }

    if (hero.intersectingWithCircle(enemy) && enemy.outOfBounds() == false && enemy.isMoon() == false) {
      arr.splice(index,1);

      if (damageState == false) {
        hero.addHealth(1);
      } else {

        if (!isMobile) {
          hero.doDamage(5);
        } else {
          hero.doDamage(2);
        }

      }

    }

    if (hero.intersectingWithCircle(enemy) && enemy.isMoon()) {
      hero.doDamage(1000000);
    }


  })

  hero.enableControl();
  hero.render();
}




class Bubble {

  constructor(cords = {x: window.innerWidth, y: window.innerWidth}, r, imgSkin = null, theta = 0, speed = 1){
    this.x = cords.x;
    this.y = cords.y;
    this.r = r;

    this.angle = theta;
    this.speed = speed;

    this.imageSkin = imgSkin;
  }

  getCords() {
    return {
      x: this.x,
      y: this.y
    }
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

  getRadius() {
    return this.r;
  }

  isMoon() {
    return false
  }


  outOfBounds() {

    if (this.x < -30){
      return true
    }

    if (this.x > window.innerWidth + 30) {
      return true
    }

    if (this.y < -30) {
      return true
    }

    if (this.y > window.innerHeight + 30){
      return true
    }

    return false

  }

  update(cords) {
    this.x = cords.x;
    this.y = cords.y;
  }

  move() {

    this.x = this.getX() + (Math.cos(this.angle) * this.speed)
    this.y = this.getY() + (Math.sin(this.angle) * this.speed)
  }

  changeSkin(img) {
    this.imageSkin = img

  }

  render() {

    ellipse(this.x, this.y, this.r*2, this.r*2)

    if (this.imageSkin) {
      imageMode(CENTER)
      image(this.imageSkin, this.getX(), this.getY());
    }

  }

  intersectingWithCircle(Circle) {
    if (dist(this.x, this.y, Circle.getX(), Circle.getY()) > (this.r + Circle.getRadius()) ) {
      return false
    }
    return true
  }

  is_tracker() {
    return false
  }



}

class Moon extends Bubble {

  isMoon() {
    return true;
  }

}


class Tracker extends Bubble {
constructor(cords = {x: window.innerWidth, y: window.innerWidth}, r, imgSkin = null, theta = 0, speed = 1){
  super(cords, r, imgSkin, theta, speed )
  this.x = cords.x;
  this.y = cords.y;
  this.r = r;

  this.angle = theta;
  this.speed = speed;

  this.imageSkin = imgSkin;
}



track(hero) {
  let cords = hero.getCords()
  let hero_x = cords.x
  let hero_y = cords.y
  this.angle = Math.atan2(hero_y - this.y, hero_x - this.x);
}

is_tracker() {
  return true
}

}


class Hero extends Bubble {

  constructor(cords = {x: window.innerWidth, y: window.innerWidth}, r, imgSkin = null, theta = 0, speed = 1) {
    super(cords, r, imgSkin)
    this.health = 10000
    this.history = []
    this.count = 0

    this.neX = 0
    this.neY = 0


  }

  update(cords) {
    if (cords.x < 0){
      cords.x = 0
    }

    if (cords.x > window.innerWidth) {
      cords.x = window.innerWidth
    }

    if (cords.y < 0) {
      cords.y = 0
    }

    if (cords.y > window.innerHeight){
      cords.y = window.innerHeight
    }

    this.x = cords.x
    this.y = cords.y

    this.count += 1

    if (this.count % 4 == 0){
      this.history.push({x: this.x, y: this.y, opacity:1})
    }

    if(this.history.length > 7){
      this.history.shift()
    }
  }

  addHealth(health) {
    this.health += health;
  }

  doDamage(dmg) {
    this.health -= dmg;
  }

  enableControl() {

    if (keyIsDown(LEFT_ARROW)) {
      this.update({x:this.getCords().x - 6.9, y:this.getCords().y})
    }

    if (keyIsDown(RIGHT_ARROW)) {
      this.update({x:this.getCords().x + 6.9, y:this.getCords().y})
    }

    if (keyIsDown(UP_ARROW)) {
      this.update({x:this.getCords().x, y:this.getCords().y - 6.9})
    }

    if (keyIsDown(DOWN_ARROW)) {
      this.update({x:this.getCords().x, y:this.getCords().y + 6.9})
    }

    if (isMobile) {
      this.speed = 14;
      this.angle = Math.atan2(mouseY - this.getY(), mouseX - this.getX());


      //prevents stuttering hero
      //only update location if mouse has moved more than 7 units
      if ( ((this.getX() >= (mouseX-7))
      && (this.getX() <= (mouseX+7) ))
      && (this.getY() >= (mouseY-7))
      && (this.getY() <= (mouseY+7) )) {
      } else {
        this.neX = this.getX() + (Math.cos(this.angle) * this.speed)
        this.neY = this.getY() + (Math.sin(this.angle) * this.speed)
        this.update({x: this.neX, y: this.neY})
      }


    }

  }

  render() {
    //background ellipse
    ellipse(this.x, this.y, this.r*2, this.r*2)

    if (this.imageSkin) {
      imageMode(CENTER)


      //the trail
      this.history.forEach( (point, index) => {
        if (this.history[index].opacity > 0){
          this.history[index].opacity -= .05;
        }
        drawingContext.globalAlpha = (this.history[index].opacity > 0) ? this.history[index].opacity : 0;
        image(this.imageSkin, point.x, point.y);
        drawingContext.globalAlpha = 1
      })

      //avatar pic
      image(this.imageSkin, this.getX(), this.getY());

    }

  }

}
