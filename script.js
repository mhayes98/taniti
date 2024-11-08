const search = document.querySelector(".search");
search.addEventListener("click", () => {
    navToggle();
    buttonToggle();
})

function navToggle(){
    const search_bar = document.querySelector("#search-wrapper");
    const nav_bar_links = document.querySelector("#header-nav-bar-links");

    search_bar.style.display = search_bar.style.display == "none" ? "flex" : "none";
    nav_bar_links.style.display = search_bar.style.display == "none" ? "flex" : "none";
}

function buttonToggle(){
    const search_icon = document.querySelector(".fa-search.rs");
    const close_icon = document.querySelector(".fa-close.rs");

    search_icon.style.display = search_icon.style.display == "none" ? "flex" : "none";
    close_icon.style.display = close_icon.style.display == "none" ? "flex" : "none";
}

// Idea for mobile compat : when hamburger present --> hide 'Taniti' h1 (when searching)