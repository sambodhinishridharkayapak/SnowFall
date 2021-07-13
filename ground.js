class ground
{
    constructor(x,y)
    {
        var add=
        {
            'restitution' : 0.8,
            'density' : 0.1,
            isStatic : true
            
        }
        this.body = Bodies.rectangle(x,y,this.width, this.height, add);
        World.add(world, this.body);
    }
    display()
    {
        var pos = this.body.position;

        push();
        rectMode(CENTER);
        fill("black");
        stroke("black");
        strokeWeight(2);
        rect(pos.x, pos.y,this.width, this.height);
        pop();
    }
}