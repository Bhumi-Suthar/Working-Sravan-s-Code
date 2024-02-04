class Bow{
    constructor(x,y,w,h){
        
        var options = {
            isStatic:true
        }

        this.w = w;
        this.h = h;
       
        this.bow= loadImage("assets/bow.png")
        this.body = Bodies.rectangle(x,y,w,h, options);
        World.add(world, this.body)

        Matter.Body.setAngle(this.body, 0)
      
    }
    show(){
        var pos = this.body.position;
        var angle = this.body.angle;
        
        if(keyIsDown(LEFT_ARROW) &&  angle > -70){
            angle -= 1;
            Matter.Body.setAngle(this.body, angle)
            console.log(angle)
        }

        if(keyIsDown(RIGHT_ARROW) && angle < 70){
            angle += 1;
            Matter.Body.setAngle(this.body, angle)
            console.log(angle)
       }
      
        push ()
        translate (pos.x, pos.y)
        rotate(angle)
        imageMode(CENTER)
        image (this.bow, 0,0,this.w,this.h)
        pop ()
       
       
    }
   

    

}


