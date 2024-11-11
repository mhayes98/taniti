// Toggles middle search bar & adjusts buttons
const search = document.querySelector(".search");
search.addEventListener("click", () => {
    navToggleFromRightSearch();
    showButtonsInToggledLeftSearchBar();
})

// Enables closing animation from middle search bars exit button
const inner_close = document.querySelector('button[type="close-search"]');
inner_close.addEventListener("click", () => {
    event.preventDefault();
    navToggleFromRightSearch();
    showButtonsInToggledLeftSearchBar();
})

function navToggleFromRightSearch(){
    const search_bar_wrapper = document.querySelector("#search-wrapper");
    const nav_bar_links = document.querySelector("#header-nav-bar-links");

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
    if(nav_bar_links.style.display == "none"){
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

function showButtonsInToggledLeftSearchBar(){
    const search_icon = document.querySelector(".fa-search.rs");
    const close_icon = document.querySelector(".fa-close.rs");

    search_icon.style.display = search_icon.style.display == "none" ? "flex" : "none";
    close_icon.style.display = close_icon.style.display == "none" ? "flex" : "none";
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

// Idea for mobile compat : when hamburger present --> hide 'Taniti' h1 when searching
