// console.log(1=="1");
// console.log(1+"2");
// let a=10
// let str="hello world"
// console.log(str);
// let str2=`hello world${a}`      //not include spaces
// console.log(str2);


// let colors=['red','green','orange','blue','white'];
// console.log(colors.slice(0,3)); //slice(start,end) end is not included
//  console.log(colors.splice(1,2)); //splice(start,deleteCount)

// let str="hello world";
// console.log(str.split(" "));


// let arr=str.split(" ");
// // console.log(arr);
// console.log(arr.join("_"));

// let arr=[10,20,30,40,50];
// let newArr=arr.map((val,index)=>{
//     console.log(val + '----> ' + index);
//     return val+=5;
// })
// console.log(newArr);


// let arr=[1,2,3,4,5,6,7,8,9,10];
// console.log(arr.filter((val,index)=>{
    //     console.log(val + '----> ' + index);
    //     return val%2==0;
    // }))
    
    
// let arr=[1,2,3,4,5,6,7,8,9,10];
// arr.reduce((pre,val,index,a)=>{
//     // return pre+val;
//     console.log("previous-->" + pre)
//     console.log("current-->" + val);
//     console.log("index-->" + index);
//     console.log("a-->" + a);
    
// }
// );

// arr.forEach()=>{
// }

// let obj={
//     name: "vishal",
//     age:20 ,
//     player: "football player",
//     address:{
//         sector: 8,
//         code:"underdog"
//     },
//     fun :function(){
//         console.log("hello everyone from ",this.name);
//     }

// }


// console.log(obj["name"]);
// let key ="age"
// console.log(obj[key]);
// obj.age=25;                //update
// obj.branch="cse"           //add
// console.log(obj["branch"]);
// console.log(obj["age"]);


//inmutable
// let str="                                              vips                                ";
// console.log(str.trim());
// console.log(str);
// console.log(str.length);




// console.log(obj);
// console.log("player --> "+ obj.player)
// obj.fun();

// let arr=[10,20,30,40,50,60,70]
// console.log(arr)
// console.log(...arr)
// newarr=arr;
// newarr.push(80)
// console.log(...newarr);

// function number (a,b,c,d){
//     console.log(a,b);
// }
// number(10,20,30,40,50)


// let date =new Date()
// console.log(date)
// console.log(date.getFullYear())


// let float = 12.76875
// console.log(Math.floor(float))
// console.log(Math.ceil(float))

// let ran= Math.random()
// console.log(ran)
// console.log(Math.max(20,10))
// console.log(Math.min(20,10))


// let person ={
//     firstname:"vishal",
//     age:20

// }

// let{firstname}=person

// console.log(firstname);

let arr=['c','b','a','d']
for(const element of arr){
    console.log(element)
}
for(const key in arr){
    console.log(key)
}
// for(const key in arr){
//     console.log(key ,"---->", arr[key])
// }

// function one(){
//     console.log("first function")
// }
// function second(){
//     console.log("second function");
//     one()
// }
// second();


//immediatelly invoked function expression

//setinterval vs settimeout
// setTimeout(()=>{
//     console.log("hello world");
//     clearInterval(timer)
// },3000)


