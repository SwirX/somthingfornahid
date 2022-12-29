const candle = document.querySelector(".candle");
const flame = document.querySelector('.flame');
const fireworks = document.getElementsByClassName('firework');
const help = document.getElementById('help');

setInterval(() => {
    help.classList.remove('hidden');
}, 5000);

function run() {
    flame.style.display = "none";
    for (i = 0; i < fireworks.length; i++) {
        fireworks[i].classList.remove('hidden');
    }
}

candle.addEventListener("click", function () {
    flame.style.transition = '2s';
    flame.style.width = '0';
    flame.style.height = '0';
    flame.style.top = "5px"
    flame.style.left = "15px";
    help.style.display = "none";
    setInterval(run, 2015);
})

document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector("#loader").style.visibility = "visible";
    } else {
        setInterval(() => {
            document.querySelector("#loader").style.display = "none";
            document.querySelector("body").style.visibility = "visible";
        }, 2500)
    }
};