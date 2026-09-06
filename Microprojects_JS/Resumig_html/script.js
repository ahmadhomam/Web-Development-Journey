let box = document.querySelector("#box")

let select = document.querySelector("#colorSelect")

select.addEventListener("change",(dets) => {
    console.log(dets)
    let color = dets.target.value.toLowerCase()   ;
    if(color == "red"){
        box.style.backgroundColor = "red"   
    }
    else if(color == "blue"){
        box.style.backgroundColor = "blue"
    }
    else if(color == "green"){
        box.style.backgroundColor = "green"
    }
    else{
        box.style.backgroundColor = "white"
    }
})