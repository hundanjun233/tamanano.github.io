function hideLive2d(){
    let canvas = document.getElementById("live2dCanvas")
    console.log(canvas)
    if(canvas.style.display==="block"){
        canvas.style.display = "none"
    }
    else{
        canvas.style.display="block"
    }
}