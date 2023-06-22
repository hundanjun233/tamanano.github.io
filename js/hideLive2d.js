function hideLive2d(){
    let canvas = $("canvas")
    if(canvas.css("display")=="block"){
        canvas.css({"display":"none"})
    }
    else{
        canvas.css({"display":"block"})

    }
}