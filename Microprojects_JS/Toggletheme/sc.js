let btn = document.querySelector("button") ;
let body = document.querySelector("body")

if(localStorage.getItem("theme")){
    body.classList.remove("bg-black") ;
    body.classList.add(localStorage.getItem("theme")) ;
}

btn.addEventListener("click",function(){
    if(body.classList.contains("bg-black")){
        body.classList.remove("bg-black") ;
        body.classList.add("bg-white") ;

        localStorage.setItem("theme","bg-white") ;
    }

    else{
        body.classList.remove("bg-white") ;
        body.classList.add("bg-black") ;

        localStorage.setItem("theme","bg-black") ;
    }
})
