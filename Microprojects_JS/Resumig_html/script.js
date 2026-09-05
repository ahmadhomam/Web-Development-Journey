let buttons = document.querySelectorAll(".cart_button") ;
let removes = document.querySelectorAll(".remove")



buttons.forEach(button => {
    button.addEventListener("click",()=>{
           let quantity = button.parentElement.querySelector(".quantity") ;
           let total  = button.parentElement.querySelector(".total")
           let price = button.parentElement.querySelector(".item").getAttribute("data-price")
           let grandtotal = document.querySelector(".grandtotal")


           quantity.textContent ++ ;
           total.textContent = Number(total.textContent) +  Number(price)
           grandtotal.textContent= Number(grandtotal.textContent) + Number(price)
           
    })

})


removes.forEach(remove => {
    remove.addEventListener("click",()=>{
        
        let quantity = remove.parentElement.querySelector(".quantity")
        let total = remove.parentElement.querySelector(".total")
        let price  = remove.parentElement.querySelector(".item").getAttribute("data-price")
        let grandtotal = document.querySelector(".grandtotal")


        if(quantity.textContent <=0){
            alert("No item in the cart")
        }
        else{
            quantity.textContent-- ;
            total.textContent = Number(total.textContent) - Number(price)
            grandtotal.textContent= Number(grandtotal.textContent) - Number(price)
        }



    })
})


