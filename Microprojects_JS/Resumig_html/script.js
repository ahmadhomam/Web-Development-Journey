let input_box = document.querySelector("#search") ;
const products = document.querySelectorAll(".product")

input_box.value = "nana"

function filter(text){
    products.forEach(product  => {
        if(product.dataset.name.toLowerCase().includes(text)){
            product.style.display = "list-item"
        }
        else{
            product.style.display = "none"
        }
    })
}

let text = input_box.value.toLowerCase() ;
filter(text)

input_box.addEventListener("input",(dets) =>{
    let text = dets.target.value.toLowerCase() ;
    filter(text) ;
})