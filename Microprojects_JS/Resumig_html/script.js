let search = document.querySelector("#search")
let students = document.querySelectorAll(".student")


search.addEventListener("focus",() => {
    students.forEach(student => {
        student.classList.add("highlight")
    })
})

search.addEventListener("input",() => {
    students.forEach(s => {
        s.classList.remove("highlight")
    })
    let text = search.value.toLowerCase()
    students.forEach(student => {
        const name = student.textContent.toLowerCase() ;
        if(name.includes(text)){
            student.classList.add("highlight")
        }
    })
})

search.addEventListener("blur",() => {
    students.forEach(s => {
        s.classList.remove("highlight")
    })
})