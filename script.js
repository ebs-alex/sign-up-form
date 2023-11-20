let submitBtn = document.querySelector("#submitBtn")
let pwd = document.querySelector("#pwd")
let pwd_confirm = document.querySelector("#pwd-confirm")


pwd_confirm.addEventListener("keyup", compareEntries)


function compareEntries() {

    if (pwd.value == pwd_confirm.value) {
        pwd_confirm.style.outline = "none"
        pwd_confirm.style.border = "2px solid greenyellow"
        console.log("matched")
        submitBtn.disabled = false
    } else  {
        console.log("NO match")
        pwd_confirm.style.border = "2px solid red"
        submitBtn.disabled = true
    }

}











// console.log(pwd)
