class Paper {
    constructor() {
      var options = {
          restitution:0.5
      }
      this.body = Bodies.circle(200,100,20,options);
      
      this.r =20;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill("red");
      ellipse(pos.x, pos.y, this.r, this.r);
    }
  }