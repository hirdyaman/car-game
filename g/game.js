class Game{
constructor(){


}
getstate(){



    database.ref('gamestate').on("value",function(data){
        gamestate=data.val()
    })
}
updatestate(state){
    database.ref("/").update({
    gamestate:state
    })
}
}
