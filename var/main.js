var radius = 20;
function setup () {
	       createCanvas(1000, 500);

}
function draw() {
         background(0, 0, 255);
	     var xpos = 10;
         var ypos = 15;

for(xpos; xpos < width; xpos += 30;){
	for(ypos; ypos < height; ypos += 30;){
 	        	
		fill(255);
        ellipse(xpos, ypos, radius, radius);
 	        }
 	        } 
 }
	      
