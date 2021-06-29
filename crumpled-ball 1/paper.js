class paper
{
	constructor(x,y,r)
	{
		var options={
            restitution:0.3,friction:0.5,density:1			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(x, y, r , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var paperPos=this.body.position;		

			push()
			translate(paperPos.x, paperPos.y);
			ellipseMode(RADIUS)
			//strokeWeight(4);
			fill(128,128,128)
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}