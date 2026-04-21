function logout(){
window.location.href="../login.html";
}

function viewPatient(){
window.location.href="patient-details.html";
}

function openPrescription(){
window.location.href="prescription.html";
}

function writePrescription(){
window.location.href="prescription.html";
}

function goBack(){
window.history.back();
}

function searchPatient(){

let input = document.getElementById("searchInput").value.toLowerCase();
let table = document.getElementById("appointmentTable");
let tr = table.getElementsByTagName("tr");

for(let i=1;i<tr.length;i++){

let td = tr[i].getElementsByTagName("td")[1];

if(td){
let txt = td.textContent || td.innerText;

if(txt.toLowerCase().indexOf(input) > -1){
tr[i].style.display="";
}
else{
tr[i].style.display="none";
}

}

}

}

function sendPrescription(){

alert("Prescription sent successfully");

window.location.href="dashboard.html";

}
function followUp(){

alert("Follow up scheduled for next visit");

}

function searchPatients() {

let input = document.getElementById("searchInput").value.toLowerCase();
let status = document.getElementById("statusFilter").value.toLowerCase();

let rows = document.querySelectorAll("table tr");

rows.forEach((row, index) => {

if(index === 0) return; // skip header

let patient = row.children[1].innerText.toLowerCase();
let patientStatus = row.children[4].innerText.toLowerCase();

let nameMatch = patient.includes(input);
let statusMatch = (status === "all" || patientStatus.includes(status));

if(nameMatch && statusMatch){
row.style.display = "";
}else{
row.style.display = "none";
}

});

}

function toggleMenu(){

let menu = document.getElementById("dropdownMenu");

if(menu.style.display === "block"){
menu.style.display = "none";
}else{
menu.style.display = "block";
}

}