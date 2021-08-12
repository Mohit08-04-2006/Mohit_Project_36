class Feed{
    constructor(){

    }

    display(){
        var feed = createButton("Feed The Dog");
        feed.position(400,50);
       feed.mousePressed(function(){ console.log("hello");
       dog.addImage(dogImg2);
       food-=1;
       lastFeed++;
       database.ref('/').update({
        "food":food
      
       })});

       var addfood = createButton("Add Food");
        addfood.position(400,100);
        addfood.mousePressed(addFood);
    }

 feedDog(){
   console.log("hello");
        dog.addImage(dogImg2);
      food-=1;
       // foodObj = updateFopdStock(foodObj.getFoodStock()-1);
        database.ref('/').update({
         "food":food
        // feedTime: hour()
        });
      }
}

function addFood(){
  database.ref('/').update({
    "food": food
  });
  food++;

  
}
