
function hideLive2d(){
    let canvas = $("canvas")
    console.log(canvas)
    console.log(canvas.css("display"))
    console.log(canvas.css("opacity"))

    if(canvas.css("display")=="block"){
        canvas.css({"display":"none"})
    }
    else{
        canvas.css({"display":"block"})
    }
}