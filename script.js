var typed = new Typed('#element', {
    strings: ['Web Developer', 'Fresher Graduate', 'Fluent speaker', 'Problem solver in C/C++'],
    typeSpeed: 60,
  });

  burger=document.querySelector('.burger');
navbar=document.querySelector('.navbar');
navList=document.querySelector('.nav-list');


burger.addEventListener('click',()=>{
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})

const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
     if(entry.isIntersecting){
      entry.target.classList.add('show');
     }
     else{
      entry.target.classList.remove('show');
     }
  })
})

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((e1)=>observer.observe(e1));
