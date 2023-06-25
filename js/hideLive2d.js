
function hideLive2d(){
    let canvas = $("canvas")
    console.log(canvas)
    console.log(canvas.css("display"))
    console.log(canvas.css("opacity"))

    if(canvas.css("display")=="none"){
        canvas.css({"display":"block"})

    }
    else{
        canvas.css({"display":"none"})
    }
}