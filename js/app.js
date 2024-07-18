const burger = document.querySelector('.burger-menu');
console.log('burger')
const mobileContainer = document.querySelector('.mobile-link-container');
burger.addEventListener('click', ()=>{
    console.log('why')
    if(mobileContainer.classList.contains('h-0')){
        mobileContainer.classList.remove('h-0');
        mobileContainer.classList.add('h-48');
    }
    else{
        mobileContainer.classList.remove('h-48');
        mobileContainer.classList.add('h-0');
    }
       
    
})