window.onload=()=>{
    var boxes= document.querySelectorAll('td');
      //  console.log(boxes);
     boxes.forEach((link)=>{
     link.addEventListener("click",function(){
      //    console.log(link.classList);
      link.classList.toggle("white");
     })
     });