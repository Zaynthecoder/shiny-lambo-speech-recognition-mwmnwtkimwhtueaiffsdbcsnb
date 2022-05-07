x = 0;
y=0;
draw_circle = "";
draw_rect = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
    document.getElementById("status").innerHTML = "System is listening, please speak";
    recognition.start();

}

recognition.onresult = function(event) { 
    console.log(event);

    var content = event.results[0][0].transcript;
    
    document.getElementById("status").innerHTML = "the speech that you have said has been recognized as " + content;
        if(content=="circle") {
            x = Math.floor(Math.random() * 900);
            y = Math.floor(Math.random() * 600);
            document.getElementById("status").innerHTML = "We drew a circle because this website is amazing";
            draw_circle = "set";
    
        }
        if(content=="rectangle") {
            x = Math.floor(Math.random() * 900);
            y = Math.floor(Math.random() * 600);
            document.getElementById("status").innerHTML = "We drew a rectangle because this website is amazing";
            draw_rect = "set";

            
            
        }
    
}
function setup() {
    canvas = createCanvas(900,600);

}
function draw() {
    if(draw_circle == "set") {
        radius = Math.floor(Math.random() * 100);
        circle(x,y,radius);
        document.getElementById("status").innerHTML = "We drew a circle because this website is amazing. Circle is complete";
        draw_circle= "";

    }
    if(draw_rect == "set") {
        recognition(x,y,70,50);
        document.getElementById("status").innerHTML = "We drew a Rectangle because this website is amazing. Rectangle is complete";
        draw_rect= "";

    }
}
