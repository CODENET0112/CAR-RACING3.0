class Game{
    constructor(){}

getState(){
    var gameStateRef= database.ref('gameState');
    gameStateRef.on("value", function(data){
        gameState= data.val();
    }) 

}
update(state){
    database.ref('/').update({
      gameState:state  
    })
}
start()
{
if (gameState===0)
{
    player=new Player();
    player.getCount();
    form=new Form();
    form.display();
}
car1=createSprite(100,200)
car1.addImage(car1IMG)
car2=createSprite(300,200)
car2.addImage(car2IMG)
car3=createSprite(500,200)
car3.addImage(car3IMG)
car4=createSprite(700,200)
car4.addImage(car4IMG)
cars=[car1,car2,car3,car4]
}

play()
{
    form.hide();

   Player.getPlayersInfo();
    if(allPlayers !== undefined)
    {
        background(groundIMG)
        image(trackIMG,0,-displayHeight*4,displayWidth,displayHeight*5)
    
        var index=0;
        var x=175;
        var y=0;
        var name_pos=130
        for(var plr in allPlayers){
            index=index+1;
            x+=220;
            y=displayHeight-allPlayers[plr].distance;
            cars[index-1].x=x;
            cars[index-1].y=y;
            if(index===player.index)
            {
                cars[index-1].shapeColor="blue";
                camera.position.x=displayWidth/2;
                camera.position.y=cars[index-1].y;
                fill("orange");
                textSize(14)
                text(player.name,cars[index-1].x,cars[index-1].y-60)
            }
        }
    }
    if(keyIsDown(UP_ARROW)&&player.index !==null)
    {
        player.distance+=50;
        player.update();
    }
    if(player.distance>3860)
    {
        gameState=2
    }
    drawSprites();
}

end(){
    console.log("Game Ended")
       
}
}
