 const scrlbt = document.querySelector('.scroll-top');

 scrlbt.addEventListener('click',()=>{
     window.scrollTo({
         top:0,
         behavior:'smooth'
     });
 });