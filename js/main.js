//Add one variable
let speech = new SpeechSynthesisUtterance();

//Switch voices by adding one variable
let voices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();//Will provide all voices available on device
    speech.voice = voices[0];//By default it will speak in first voice 
    //Display voices in dropdown
    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
}

document.querySelector("button").addEventListener("click", () =>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});