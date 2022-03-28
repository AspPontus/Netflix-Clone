/*const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button
            .closest("[data-carousel]")
            .querySelector("[data-slides]")
            alert("hello")

          
            console.log("click")

    })
}) */

/*
const carouselImages = document.querySelector('.slides');
const carouselButtons = document.querySelectorAll('.nav-btn');
const numberOfImages = document.querySelectorAll('.slides img').length;
let imageIndex = 1;
let translateX = 0;

carouselButtons.forEach(button =>{
    button.addEventListener('click', event => {
        if(event.target.id === 'prev-btn'){
            if(imageIndex !== 1) {
            imageIndex  --;
            translateX += 500; 
            }
        } else {
            if(imageIndex !== numberOfImages) {
                imageIndex++;
                translateX -= 500;
            }
            if(imageIndex < numberOfImages){
                
            }
        }
        carouselImages.style.transform = `translateX(${translateX}px)`;
    });
});
*/


const searchBar = document.querySelector('#search-bar')
const searchIcon = document.querySelector('#search')
let searchBarOpen = false
console.log(searchBarOpen)

function search(){
    searchBar.style.display = 'inline-block'       
}
    
   




const slider = document.querySelector('.slides');
const prev = document.querySelector('#prev-btn');
const next = document.querySelector('#next-btn');

next.addEventListener('click', function() {
    direction = -1;
    slider.style.transform = 'translate(-10.8em)';
});

prev.addEventListener('click', function() {
    direction = 1;
    slider.style.transform = 'translate(10.8em)';
});

slider.addEventListener('transitionend', function() {
    if(direction === -1){
        slider.appendChild(slider.firstElementChild)
    }else if( direction === 1){
slider.prepend(slider.lastElementChild)
    }
    

    slider.style.transition = 'none';
    slider.style.transform = 'translate(0)';
    setTimeout(function(){
        slider.style.transition = 'all 0.5s';
    })
    
})

const slider2 = document.querySelector('.slides-3');
const prev2 = document.querySelector('#prev-btn-3');
const next2 = document.querySelector('#next-btn-3');

next2.addEventListener('click', function() {
    direction = -1;
    slider2.style.transform = 'translate(-10.8em)';
});

prev2.addEventListener('click', function() {
    direction = 1;
    slider2.style.transform = 'translate(10.8em)';
});

slider2.addEventListener('transitionend', function() {
    if(direction === -1){
        slider2.appendChild(slider2.firstElementChild)
    }else if( direction === 1){
slider2.prepend(slider2.lastElementChild)
    }
    

    slider2.style.transition = 'none';
    slider2.style.transform = 'translate(0)';
    setTimeout(function(){
        slider2.style.transition = 'all 0.5s';
    })
    
})

const slider3 = document.querySelector('.slides-2');
const prev3 = document.querySelector('#prev-btn-2');
const next3 = document.querySelector('#next-btn-2');

next3.addEventListener('click', function() {
    direction = -1;
    slider3.style.transform = 'translate(-10.8em)';
});

prev3.addEventListener('click', function() {
    direction = 1;
    slider3.style.transform = 'translate(10.8em)';
});

slider3.addEventListener('transitionend', function() {
    if(direction === -1){
        slider3.appendChild(slider3.firstElementChild)
    }else if( direction === 1){
slider3.prepend(slider3.lastElementChild)
    }
    

    slider3.style.transition = 'none';
    slider3.style.transform = 'translate(0)';
    setTimeout(function(){
        slider3.style.transition = 'all 0.5s';
    })
    
})

const slider4 = document.querySelector('.slides-4');
const prev4 = document.querySelector('#prev-btn-4');
const next4 = document.querySelector('#next-btn-4');

next4.addEventListener('click', function() {
    direction = -1;
    slider4.style.transform = 'translate(-10.8em)';
});

prev4.addEventListener('click', function() {
    direction = 1;
    slider4.style.transform = 'translate(10.8em)';
});

slider4.addEventListener('transitionend', function() {
    if(direction === -1){
        slider4.appendChild(slider4.firstElementChild)
    }else if( direction === 1){
slider4.prepend(slider4.lastElementChild)
    }
    

    slider4.style.transition = 'none';
    slider4.style.transform = 'translate(0)';
    setTimeout(function(){
        slider4.style.transition = 'all 0.5s';
    })
    
})

const slider5 = document.querySelector('.slides-5');
const prev5 = document.querySelector('#prev-btn-5');
const next5 = document.querySelector('#next-btn-5');

next5.addEventListener('click', function() {
    direction = -1;
    slider5.style.transform = 'translate(-10.8em)';
});

prev5.addEventListener('click', function() {
    direction = 1;
    slider5.style.transform = 'translate(10.8em)';
});

slider5.addEventListener('transitionend', function() {
    if(direction === -1){
        slider5.appendChild(slider5.firstElementChild)
    }else if( direction === 1){
slider5.prepend(slider5.lastElementChild)
    }
    

    slider5.style.transition = 'none';
    slider5.style.transform = 'translate(0)';
    setTimeout(function(){
        slider5.style.transition = 'all 0.5s';
    })
    
})

