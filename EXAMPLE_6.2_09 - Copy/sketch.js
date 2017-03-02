var angle = 0.9;

function setup() {
    createCanvas(800,800);
    background(224,205,215);
}

function draw() {
   
    var colorR=
    map(mouseX,255,800,76,171);
    var colorG=
    map(mouseX,20,800,255,128);
    var colorB=
    map(mouseX,255,800,96,180);
    rotate(angle);
    translate(mouseX, mouseY);
    fill(255,25,128);
    rect(-15,-15,30,30);
    
    angle+=0.2;
     background(colorR,colorG,colorB,5);
    rotate(angle);
     fill(255,20,147);
    translate(mouseX, mouseY);
    rect(-15,-15,40,40);
    
    angle+=0.1;
    
    rotate(angle);
    fill(255,97,182);
    translate(mouseX, mouseY);
    rect(-15,-15,50,50);
    angle+=0.1;
    
    rotate(angle);
    fill(255);
    translate(mouseX, mouseY);
    rect(15,15,60,60);
    angle+=0.1;
    
    rotate(angle);
    fill(255,174,217);
    translate(mouseX, mouseY);
    rect(-15,-15,70,70);
    angle+=0.1;
    
    strokeWeight(1);
    if(mouseIsPressed){//if mouse is pressed, then the center circle will turn into a sqaure.
    rect(mouseX,mouseY,10,10);
    } else{
        fill(map(mouseX,0,800,30,56));
        ellipse(mouseX,mouseY,10,10);
    }
    
}
