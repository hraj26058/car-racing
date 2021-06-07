var ball1;

function setup(){
    database= firebase.database();
    createCanvas(500,500);
    ball1 = createSprite(250,250,10,10);
    var ball1Position= database.ref('ball/position');
     ball1Position.on("value",readPosition,showError)
    ball1.shapeColor = "red";
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    // ball1.x = ball1.x + x;
    // ball1.y = ball1.y + y;
    database.ref('ball/position').set({
        'x':position.x+x,
        'y':position.y+y
    })
}
function readPosition(data){
    position=data.val();
    ball1.x=position.x;
    ball1.y=position.y;
}
function showError(){
    console.log("Error in writing to the database");
}