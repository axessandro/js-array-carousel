// Imgs array and html data
const imgs = [
    "img/01.jpg",
    "img/02.jpg",
    "img/03.jpg",
    "img/04.jpg",
    "img/05.jpg"
];
const dwnBtn = document.querySelector(".dwn-btn");
const upBtn = document.querySelector(".up-btn");
const slider = document.querySelector(".ms_slider");

// Read array witch cycle
for (let i = 0; i < imgs.length; i++){
    const thisImg =imgs[i];
    const img = `
        <div class="ms_item">
            <img src="${thisImg}" alt="">
        </div>`;
    slider.innerHTML += img;
}

// Start status
const items = document.getElementsByClassName("ms_item");
let sliderPosition = 0;
items[sliderPosition].classList.add("active");

// Navigation
// dwnBtn at click
dwnBtn.addEventListener("click", function(){
    if (sliderPosition < imgs.length -1) {
        // Remove .active to sliderPosition
        items[sliderPosition].classList.remove("active");
        // sliderPosition + 1
        sliderPosition++;
        // Add .active to next sliderPosiiton
        items[sliderPosition].classList.add("active");
    } 
})

// upBtn at click
upBtn.addEventListener("click", function(){
    if (sliderPosition > 0) {
        // Remove .active to sliderPosition
        items[sliderPosition].classList.remove("active");
        // sliderPosition - 1
        sliderPosition--;
        // Add .active to next sliderPosiiton
        items[sliderPosition].classList.add("active");
    } 
    
})