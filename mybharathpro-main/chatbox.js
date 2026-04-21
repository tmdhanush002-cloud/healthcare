function sendMessage() {

  let input = document.getElementById("userInput");
  let chatBox = document.getElementById("chatBox");

  let userText = input.value.trim();
  if (userText === "") return;

  // USER MESSAGE
  let userMsg = `<div class="user-msg">${userText}</div>`;
  chatBox.innerHTML += userMsg;

  let reply = "Consult doctor please";

  let text = userText.toLowerCase();

  if (text.includes("fever")) {
    reply = "Fever irukku. Rest edunga, water kudinga 💧";
  }
  else if (text.includes("headache")) {
    reply = "Headache na rest edunga, stress kammi pannunga";
  }
  else if (text.includes("cough")) {
    reply = "Cough irundha warm water kudinga";
  }

  // BOT MESSAGE
  let botMsg = `<div class="bot-msg">${reply}</div>`;
  chatBox.innerHTML += botMsg;

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}


/* VOICE 🎤 */
function voiceInput() {

  if (!('webkitSpeechRecognition' in window)) {
    alert("Voice not supported");
    return;
  }

  let recognition = new webkitSpeechRecognition();
  recognition.lang = "en-IN";

  recognition.onresult = function(event) {
    document.getElementById("userInput").value =
      event.results[0][0].transcript;
  };

  recognition.start();
}