// console.log("hello world");

//date
// let p = document.getElementById("demo-p");

// console.log(p.innerText);
// console.log(p.innerHTML);


// currentDate = new Date();
// //p.innerText = currentdate.getFullYear();
// p.innerHTML = 
// `
// <a href="#">Today date</a>:${currentDate.getDate()+
//     '/'+
//     currentDate.getMonth()+
//     '/'+
//     currentDate.getFullYear()
// }

// `;

//datee ends

//////////////////////////////////////////////////////////////////////////////////

//dates in for loop
// let ptag=document.getElementById('demo-p')
// let ptags = document.getElementsByTagName("p");
// let pByClass = document.getElementsByClassName("demo");

// // console.log(ptags.innerText);

// // console.log(ptags.innerHTML);
// currentDate = new Date();

// dateString = 
// currentDate.getDate()+
// "/"+
// (currentDate.getMonth()+1)+3
// "/"+
// currentDate.getFullYear();

// nump= pByClass.length;
// for(let ptag of ptags)
// {
//     console.log(ptag);
//     ptag.innerHTML=`
//     <a href = "#">Today's Date</a>:${dateString}  
//     `;
// }
//////////////////////////////////////////////////////////////////////////

//hover
// let headingtag = document.getElementById('heading');
// headingtag.addEventListener('mouseover',function()
// {
//     headingtag.innerText = "hovered";
// });

// headingtag.addEventListener('mouseleave',function()
// {
//     headingtag.innerText = "Plz click me";
// });


// document.onscrollend=() => {
//     console.log("you scrolled");
// }


// document.onscrollstart=() => {
//     console.log("you scrolled");
// }


//AJAX is asynchroous js and Xml(HTML)
// JSON Javascript object Notation

const URL ="https://cat-fact.herokuapp.com/facts";
const factpara=document.querySelector("#fact");
const btn = document.querySelector("#btn");



const getfacts = async() =>{ 
console.log("getting data..");    
let response = await fetch(URL);
console.log(response);
let data = await response.json();

factpara.innerText = data[0].text
factpara.innerText = data[1].text
};

// function getfacts()
// {
//     fetch(URL).then((response) => {
//        return response.json();
//     }).then((data)=>
//     {
//         console.log(data);
//     })
// }
btn.addEventListener("click",getfacts);


