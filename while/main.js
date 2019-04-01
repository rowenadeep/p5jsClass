function setup() {
	     createCanvas(1000, 900);
}
function draw() {
	     background(205);
	     let Ypos = 20;
	     while(Ypos < height){
	     fill(0, 0, 255);
	     ellipse(width / 2, Ypos, 30, 30);
	     Ypos += 40;	
	     }
	     let Xpos = 20
	     while(Xpos < width){
	     fill(255, 0, 0);
	     ellipse(Xpos, height / 2, 30, 30);
	     Xpos += 40;
	     }
	     


}