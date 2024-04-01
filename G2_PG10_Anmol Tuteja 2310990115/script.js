


document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("navbar-scrolled");
    } else {
      navbar.classList.remove("navbar-scrolled");
    }
  });
});


//login button
function toggleModal() {
  var modal = document.getElementById('modalLogin');
  modal.style.display = modal.style.display === 'none' ? 'block' : 'none';
}


// //changing languge  
// function translatePage() {
//   const targetLanguage = 'hi'; 
//   const apiKey = 'API Key'; 

//   // Iterate through all text nodes on the page and translate their content
//   const textNodes = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);

//   let currentNode;
//   while ((currentNode = textNodes.nextNode())) {
//     const textToTranslate = currentNode.nodeValue.trim();

//     if (textToTranslate !== '') {
//       // Make a request to the Yandex.Translate API
//       fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=${apiKey}&text=${textToTranslate}&lang=${targetLanguage}`)
//         .then(response => {
//           if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//           }
//           return response.json();
//         })
//         .then(data => {
//           const translatedText = data.text[0];
//           currentNode.nodeValue = translatedText;
//         })
//         .catch(error => console.error('Error translating text:', error));
//     }
//   }
// }

// function showDonationForm() {
//   var form = document.getElementById("donationForm");
//   form.style.display = "flex";
// }

// function processDonation() {
//   var name = document.getElementById("name").value;
//   var email = document.getElementById("email").value;
//   var amount = document.getElementById("amount").value;


//   alert("Thank you, " + name + ", for your donation of $" + amount + ". We will contact you at " + email + ".");
// }


// dark mode 

function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');
}



// //login 
// let useremail = document.querySelector(".useremail").textContent;

// localStorage.setItem("email", useremail);


// const dispemail = localStorage.getItem("email");


// document.getElementById("login-now").addEventListener("click", function(e) {
//     if (!useremail.trim() == "") {
//         let account = document.getElementById("openModalButton");

//         account.textContent = dispemail;
//     }
// });



// //fake login 
// let username = document.querySelector(".useremail").value.trim();
// let userpass = document.querySelector(".userpass").value.trim();

// if (username !== "" && userpass !== "") {
//     alert("Login Successful");
// } else {
//     alert("Login unsuccessful");
// }

const loader = document.querySelector(".loader");
const content = document.querySelector(".content");
window.addEventListener("load", () => {
  loader.classList.add("hide");
  content.classList.add("show");
});





function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    { pageLanguage: 'en' },
    'google_translate_element'
  )
}



function changeText(element) {
  element.style.transition = "background 0.7s ease";
  element.outerHTML = ` <div  style="background: white; " class="anmol about-us-container">
        <img src="./images/Anmol.jpeg"  class="quote-img" alt="Person 1">
        <h5>Anmol Tuteja</h5>
         <p> Anmol is a dedicated community organizer at Oxfarm Inteternational. He passionarnately leads initiatives to address various social issues and improve the lives of those in need. </p>
      </div>`;
}

function restoreText(element) {
  element.outerHTML = `<div onmouseover="changeText(this)" onmouseout="restoreText(this)" style="background: url("./images/Anmol.jpeg");" class="anmol about-us-container"></div>`;
}




function changeText2(element) {
  element.outerHTML = ` <div style="background: white;" class="anmolpreet about-us-container">
        <img src="./images/IMG_20231029_114040~2 (1).jpg" class="quote-img" alt="Person 1">
      <h5>AnmolPreet Singh</h5>
    </p> Anmolpreet is a compassionate health and wellness champion at Oxform International. He is devoted to enhancing the well-being of the community through health programs and awareness campaigns.</p>
    </div>`;
}


function changeText3(element) {
  element.outerHTML = ` <div style="background: white;" class="ansh about-us-container">
        <img src="./images/WhatsApp Image 2023-11-23 at 1.39.41 PM.jpeg" class="quote-img" alt="Person 1">
      <h5>Ansh Kaushal</h5>
     <p> Ansh is an enthusiastic education advocate at Oxform International. He works tirelessly to promote education and ensure that every child has access to quality learning opportunities.</p>
    </div>`;
}


document.querySelector(".world-map").addEventListener("click", (e) => {


  e.preventDefault()
  const file = './donation/index.html';
  window.open(file, '_blank');
})






