noseX=0;
noseY=0;

function preload() {
  mustache_lips = loadImage('https://www.freepnglogos.com/uploads/mustache-png/mustache-student-math-favorite-for-friday-the-the-1.png');
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}




function draw() {
  image(video, 0, 0, 300, 300);
  image(clown_nose, noseX, noseY, 30, 30);
}

