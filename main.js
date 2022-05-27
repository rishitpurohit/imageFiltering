function preload(){

}
function setup(){
    canvas=createCanvas(500,200)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(300,300);
    video.hide()
    poseNet=ml5.poseNet(video,modelLoaded)
poseNet.on('pose',gotPoses)
}
function draw(){
Image(video,0,0,300,300);
}


function gotPoses(result){
    if(result.length>0){
        console.log(result);

        console.log("The x position of the nose is"+ result[0].pose.nose.x)
        console.log("The y position of the nose is"+result[0].pose.nose.y)
    }
}
    function modelLoaded(){
        
    }


function take_snapshot(){
    save("yourImage.png")
}