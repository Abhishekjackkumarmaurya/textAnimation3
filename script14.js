 var acrs=document.querySelector("#cursur")
 var main1=document.querySelector("#main")

main1.addEventListener("mousemove",function(de){
              acrs.style.left=de.x+20 +"px";
              acrs.style.top=de.y+20 +"px";
       
})
