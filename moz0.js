
const header = document.querySelector('h1');

/*
var a = 0
while  (a <= 10 ){
    console.log(a);
    a += 1
}


*/

/* 
for (let i = 0;i <= 100; i++){
    console.log(i);
} */

a = 10;

if (a > 0){
    console.log("positive")
}
else if(a < 0){
    console.log("negative")
}
else {
    console.log("Zero")
}



function helloworld(){
    console.log("-----helllo world------");
    alert("Hello world!");
}

function mul(num1, num2){
    return num1 * num2;
}

function hello(name){
    console.log(" -- hello  --" + name);
}



// document.querySelector("html").addEventListener("click", helloworld);


function imageChange() {
    const myImage = document.querySelector("img");
    const imgSrc = myImage.getAttribute("src");
    if (imgSrc == "firefox-icon.png"){
        myImage.setAttribute("src","cat.jpeg");
    } else {
        myImage.setAttribute("src","firefox-icon.png");
    }
}

document.querySelector("img").addEventListener("click", imageChange);


const myButton = document.querySelector("button");
const myHeader = document.querySelector("h1");

function setUserName(){
    const username = prompt("enter your name: ");
    if (!username || username == ""){
        setUserName();
    } else {
    localStorage.setItem("name", username);
    myHeader.textContent = `Mozilla is Cool #${username}`;
    }
}


if(!localStorage.getItem("name")){
    setUserName()
} else {
    const storedName = localStorage.getItem("name");
    myHeader.textContent = `Mozilla is Cool #${storedName}`;
}


myButton.onclick = setUserName;