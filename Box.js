class Box{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        //var r = Math.floor(Math.random() * 256);
        //var g = Math.floor(Math.random() * 256);
        //var b = Math.floor(Math.random() * 256);
        //fill(rgb(r,g,b));
        rect(0, 0, this.width, this.height);
        pop();
      }
}