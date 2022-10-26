const text = document.querySelector(".animation");
const strtext = text.textContent;
const split = strtext.split("");
text.textContent="";

// second 

const text2 = document.querySelector(".animation2");
const strtext2 = text2.textContent;
const split2 = strtext2.split("");
text2.textContent="";


animation(text,split);
animation(text2,split2);



function animation(text,split){
    for(let i = 0; i<split.length;i++){
        text.innerHTML += "<span>"+ split[i]+"</span>";
    }
    
    let char =0;
    let timer = setInterval(() => {
        const span = text.querySelectorAll('span')[char];
        span.classList.add('fade');
        char++;
        if (char === split.length){
            clearInterval(timer);
            timer=null;
            return;
        }
    }, 50);
    
}

const menumobile = document.querySelector(".mobile-menu");
const navbar = document.querySelector(".navbar");


menumobile.addEventListener("click",()=>{
if (menumobile.classList.contains('a')){
    menumobile.classList.add('mobile');
    menumobile.classList.remove('a');
    navbar.classList.add('nav-mob');
    navbar.classList.remove('h-nav');
    navbar.classList.remove('hidden');



}else{
    menumobile.classList.remove('mobile');
    menumobile.classList.add('a');
    navbar.classList.remove('nav-mob');  
    navbar.classList.add('h-nav');
}
})