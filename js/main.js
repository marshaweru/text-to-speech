//Add one variable
let speech = new SpeechSynthesisUtterance();

//Switch voices

document.querySelector("button").addEventListener("click", () =>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});