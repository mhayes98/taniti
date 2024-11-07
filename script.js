const search_icon = document.querySelector("#search-icon");
search_icon.addEventListener("click", () => {
    const search_container = document.createElement("div");
    const header = document.querySelector(".header-nav");
    const search_bar = document.createElement("form");
    const search_input = document.createElement("input");
    search_input.placeholder = "Search...";

    search_container.appendChild(search_bar);
    search_bar.appendChild(search_input);

    search_container.classList.add("search_container");
    header.appendChild(search_container);
})

