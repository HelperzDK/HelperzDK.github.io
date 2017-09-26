function openNav() {
    document.getElementById("menu").style.width = "285px";

}

function closeNav() {
    document.getElementById("menu").style.width = "0";
}


var modal = document.getElementById('mod');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
