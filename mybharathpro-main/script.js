// =======================================
// Smooth reveal animation on scroll
// =======================================
window.addEventListener("scroll", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const position = card.getBoundingClientRect().top;
    const screen = window.innerHeight;

    if (position < screen - 100) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});


// =======================================
// Safe Menu Toggle
// =======================================
const menu = document.querySelector('.menu');
const toggle = document.querySelector('.toggle');

if (toggle && menu) {
  toggle.onclick = function () {
    menu.classList.toggle('active');
  };
}


// =======================================
// Show Password Option
// =======================================
function showPassword() {
  const passwordBox = document.getElementById("passwordBox");
  const otpBox = document.getElementById("otpBox");

  if(passwordBox && otpBox){
    passwordBox.style.display = "block";
    otpBox.style.display = "none";
  }
}


// =======================================
// Show OTP Option
// =======================================
function showOTP() {
  const passwordBox = document.getElementById("passwordBox");
  const otpBox = document.getElementById("otpBox");

  if(passwordBox && otpBox){
    passwordBox.style.display = "none";
    otpBox.style.display = "block";
  }
}


// =======================================
// Login Function
// =======================================
function login() {

  const user = document.getElementById("userInput");
  const role = document.querySelector('input[name="role"]:checked');

  if (!user || user.value === "") {
    alert("Enter Email or Mobile");
    return;
  }

  if (!role) {
    alert("Select a role");
    return;
  }

  if(role.value === "patient"){
    window.location.href = "patient/dashboard.html";
  }

}


// =======================================
// DOCTOR BOOKING SYSTEM
// =======================================
document.addEventListener("DOMContentLoaded", function() {

  const doctorCards = document.querySelectorAll(".doctor-card");

  // If page doesn't have doctor cards, stop here
  if(doctorCards.length === 0) return;

  doctorCards.forEach(card => {

      const doctorName = card.querySelector("h3")?.innerText;
      const slots = card.querySelectorAll(".slot-btn");
      const bookBtn = card.querySelector(".book-btn");

      let selectedSlot = null;

      // Select Slot
      slots.forEach(slot => {
          slot.addEventListener("click", function(){

              slots.forEach(s => s.classList.remove("active"));
              slot.classList.add("active");

              selectedSlot = slot.innerText;
          });
      });

      // Book Appointment
      if(bookBtn){
          bookBtn.addEventListener("click", function(){

              if(!selectedSlot){
                  alert("Please select a time slot first!");
                  return;
              }

              const appointment = {
                  doctor: doctorName,
                  time: selectedSlot,
                  date: new Date().toLocaleDateString()
              };

              let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
              appointments.push(appointment);
              localStorage.setItem("appointments", JSON.stringify(appointments));

              alert("Appointment Booked Successfully!");
          });
      }

  });

});

document.addEventListener("DOMContentLoaded", function(){

document.querySelectorAll(".doctor-card").forEach(card => {

let selectedSlot = null;

card.querySelectorAll(".slot-btn").forEach(btn => {
btn.addEventListener("click", function(){
card.querySelectorAll(".slot-btn").forEach(b=>b.classList.remove("active"));
this.classList.add("active");
selectedSlot = this.innerText;
});
});

card.querySelector(".book-btn").addEventListener("click", function(){

if(!selectedSlot){
alert("Select a time slot first");
return;
}

const doctorName = card.querySelector("h3").innerText;

let appointments = JSON.parse(localStorage.getItem("appointments")) || [];

appointments.push({
doctor: doctorName,
time: selectedSlot,
date: new Date().toLocaleDateString()
});

localStorage.setItem("appointments", JSON.stringify(appointments));

alert("Appointment booked successfully!");

});
});
});
function login() {

    // selected role eduthuku
    let role = document.querySelector('input[name="role"]:checked');

    if (!role) {
        alert("Please select a role");
        return;
    }

    let selectedRole = role.value;

    // role based redirect
    if (selectedRole === "doctor") {
        window.location.href = "doctor/doctor.html";
    } 
    else if (selectedRole === "clinic") {
        window.location.href = "clinic.html";
    } 
    else if (selectedRole === "police") {
        window.location.href = "police.html";
    } 
    else {
        alert("Invalid role");
    }
}