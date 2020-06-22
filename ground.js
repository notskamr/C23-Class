 class groundClass {
constructor(xPos, yPos, width, height) {
var ground_options ={
 isStatic: true
}
      this.body = Bodies.rectangle(xPos,yPos,width,height,ground_options);
      this.width = width;
      this.height = height;

      World.add(world, this.body)
}
display(){
var pos =this.body.position
rectMode(CENTER);
fill(40);
rect(pos.x, pos.y, this.width, this.height)

}}