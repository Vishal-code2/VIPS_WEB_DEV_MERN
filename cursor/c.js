// const box=document.querySelector(".dot")
// const box2=document.querySelector(".dot2")
// box.addEventListener("mousemove",(v)=>{
//     // console.log("move");

//     // console.log(`Mouse at X: ${v.clientX}, Y: ${v.clientY}`);

//     // v.style.left = v2.clientX + 'px';
//     // v.style.top = v2.clientY + 'px';

//     box.style.cssText=box2.style.cssText="left"+v.clientX+"px ;top:"+v.clientY+"px";


// })



const cursor = document.getElementById('cursor');

    document.addEventListener('mousemove', (e) => {
      const x = e.clientX;
      const y = e.clientY;
      cursor.style.transform = `translate(${x}px, ${y}px)`;
    });