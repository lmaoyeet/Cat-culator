function customAudioPlatform() {
  this.n1 = new Audio("assets/Angry-cat-sounds.wav");
  this.n2 = new Audio("assets/Cat-meow-noise.wav");
  this.n3 = new Audio("assets/Cat-meows-sound.wav");
  this.p1 = function() {
    this.n1.currentTime=0;
    this.n1.play();
  }
  this.p2 = function() {
    this.n2.currentTime=0;
    this.n2.play();
  }
  this.p3 = function() {
    this.n3.currentTime=0;
    this.n3.play();
  }
  this.stooppp = function() {
    this.n1.pause();
    this.n2.pause();
    this.n3.pause();
    this.n1.currentTime=0;
    this.n2.currentTime=0;
    this.n3.currentTime=0;
  }
}
var state = 1;
var ap = new customAudioPlatform();
function randomizeSound() {
  this.buggernut = Math.floor(Math.random() * 10);
  if(this.buggernut==0) {
  } else if(this.buggernut==1 && state!=1) {
    ap.stooppp();
    ap.p1();
    state = 1;
  } else if(this.buggernut==2 && state!=1) {
    ap.stooppp();
    ap.p1();
    state = 1;
  } else if(this.buggernut==3 && state!=1) {
    ap.stooppp();
    ap.p1();
    state = 1;
  } else if(this.buggernut==4 && state!=2) {
    ap.stooppp();
    ap.p2();
    state = 2;
  } else if(this.buggernut==5 && state!=2) {
    ap.stooppp();
    ap.p2();
    state = 2;
  } else if(this.buggernut==6 && state!=2) {
    ap.stooppp();
    ap.p2();
    state = 2;
  } else if(this.buggernut<=7 && state!=3){
    ap.stooppp();
    ap.p3();
    state = 3;
  }
}
function clearboi() {
  ap.stooppp();
  this.nonono = new Audio("assets/Clear.wav");
  this.nonono.currentTime = 0;
  this.nonono.play();
  this.no = function() {this.nonono.pause(); this.nonono.currentTime = 0;}
}
