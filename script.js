// Toggles middle search bar & adjusts buttons
const search = document.querySelector(".search");
search.addEventListener("click", () => {
    navToggleFromRightSearch();
    showButtonsInLeftSearchBar();
    enableHeaderSplash();
})
// Enables closing animation from middle search bars exit button
const inner_close = document.querySelector('button[type="close-search"]');
inner_close.addEventListener("click", () => {
    event.preventDefault();
    navToggleFromRightSearch();
    showButtonsInLeftSearchBar();
    enableHeaderSplash();
})

function navToggleFromRightSearch(){
    const search_bar_wrapper = document.querySelector("#search-wrapper");
    const nav_bar_links = document.querySelector("#header-nav-bar-links");
    const burger_menu = document.querySelector(".burger-menu")

    // Adds class to toggle slide-in vs slide-out animation
    if(search_bar_wrapper.style.display == "flex"){
        search_bar_wrapper.classList.add("hide-animation");
        search_bar_wrapper.classList.remove("show-animation");
        setTimeout(() => {
            search_bar_wrapper.style.display = "none";
        }, 200);
    }
    else{
        
        search_bar_wrapper.classList.remove("hide-animation");
        search_bar_wrapper.classList.add("show-animation");
        search_bar_wrapper.style.display = "flex";
    }
    
    // Adds class to toggle fade-in animation (post slide-out above)
    if((nav_bar_links.style.display == "none")  && (window.getComputedStyle(burger_menu).display == "none")){
        nav_bar_links.classList.add("fade-in");
        setTimeout(() => {
            nav_bar_links.style.display = "flex";
        }, 200);
    }
    else{
        nav_bar_links.style.display = "none";
        nav_bar_links.classList.remove("fade-in");
    }
}
function showButtonsInLeftSearchBar(){
    const search_icon = document.querySelector(".fa-search.rs");
    const close_icon = document.querySelector(".fa-close.rs");

    search_icon.style.display = search_icon.style.display == "none" ? "flex" : "none";
    close_icon.style.display = close_icon.style.display == "none" ? "flex" : "none";
}
function enableHeaderSplash(){
    const header_splash = document.querySelector("#header-splash");
    if((window.getComputedStyle(burger_menu).display == "flex") && (window.innerWidth < 600)){
        if(header_splash.textContent == "."){
            setTimeout(() => {
                header_splash.textContent = "Taniti";
                header_splash.style.visibility = "visible";
            }, 200)
        }
        else{
            header_splash.textContent = ".";
            header_splash.style.visibility = "hidden";
        }
    }
    else{
        header_splash.textContent = "Taniti";
    }
}


// Enable & disable border on search bar focus 
const search_bar_input = document.querySelector("#search-bar-input");
const search_bar = document.querySelector(".search-bar");
search_bar_input.addEventListener("focus", () => {
    search_bar.classList.add("focused");
});
search_bar_input.addEventListener("blur", () => {
    search_bar.classList.remove("focused");
});


const burger_menu = document.querySelector(".burger-menu")
burger_menu.addEventListener("click", () => { 
    const burger_wrapper = document.querySelector(".burger-wrapper");
    if(burger_wrapper.style.width != "200px"){
        expandHamburgerMenu(burger_wrapper);
}
    else{
        closeHamburgerMenu(burger_wrapper);
    }
});
function expandHamburgerMenu(burger_wrapper){
    burger_wrapper.style.width = "200px";
    burger_menu.style.zIndex = "1";
    burger_menu.style.color = "white";
}
function closeHamburgerMenu(burger_wrapper){
    burger_wrapper.style.width = "0px";
    burger_menu.style.zIndex = "0";
    burger_menu.style.color = "black";
}

var max_size = window.matchMedia("(max-width: 1000px)")
function toggleNavBarByScreenSize(max_size) {
    const nav_bar_links = document.querySelector("#header-nav-bar-links");
    if (max_size.matches){
        nav_bar_links.style.display = "none";
    }
    else {
        nav_bar_links.style.display = "flex";
    }
}
toggleNavBarByScreenSize(max_size);
max_size.addEventListener("change", function() {
    toggleNavBarByScreenSize(max_size);
})


class Slideshow{
    constructor(container){
        this.container = container;
        this.slides = container.getElementsByClassName("slides");
        this.dots = container.getElementsByClassName("dot");
        this.current_slide = 0;
        this.navigateSlideShow(this.current_slide);
    }

    // Retrieves current slide from HTML
    setCurrentSlide(slide_num){
        slide_num -= 1;
        this.current_slide = slide_num;
        this.toggleSlideImage(slide_num);
    }

    // Progresses slideshow, loops back to the start or end when necessary
    navigateSlideShow(step) {
        this.current_slide += step;
        let max_length = this.slides.length - 1;
        if(this.current_slide > max_length){this.current_slide = 0;}
        if(this.current_slide < 0){this.current_slide = max_length;}
        this.toggleSlideImage(this.current_slide);
    }

    // Toggles dot style & image display for all slides per run
    toggleSlideImage(slide_num){
        for (let slide of this.slides){
            slide.style.display = "none";
        }
        for (let dot of this.dots){
            dot.className = dot.className.replace(" active", "");
        }
        this.slides[slide_num].style.display = "block";
        if (this.dots.length > 0){
            this.dots[slide_num].className += " active";
        }
    }
}

const slideshows = []
document.querySelectorAll(".slideshow").forEach((container) => {
    slideshows.push(new Slideshow(container));
});

console.log(slideshows.length);