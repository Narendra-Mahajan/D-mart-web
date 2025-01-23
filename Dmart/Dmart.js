//search
const place=['butter','sugar','tea','salt','ghee','rice','chips','milk','curd','pulses']
let index=0;
const animantedPlaceholder=document.getElementById("animantedPlaceholder")

function movingPlaceholder(){
    animantedPlaceholder.style.animation='changeValue 0.5s forwards'

    setTimeout(()=>{
        index=(index+1)%place.length
        animantedPlaceholder.textContent=`Search "${place[index]}"`;
        animantedPlaceholder.style.animation='InChangeValue 0.5s forwards'
    },400);
}
movingPlaceholder()
setInterval(movingPlaceholder,3000)