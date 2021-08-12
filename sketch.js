var dog, dogImg, dogImg2;
var food = 0;
var lastFeed = 0;

function preload(){
	 dogImg = loadImage("dog.png");
   dogImg2 = loadImage("dogImg1.png");
}

function setup() {
  database = firebase.database();
  console.log(database);

	createCanvas(500,500);
  dog = createSprite(250,250,20,20);
  dog.addImage(dogImg);
  dog.scale = 0.1;

  var foodStock = database.ref("food");
  foodStock.on("value",function(data){
    food = data.val();
  });

  var feedTime = database.ref("feedTime/lastFeed");
  feedTime.on("value",function(data){
    lastFeed = data.val();
  });

  feedDog = new Feed();
  dogFood = new Food();
}

function draw() {  
  background(46,139,87);
  fill('skyblue');

  if (lastFeed>=12){
    text("Last Feed: "+lastFeed%12+"PM",350,30);
  }
  else if (lastFeed == 0){
    text("Last Feed: 12AM",350,30);
  }
  else{
    text("Last Feed: "+lastFeed+"AM",350,30);
  }

  feedDog.display();
  dogFood.display();
 
  drawSprites();
}

