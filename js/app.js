const burger = document.querySelector('.burger-menu');
console.log('burger')
const mobileContainer = document.querySelector('.mobile-link-container');
burger.addEventListener('click', ()=>{
    console.log('why')
    if(mobileContainer.classList.contains('h-0')){
        mobileContainer.classList.remove('h-0');
        //mobileContainer.classList.remove('hidden');
        mobileContainer.classList.add('h-48');
    }
    else{
        mobileContainer.classList.remove('h-48');
        //mobileContainer.classList.add('hidden');
        mobileContainer.classList.add('h-0');
    }
       
    
})
//carosel


document.addEventListener('DOMContentLoaded', ()=>{
    const carosel = document.querySelector('.carosel');
    let scrollAmount = 0;
    const itemWidth = document.querySelector('.carousel-item').offsetWidth;
    
    setInterval(() => {
      scrollAmount += itemWidth;
      if (scrollAmount >= carosel.scrollWidth - carosel.clientWidth) {
        scrollAmount = 0; // Reset to the beginning when reaching the end
      }
      carosel.scrollTo({
        top: 0,
        left: scrollAmount,
        behavior: 'smooth' // Smooth scrolling
      });
    }, 3000); // Change image ev

})
  // Initialize intl-tel-input
  $(document).ready(function() {
    $("#mobile_code").intlTelInput({
      initialCountry: "in", // Default country
      separateDialCode: true, // Show separate dial code
      utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/utils.js" // Optional: for formatting and validation
    });
  });
  import intlTelInput from 'intl-tel-input';

const input = document.querySelector(".phone");
intlTelInput(input, {
    utilsScript: "path/to/utils.js"
});