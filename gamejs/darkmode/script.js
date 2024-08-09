// console.log("hello");
// // alert("helo");
// window.console.log("hwllo");

// let btn = document.querySelector("tag");
// btn.onclick = (e) =>{
//     console.log(e);
// }

// btn.addEventListener('mouseover',function()
// {
//     btn.innerText = "hovered";
// });

// btn.addEventListener('mouseleave',function()
// {
//     btn.innerText = "mansi";
// });


// dark mode

let modebtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currmode = "light";

modebtn.addEventListener("click", () =>{
    if(currmode == "light")
    {
        currmode = "dark";
        // document.querySelector("body").classList.add("dark");
        body.classList.add("dark");
        body.classList.remove("light");
    }else{
        currmode = "light";
        document.querySelector("body").classList.add("light");
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currmode);
});