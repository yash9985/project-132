img = "";
status = "";

function preload(){
    img = loadImage("car.jpg");
}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "status : detecting object";
}

function draw(){
    image(img,0,0,640,420);
    fill("red");
    text("car",80,75);
    noFill();
    stroke("red");
    rect(75,60,550,350);

    
}

function modelLoaded(){
    console.log("model loaded");
    status = true;
    objectDetector.detect(img,gotResult);
}

function gotResult(error,results){
    if (error){
        console.log(error);

    }else{
        console.log(results);
    }
}