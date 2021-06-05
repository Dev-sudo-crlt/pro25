class Paper
{
	constructor(x,y,d,options)
	{
		var options={
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
        }
       this.x = 30;
       this.y = 30;
       this.r = 20;
       this.image = loadImage("assets/paper.png");
			
    }
    display(){
       circle(this.x,this.y,this.r,options); 
    }

}