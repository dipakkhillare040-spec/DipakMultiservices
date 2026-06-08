function closePopup(){
    document.getElementById("popup").style.display = "none";
}

const darkBtn = document.getElementById("darkBtn");

darkBtn.onclick = () => {
    document.body.classList.toggle("dark");
};