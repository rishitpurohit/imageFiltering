posee=0;
poseee=0;


function preload(){
    mustache = loadImage('https://i.postimg.cc/1X4nCRwc/mustache-removebg-preview.png')
    }
    function setup(){
        canvas=createCanvas(300,200);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,200);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
    }
    function draw(){
     image(video,0,0,300,300);
     image(mustache, posee-30, poseee+25, 60, 70);
    }

function gotPoses(results){
    if(results.length>0){
        console.log(results);

        console.log("The x position of the nose is"+ results[0].pose.nose.x)
        console.log("The y position of the nose is"+results[0].pose.nose.y)

        posee= results[0].pose.nose.x;
        poseee=results[0].pose.nose.y;
    }
}
function modelLoaded(){
    console.log('poseNet is initialized');
}


function take_snapshot(){
    save("yourImage.png")
}