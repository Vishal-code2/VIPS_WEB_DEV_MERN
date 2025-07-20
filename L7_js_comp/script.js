//promise

// let promise= new Promise((resolve,reject)=>{
//     let num= Math.floor(Math.random()*2)
//     console.log(num)
//     if(num===0){
//         setTimeout(() => {
//             resolve("homework done")
//         },2000);
//     }else{
//         reject("homework not done")
//     }
    
// })

// console.log(promise)

// promise.then((res)=>{
//     console.log(res);

// })
// .catch((err)=>{
//     console.log(err)
// })

// let promise= new Promise((resolve,reject)=>

// function promise() {
//     let num= Math.floor(Math.random()*2)
//     console.log(num)
//     if(num===0){
//         setTimeout(() => {
//             resolve("homework done")
//         },2000);
//     }else{
//         reject("homework not done")
//     }
    
// }

// async function sum(){
//     try{
//         // let a=20
//         // let b=20
//         // console.log(a+b);

//         let result=await promise()
//         console.log(result);
//         console.log("hello");


//     } catch (error){
//         // console.log(error);
//         console.error(error);
//     }
// }
// sum();


// console.log(10/"20");
// console.log(10/parseInt("hello"));

//queryselector aall
// let box=document.querySelectorAll(".box");
// console.log(box);


// let box=document.getElementById("box");
// console.log(box);


// let firebox=document.getElementsByClassName("box")
// console.log(firebox)


let para=document.querySelector("p")

// console.log(para.innerText)
// console.log(para.textContent)
// console.log(para.innerHTML)

// para.innerText="hello bhaiyooooo <b>hello</b> "
// para.textContent="hello bhaiyooooo <b>hello</b> "
// para.innerHTML="hello bhaiyooooo <b>hello</b> "

// para.style.background="red"
// para.style.color="white"


// para.innerHTML="hello bhaiyooooo <b>hello</b> "
// console.log(para.classList.add())


// let body=document.querySelector("body")
// let btn=document.querySelector("button")

// let img=document.createElement("img")
// img.setAttribute("src", "https://images.unsplash.com/photo-1744059509939-866e0fb167c6?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")

// btn.addEventListener("click",()=>{
//     body.classList.toggle("dark")
// })

// console.log(img);

// damn code
let btn = document.querySelector("button")

btn.addEventListener("click",()=>{
    let body = document.querySelector("Body")
    let img = document.createElement("img")
    img.setAttribute("src","https://images.unsplash.com/photo-1747021627449-945b5723ddbe?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")

    let top = Math.random()*90
    let left = Math.random()*90
    img.style.position="Absolute";
    img.style.top= `${top}%`
    img.style.left= `${left}%`
    img.setAttribute("height","200px")
    img.style.height = "200px";
    console.log(img);
    
    body.appendChild(img)
})


