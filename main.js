lip_x = 0;
lip_y = 0;

function preload(){
lip = loadImage("https://i.postimg.cc/zXpHBPZn/image-removebg-preview.png");
}

function setup(){
canvas = createCanvas(300,300);
canvas.center();

video = createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);
}

function modelLoaded(){
    console.log("poseNet is initialized");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        lip_x = results[0].pose.nose.x-10;
        lip_y = results[0].pose.nose.y+10;
        console.log("lipX = "+lip_x);
        console.log("lipY = "+lip_y);
    }
}
function draw(){
image(video,0,0,300,300);

image(lip,lip_x,lip_y,30,30);

}

function take_snapshot(){
    save("myPic.jpeg");
}