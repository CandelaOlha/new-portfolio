const credits = document.querySelector(".credits");

const date = new Date();
let year = date.getFullYear();

credits.textContent = `© ${year} Candela Olha`;
