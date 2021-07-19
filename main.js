noseX = 0;
noseY = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;
function preload(){

}

function setup(){
video = createCapture(VIDEO);
video.size(550,500);

canvas = createCanvas(550, 500);
canvas.position(560,150);

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('PoseNet is Intialized');
}
 
function draw(){
background('#969A97');
fill(250, 2, 3);
square(noseX, noseY, difference);
circle(leftWristX, leftWristX, 5);
}

function gotPoses(results){
if(results.length > 0){
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log(noseX);
    console.log(noseY);

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);
    console.log("Left Wrist: " + leftWristX + " Right Wrist: " + rightWristX + " Difference: "+ difference);
    document.getElementById("output").innerHTML = difference;
}}
