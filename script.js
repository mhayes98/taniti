const search = document.querySelector(".search");
search.addEventListener("click", () => {
    navToggle();
    buttonToggle(); 
})

function navToggle(){
    const search_bar = document.querySelector("#search-wrapper");
    const nav_bar_links = document.querySelector("#header-nav-bar-links");

    // Adds class to toggle slide-in vs slide-out animation
    if(search_bar.style.display == "flex"){
        search_bar.classList.add("hide-animation");
        search_bar.classList.remove("show-animation");
        setTimeout(() => {
            search_bar.style.display = "none";
        }, 200);
    }
    else{
        search_bar.classList.remove("hide-animation");
        search_bar.classList.add("show-animation");
        search_bar.style.display = "flex";
    }
    
    // Adds class to toggle fade-in animation (post slide-out above)
    if(nav_bar_links.style.display == "none"){
        setTimeout(() => {
            nav_bar_links.classList.add("fade-in");
            nav_bar_links.style.display = "flex";
        }, 250);
    }
    else{
        nav_bar_links.style.display = "none";
        nav_bar_links.classList.remove("fade-in");
    }
}

function buttonToggle(){
    const search_icon = document.querySelector(".fa-search.rs");
    const close_icon = document.querySelector(".fa-close.rs");

    search_icon.style.display = search_icon.style.display == "none" ? "flex" : "none";
    close_icon.style.display = close_icon.style.display == "none" ? "flex" : "none";
}

// Idea for mobile compat : when hamburger present --> hide 'Taniti' h1 (when searching)

