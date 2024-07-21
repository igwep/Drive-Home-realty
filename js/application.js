/* import { burgerMenu } from "./app.js"; */

const burgerMenu = ()=>{
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
  }
  burgerMenu();
console.log('application');




const submit = document.querySelector('.submit-btn');
const FullName = document.getElementById('first-name');
const LastName = document.getElementById('last-name');
const Dob = document.getElementById('dob');
const CurrentAddress = document.getElementById('current-address');
const city = document.getElementById('city');
const state = document.getElementById('state');
const ZipCode = document.getElementById('zip-code');
const country = document.getElementById('country');
const socialSecurity = document.getElementById('social-security');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const AgentName = document.getElementById('agent-name');
const LandlordName = document.getElementById('landlord-name');
const occupants = document.getElementById('occupants');
const emergencyContact = document.getElementById('emergency-contact');
const paymentMethod = document.getElementById('payment-method');

const sendEmail = ()=>{
    const bodyMessage = `FullName:${FullName.value} <br> 
    lastName:${LastName.value} <br>
    Dob:${Dob.value} <br>
   CurrentAddress:${CurrentAddress.value} <br>
    city:${city.value} <br>
    state:${state.value} <br>
    zipcode:${ZipCode.value} <br>
   country :${LastName.value} <br>
    country:${country.value} <br>   
    socialSecurity:${socialSecurity.value} <br>   
    phone:${phone.value} <br>   
    email:${email.value} <br>   
    AgentName:${AgentName.vaue} <br>   
    landlordName:${LandlordName.value} <br>  
    occupants:${occupants.value} <br>  
    EmergencyContact:${emergencyContact.value} <br>  
    payment Method:${paymentMethod.value} <br>  

`;
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "igwep5537@gmail.com",
        Password : "9A052D6E3FC21DC7D61C9F56D6E8B7093C0E",
        To : 'igwep5537@gmail.com',
        From : "igwep5537@gmail.com",
        Subject : "This is the subject",
        Body : bodyMessage
    }).then(
      message => {
        if(message === 'OK'){
            Swal.fire({
                title: "Application Sent!",
                text: "Thank You for Choosing US",
                icon: "success"
              });
        }
      }
    );
};
submit.addEventListener("click", (e)=>{
    e.preventDefault();
    sendEmail();
    
})