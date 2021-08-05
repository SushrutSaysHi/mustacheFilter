var video = " ";

function preload(){

}

function setup(){
     var canvas = createCanvas(300, 300);
     canvas.center();
     video = createCapture(VIDEO);
     video.size(300, 300);
     video.hide();

     var posenet = ml5.poseNet(video, modelLoaded);
     posenet.on("pose", getPoses);
}

function draw() {
     image(video, 0, 0, 300, 300);
}

function snap() {
     save("Selfie.png");
}

function modelLoaded() {
     console.log("Model is loaded");
}

function getPoses(result) {
     if(result.length > 0){
          console.log(result);
          console.log("X value is " + result[0].pose.nose.x);
          console.log("y value is " + result[0].pose.nose.y);
     }
}
