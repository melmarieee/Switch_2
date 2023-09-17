
const pianoKeysElement = document.querySelectorAll(".key");
function playSound(newUrl) {
    new Audio(newUrl).play()
}

pianoKeysElement.forEach((pianoKey, i) => {
    const number = i < 9 ? "0" + (i + 1) : (i + 1)
    const newUrl = "pianosound/key" + number + ".mp3"
    pianoKey.addEventListener("click",() => playSound(newUrl))
});
document.addEventListener("keydown", function(e){
    console.log(e.key)
    switch(e.key){
        case "a":
            new Audio("pianosound/key01.mp3").play()
            document.getElementById("current-chord").innerText = "A";
            break;
        case "s":
            new Audio("pianosound/key02.mp3").play()
            document.getElementById("current-chord").innerText = "S";
            break;
        case "d":
            new Audio("pianosound/key03.mp3").play()
            document.getElementById("current-chord").innerText = "D";
            break;
        case "f":
            new Audio("pianosound/key04.mp3").play()
            document.getElementById("current-chord").innerText = "F";
            break;
        case "g":
            new Audio("pianosound/key05.mp3").play()
            document.getElementById("current-chord").innerText = "G";
            break;
        case "h":
            new Audio("pianosound/key06.mp3").play()
            document.getElementById("current-chord").innerText = "H";
            break;
        case "j":
            new Audio("pianosound/key07.mp3").play()
            document.getElementById("current-chord").innerText = "J";
            break;
        case "k":
            new Audio("pianosound/key08.mp3").play()
            document.getElementById("current-chord").innerText = "K";
            break;
        case "l":
            new Audio("pianosound/key09.mp3").play()
            document.getElementById("current-chord").innerText = "L";
            break;
        case ";":
            new Audio("pianosound/key10.mp3").play()
            document.getElementById("current-chord").innerText = ";";
            break;
        case "w":
            new Audio("pianosound/key11.mp3").play()
            document.getElementById("current-chord").innerText = "W";
            break;
        case "e":
            new Audio("pianosound/key12.mp3").play()
            document.getElementById("current-chord").innerText = "E";
            break;
        case "t":
            new Audio("pianosound/key13.mp3").play()
            document.getElementById("current-chord").innerText = "T";
            break;
        case "y":
            new Audio("pianosound/key14.mp3").play()
            document.getElementById("current-chord").innerText = "Y";
                break;
        case "u":
            new Audio("pianosound/key15.mp3").play()
            document.getElementById("current-chord").innerText = "U";
                break;
        case "o":
            new Audio("pianosound/key16.mp3").play()
            document.getElementById("current-chord").innerText = "O";
                break;
        case "p":
            new Audio("pianosound/key17.mp3").play()
            document.getElementById("current-chord").innerText = "P";
                break;
    }

})


