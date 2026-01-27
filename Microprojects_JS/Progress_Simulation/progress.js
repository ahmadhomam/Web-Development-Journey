let bar = document.querySelector("#progress-bar") ;
let btn = document.querySelector("button") ;
let text = document.querySelector("#progress-text") ;
let head = document.querySelector("span") ;

let count = 0 ;

btn.addEventListener("click",function(dets){
    let interval = setInterval(function(){
        count++ ;
        if(count <= 100){
            text.textContent = `${count}%`
            bar.style.width = `${count}%`
        }
        else{
            clearInterval(interval) ;
            head.textContent = "Downlaod Completed"
        }
    },(4000)/100)
})