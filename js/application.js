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


const apiKey = 'KlIgm8qjsDdtb08SDwxw3uIjQP6gVyPiUqXvBhNs';
const url =  `https://countryapi.io/api/all?apikey=${apiKey}`
const getCountries = async()=>{ 
    try {
        const response = await fetch(url);
        if (response.status !== 200) {
            console.log('Error: Request failed');
            return;
        }

        const data = await response.json();
        const countryNames = Object.values(data).map(country => country.name);
        console.log('Country Names:', countryNames);
        return countryNames;
    } catch (error) {
        console.error('Error fetching country data:', error);
    }
}
getCountries().then((response)=>{
    console.log('response', response)
        renderCountries(response);
}).catch((err)=>{
    console.log(err)
})
const renderCountries = (response) =>{
let selective = '';
response.sort();
response.forEach((item)=>{
    selective += `<option value="${item}">${item}</option>`;
})
country.innerHTML = selective;
console.log(country.innerHTML);
}



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
        Subject : `Application Form from ${LastName.value} `,
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
const phoneInputField = document.querySelector("#phone");
const phoneInput = window.intlTelInput(phoneInputField, {
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});

const checkInput = ()=>{
    const items = document.querySelectorAll('.item');
items.forEach((item, index)=>{
    const errorMes = item.parentElement.querySelector('.error-message');
    if(item.value == ""){
       
     
        if(errorMes){
            errorMes.classList.remove('hidden')
        }
    }else {
        if (errorMes) {
            errorMes.classList.add('hidden');
        }
    }
   
   
    item.addEventListener('keyup', ()=>{
        if(item.value != ""){
        
       
        if(errorMes){
            errorMes.classList.add('hidden')
        }
        else {
            errorMes.classList.remove('hidden');
        }
       
        }
    })
}) 

}

submit.addEventListener("click", (e)=>{
    e.preventDefault();
    console.log(country.value)
    const allFieldsFilled = [FullName, LastName, Dob, CurrentAddress, city, state, ZipCode, country, socialSecurity, phone, email, AgentName, LandlordName, occupants, emergencyContact, paymentMethod]
    .every(field => field.value.trim() !== "");
    checkInput();
   // sendEmail();
    if(allFieldsFilled){
        sendEmail();
        
    } else{
        Swal.fire({
            title: "Incomplete Form",
            text: "Please fill in all required fields.",
            icon: "error"
        });
    }
})