let button = document.querySelector(".btn");
button.addEventListener("click",()=>
{
    let firstName = document.querySelector("#firstName").value;
    let lastName = document.querySelector("#lastName").value;

    console.log(`Vezetéknév:${firstName}`)
    console.log(`Keresztnév:${lastName}`)

}    
)