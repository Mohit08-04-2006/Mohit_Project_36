class Food{
    constructor(){
     this.image = loadImage("Milk.png");

    }

    display(){
     var x = 80, y = 100;

     imageMode(CENTER);
     //image(this.image,320,220,70,70);

     if ( food!=0){
      for (var i=0;i<food; i++){
          if (i%10==0){
              x=80;
              y=y+50;
          }

          image(this.image,x,y,50,50);
          x=x+30;
      }
     }

    }
}