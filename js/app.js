const generateBtn = document.querySelector("#btn");

generateBtn.addEventListener("click", generatePerson);

async function generatePerson() {
    generateBtn.textContent = "Loading...";
    generateBtn.disabled = true;
    const response = await fetch("https://randomuser.me/api/");
    const person = await response.json();

    loadPersonData(person.results[0]);
    generateBtn.textContent = "generate person";
    generateBtn.disabled = false;
}

function loadPersonData(person) {
    const img = document.querySelector("#photo");
    const name = document.querySelector("#first");
    const last = document.querySelector("#last");
    const country = document.querySelector("#country");
    const phone = document.querySelector("#phone");
    const email = document.querySelector("#email");

    img.src = person.picture.large;
    name.textContent = person.name.first;
    last.textContent = person.name.last;
    country.textContent = person.location.country;
    phone.textContent = person.phone;
    email.textContent = person.email;
}