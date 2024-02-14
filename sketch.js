img="";
status="";
objects=[];

camera = document.getElementById("camera");

function setup() {
  canvas=createCanvas(480,380);
  canvas.center();
}
      
Webcam.attach( camera );      
  Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });


function gotResult(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
   
  }
}



  console.log('ml5 version:', ml5.version);

  function modelLoaded() {
    console.log('Model Loaded!');
    status=true;
    objectDetector.detect(img,gotResult);
  }

  function start() {
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
}
      
  function check()
  {
    
  
  }
