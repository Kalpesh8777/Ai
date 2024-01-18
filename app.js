const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 0.8;
    text_speak.pitch = 5;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Good Morning Kalpesh Sir");
    }

    else if(hr == 12) {
        speak("Good noon Kalpesh Sir");
    }

    else if(hr > 12 && hr <= 17) {
        speak("Good Afternoon Kalpesh Sir");
    }
    else if(hr > 17 && hr <= 21) {
        speak("Good Evening Kalpesh Sir");
    }

    else {
        speak("Good Night Kalpesh Sir");
    }
}

window.addEventListener('load', ()=>{
    speak("Activating VEER BOY");
    speak("Going online");
    wishMe();
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start();
})

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I did not understand what you said please try again";

    if(message.includes('activate') || message.includes('get ready')) {
        const finalText = "Welcome Kalpesh sir , tell me how can i help you"
        speech.text = finalText;
    }

    else if(message.includes('how are you')) {
        const finalText = "I am fine sir";
        speech.text = finalText;
    }

    else if(message.includes('name')) {
        const finalText = "My name is veer boy";
        speech.text = finalText;
    }
    else if(message.includes('who is my best friend')) {
        const finalText = "His name is prem badgujar";
        speech.text = finalText;
    }
    else if(message.includes('who is pankaj')) {
        const finalText = "He is a good boy";
        speech.text = finalText;
    }
    else if(message.includes('what is my birth date')) {
        const finalText = "it's 12th of march 2003";
        speech.text = finalText;
    }
    else if(message.includes('who is ghanshyam')) {
        const finalText = "He is your big brother, who is best teacher in world as well as human being";
        speech.text = finalText;
    }
    else if(message.includes('whom i love most in the world')) {
        const finalText = "Your Mom and Dad";
        speech.text = finalText;
    }
    else if(message.includes('who is kundan')) {
        const finalText = "he is your favourite Jiju";
        speech.text = finalText;
    }
    else if(message.includes('who is bhagyashree')) {
        const finalText = "She is besttest sister in the world";
        speech.text = finalText;
    }
    else if(message.includes('who is aditya')) {
        const finalText = "he is your bestie";
        speech.text = finalText;
    }
    else if(message.includes('my favourite cricketer')) {
        const finalText = "Virat Kohli";
        speech.text = finalText;
    }
    else if(message.includes('my favourite actor')) {
        const finalText = "sidharth malhotra";
        speech.text = finalText;
    }
    else if(message.includes('my favourite actress')) {
        const finalText = "Tripti dimri";
        speech.text = finalText;
    }
    else if(message.includes('my favourite movie')) {
        const finalText = "sanam teri kasam";
        speech.text = finalText;
    }
    else if(message.includes('my favourite music track')) {
        const finalText = "Tera chehra";
        speech.text = finalText;
    }
    else if(message.includes('who is neha')) {
        const finalText = "she is an pretty girl";
        speech.text = finalText;
    }
    else if(message.includes('who is kalyani')) {
        const finalText = "she is an makeup artist";
        speech.text = finalText;
    }
    else if(message.includes('who is better')) {
        const finalText = "both are made with skills, can't tell specifically. they are better in there own way";
        speech.text = finalText;
    }
    else if(message.includes('who is kunal')) {
        const finalText = "he is a lover boy";
        speech.text = finalText;
    }
    else if(message.includes('who is khushi')) {
        const finalText = "she is an chapari girl";
        speech.text = finalText;
    }
    else if(message.includes('my fevourite color')) {
        const finalText = "it is gray";
        speech.text = finalText;
    }
    else if(message.includes('my fevourite street food')) {
        const finalText = "vada pav";
        speech.text = finalText;
    }

    else if(message.includes('open google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Opening Google";
        speech.text = finalText;
    }
    else if(message.includes('open youtube')) {
        window.open("https://youtube.com", "_blank");
        const finalText = "Opening Youtube";
        speech.text = finalText;
    }

    else if(message.includes('open instagram')) {
        window.open("https://instagram.com", "_blank");
        const finalText = "Opening instagram";
        speech.text = finalText;
    }
    else if(message.includes('open w3school')) {
        window.open("https://www.w3schools.com", "_blank");
        const finalText = "Opening w3school";
        speech.text = finalText;
    }
    else if(message.includes('open github')) {
        window.open("https://github.com", "_blank");
        const finalText = "Opening github";
        speech.text = finalText;
    }

    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        speech.text = finalText;
    }
    else if(message.includes('play') || message.includes('song') || message.includes('what are')) {
        window.open(`https://www.youtube.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on youtube regarding " + message;
        speech.text = finalText;
    }
    else if(message.includes('java') || message.includes('Java') || message.includes('what are')) {
        window.open(`https://www.w3schools.com/java/default.asp?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on w3school regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speech.text = finalText;
    }
    else if(message.includes('youtube')) {
        window.open(`https://www.youtube.com/${message.replace("youtube", "")}`, "_blank");
        const finalText = "This is what i found on youtube regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speech.text = finalText;
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speech.text = finalText;
    }

    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speech.text = finalText;
    }
    else if(message.includes('camera')) {
        window.open('Camera:///')
        const finalText = "Opening Camera";
        speech.text = finalText;
    }
    else if(message.includes('notepad')) {
        window.open('Notepad:///')
        const finalText = "Opening notepad";
        speech.text = finalText;
    }
    else if(message.includes('whatsaap')) {
        window.open('WhatsApp:///')
        const finalText = "Opening whatsapp";
        speech.text = finalText;
    }
    else if(message.includes('setting')) {
        window.open('Settings:///')
        const finalText = "Opening settings";
        speech.text = finalText;
    }

    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}