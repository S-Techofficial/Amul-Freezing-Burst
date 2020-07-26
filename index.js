let load = 0;
document.onreadystatechange = function(){
    if(document.readyState == "interactive"){
        var allElement = $("*");
        var length= allElement.length;
        for(var i=0;i<length;i++){
            set_element(allElement[i],length);
        }
    }
}
function set_element(element,totalElement){
    var percentage = 100/ totalElement;
    if($(element).length==1){
        $("#fill").animate({width:load+percentage+"%"},1000,function(){
            if(document.getElementById("fill").style.width=="100%"){
                $(".main").fadeOut(500);
            }
        });
        load = load + percentage;
    }
}





let progress = document.getElementById("progressbar");
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}


let text = document.getElementById("text");
    window.addEventListener("scroll",function(){
        let value = window.scrollY;
        text.style.marginBottom = value * 2 + 'px';
    });


const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
hamburger.addEventListener("click",() =>{
    navLinks.classList.toggle("open");
    links.forEach(link =>{
        link.classList.toggle("fade");
    })
})