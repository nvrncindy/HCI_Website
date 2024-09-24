let menu = document.querySelector('.icon');
let nav = document.querySelector('.nav');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    nav.classList.remove('open');
};

const filterButtons = document.querySelectorAll(".filter_buttons button");
const filterableCards = document.querySelectorAll(".filterable_cards .card");

const filterCards = e => {
    const activeButton = document.querySelector(".filter_buttons .active");
    activeButton.classList.remove("active");
    e.target.classList.add("active");

    const filterName = e.target.dataset.name;
    filterableCards.forEach(card => {
        const cardName = card.dataset.name;
        if (filterName === "all" || filterName === cardName) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
};

filterButtons.forEach(button => button.addEventListener("click", filterCards));
