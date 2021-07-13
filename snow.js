class snow{
    constructor(x,y,r)
    {
        var add={
            'restituion':0.8,
            'density':0.1,
            'friction':0.2,
            isStatic:false
        }
      
        this.image=loadImage("snow.png")
        this.body=Bodies.circle(x,y,r,add);
        this.r=r;
        World.add(world,this.body);
    }
    display()
    { 
        var pos=this.body.position;
        push()
       // translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.r,this.r);
        pop();
    }
}