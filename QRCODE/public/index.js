let link = document.getElementById("link");
let btn = document.getElementById("btn");
let resetBtn = document.getElementById("resetBtn");
let toDisplay = document.getElementById("qrcode");
let message = document.createElement("p");
message.style.color = "red";
message.style.fontSize = "16px";

btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (link.value.trim() === "") {
        
        message.textContent = "Don't leave empty";
        toDisplay.innerHTML = ""; 
        toDisplay.appendChild(message);
    } else {
       
        getQrCode();
    }
});

async function getQrCode() {
    let response = await fetch(`http://localhost:3000/qr?link=${link.value}`);
    response = await response.json();
    console.log(response);
    
    let img = document.createElement("img");
    img.src = response;

    toDisplay.innerHTML = "";
    
    toDisplay.appendChild(img);
}

resetBtn.addEventListener("click", () => {
    link.value = ""; 
    toDisplay.innerHTML = ""; 
    message.textContent = ""; 
});
