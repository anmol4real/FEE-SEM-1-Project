//Email send 

//website smtpjs
function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "tutejaanmol0@gmail.com",
    Password: "PASSWORD",
    To: document.getElementById("email").value,
    From: "tutejaanmol0@gmail.com",
    Subject: "Your form has been submitted successfully",
    Body: `Dear ,  ${document.getElementById("Name").value} ${document.getElementById("Surname").value} 

    I hope this message finds you well. On behalf of oxfam, I want to express our sincere gratitude for taking the time to fill out our recent survey. Your valuable feedback plays a crucial role in helping us enhance our services and better meet your expectations.
    
    We appreciate the effort you put into providing detailed responses, and we want you to know that your input is highly valued. Your insights help us understand our strengths and areas for improvement, allowing us to continuously strive for excellence.
    
    If you have any further comments, suggestions, or concerns, please feel free to reach out to us. We genuinely appreciate your openness and willingness to help us grow.

    Once again, thank you for being a valued member of the oxfam community. We look forward to serving you even better in the future.\n
    
    Best regards,\n
    
    Oxfam International\n
    oxfamint@gmail.com `
  }).then(
    message => alert(message)
  );
}




const btn = document.querySelector('.button');
const box = document.querySelectorAll('.box')
const dropdowns = document.querySelectorAll('select');
// const password = document.querySelector('#password').value
let toastBox = document.getElementById("toastbox");
let errorMsg =
  " <i class='fa-solid fa-circle-xmark'></i>First Fill the form!! ";

function showToast(msg) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = msg;
  toastBox.appendChild(toast);

  if (msg.includes("error")) {
    toast.classList.add("error");
  }

  setTimeout(() => {
    toast.remove();
  }, 6000);
}

//popup success
let popup = document.getElementById("popup");

function openPopup() {
  popup.classList.add("open-popup")
}

function closePopup() {
  popup.classList.remove("open-popup")
}



//Function to check if form is filled or Not 
const formFilled = function (box) {
  for (let i = 0; i < box.length; i++) {
    let filled = box[i].value.trim()   //if empty string then filled='' which is falsy value 
    if (filled === '') {
      return false;
    }
  }
  //   for (let i = 0; i < dropdowns.length; i++) {
  //     const selectedValue = dropdowns[i].value;
  //     if (selectedValue === '' || selectedValue === null) {
  //         return false;
  //     }
  // }
  const dropdowns = document.querySelectorAll('select');

  for (let i = 0; i < dropdowns.length; i++) {
    const selectedValue = dropdowns[i].value;
    if (selectedValue === '' && dropdowns[i].selectedIndex === 0) {
      return false;
    }
  }
  // If all fields are filled, return true
  return true;
}




btn.addEventListener('click', function (event) {
  event.preventDefault();

  if (formFilled(box)) {
    sendEmail();
    openPopup();
  } else {
    sendEmail()
    showToast(errorMsg);

  }
});


function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollButton").style.display = "block";
  } else {
    document.getElementById("scrollButton").style.display = "none";
  }
};


// working : name surname 

document.addEventListener("DOMContentLoaded", function () {
  const nameInput = document.querySelector(".name-input");
  const surnameInput = document.querySelector(".surname-input");
  const naming = document.querySelector(".naming");


  nameInput.addEventListener("input", updateNaming);


  surnameInput.addEventListener("input", updateNaming);

  function updateNaming() {
    const name = nameInput.value.trim();
    const surname = surnameInput.value.trim();

    if (name !== "" && surname !== "") {
      naming.textContent = `FILL YOUR DETAILS: ${name} ${surname}`;
    } else {
      naming.textContent = "FILL YOUR DETAILS:";
    }
  }
});


document.addEventListener("dblclick", function (e) {

  e.preventDefault();


  const shareModal = document.getElementById("shareModal");
  const closeModal = document.getElementById("closeModal");
  const shareLinkInput = document.getElementById("shareLink");
  const copyLinkButton = document.getElementById("copyLink");


  const linkToShare = "https://share.com";


  shareLinkInput.value = linkToShare;


  shareModal.style.display = "block";


  closeModal.onclick = function () {
    shareModal.style.display = "none";
  };


  window.onclick = function (event) {
    if (event.target == shareModal) {
      shareModal.style.display = "none";
    }
  };


  copyLinkButton.onclick = function () {
    shareLinkInput.select();
    if (document.execCommand("copy")) {

      copyLinkButton.innerText = "Copied";
      setTimeout(function () {
        copyLinkButton.innerText = "Copy Link";
      }, 3000);
    }
  };
});



const timeLimitInSeconds = 1800;
const countdownElement = document.getElementById('countdown');
const submitButton = document.getElementById('submitButton');
let timeLeft = timeLimitInSeconds;


function updateCountdown() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  countdownElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}


function startTimer() {
  const timerInterval = setInterval(function () {
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      countdownElement.textContent = '00:00';
      //submitButton.removeAttribute('disabled');
      //submitButton.click();
      const file = './button.html';

      window.open(file, '_blank');
    } else {
      updateCountdown();
      timeLeft--;
    }
  }, 1000);
}


startTimer();


window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});


function showAdditionalQuestion() {
  var answer = document.querySelector('input[name="interest"]:checked').value;
  var additionalQuestion = document.getElementById('additionalQuestion');

  if (answer === 'yes') {
    additionalQuestion.style.display = 'block';
  } else {
    additionalQuestion.style.display = 'none';
  }
}


//form submission 
function submitForm() {
  var form = document.getElementById("contactForm");
  var formData = new FormData(form);

  fetch('/submit_form', {
    method: 'POST',
    body: formData
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      console.log(data);

    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
}

const printbtn = document.getElementById("print")
printbtn.onclick = function () {
  window.print()
}
