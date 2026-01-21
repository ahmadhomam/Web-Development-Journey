// // OOPS 

// //This is a constructor function 
// function Cake(level,taste,kilograms,hours,colour){
//   this.floor = level  ;
//   this.flavour = taste ;
//   this.weight = kilograms ;
//   this.time = hours ;
//   this.color = colour
//   this.timeTaken = function(){
//     let h1 = document.createElement("h1") ;
//     h1.textContent = `It is a ${taste} cake, 
//     This cake will take ${hours} to complete` ;
//     h1.style.color = colour ;
//     document.querySelector('body').append(h1) ;
//   }
// }

// Cake.prototype.info = function(){
//   let h2 = document.createElement("h2") ;
//   h2.textContent = "This is a sweet dish with mouth melting experience." ;
//   document.querySelector("body").append(h2) ;
// }

// let redcake = new Cake(1,"Strawberry","2kg","30 min","red") ;
// let yellowcake = new Cake(1,"butterscothch","1.2kg","45 min","yellow") ;


// let p1 = new Promise(function(res,rej){
//   setTimeout(()=>{
//     let rn = Math.floor(Math.random() * 10) ;
//     if(rn > 5) res("resolve with : "+rn) ;
//     else rej("rejected with : "+ rn) ;
//   },3000) ;
// })

// p1.then(function(val){
//   console.log(val) ;
// })
// .catch(function(val){
//   console.log(val) ;
// })


// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  let button = document.querySelector("button") ;
  let h2 = document.querySelector("h2") ;
  let newnumber = 0 ;
  let reset = document.querySelector("#reset") ;

  // Check if elements exist
  if (!button) {
    console.error('Count button not found');
    return;
  }
  if (!h2) {
    console.error('H2 element not found');
    return;
  }
  if (!reset) {
    console.error('Reset button not found');
    return;
  }

  button.addEventListener("click",function(dets){
    newnumber++ ;
    h2.textContent = `${newnumber}`;
    console.log('Count updated to:', newnumber);
  })

  reset.addEventListener("click",function(){
    newnumber = 0 ;
    h2.textContent = "00" ;
    console.log('Reset clicked, count is now:', newnumber);
  })
});
