const url = new URLSearchParams(window.location.search);

var tabis = url.get('tabis')

if (tabis == null) {
    tabis = "t1"
}

function openTab(tabs) {
    var i;
    var x = document.getElementsByClassName("content");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(tabs).style.display = "block";
}

function syobonRandomize() {
    const bg = document.getElementById("syobon")
    const rand = Math.floor(Math.random() * 3991)

    bg.style.backgroundPositionX = rand.toString().concat('px');
}

syobonRandomize()
openTab(tabis);
//you are the shortest js ever