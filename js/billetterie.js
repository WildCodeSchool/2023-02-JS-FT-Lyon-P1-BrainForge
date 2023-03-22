// Début du Script Billeterie (flip card)

const card1Night = document.getElementById("card1night")
const card2Night = document.getElementById("card2night")
const cardAllInclusive = document.getElementById("card-all-inclusive")

const cardClassName = "card"

let cards = document.getElementsByClassName(cardClassName)
for (let i = 0; i < cards.length; i++) {
    let item = cards[i]
    item.addEventListener('click', flipCard)
}

function flipCard(e) {
    let card = e.currentTarget

    console.log(card.id)
    let class_name = "flipCardRight"
    switch (card.id) {
        case "":
            class_name = "flipCardLeft"
            break
    }

    card.classList.toggle("flipCard")
}

// Fin du script billeterie Flip Card

// Début du script du formulaire 

const firstName = document.getElementById('firstname')
const lastName = document.getElementById('lastname')
const mail = document.getElementById('email')
const selectOption = document.getElementById('option-select')

// const optionField = document.querySelector('#option-field')
// const firstnameField = document.querySelector('#firstname-field')
// const lastnameField = document.querySelector('#lastname-field')
// const emailField = document.querySelector('#email-field')

const ticketSlide = document.getElementById('ticket');
const optionForm = document.getElementById("option-form")

optionForm.addEventListener("submit", function (event) {
    event.preventDefault();
    
    if (selectOption.value == "") {
        alert("Oups! Tu n'as pas choisi ta formule!")
    }
    
    else {
        document.getElementById("firstname-field").innerText = `Prénom : ${firstName.value}`;
        document.getElementById("lastname-field").innerText = `Nom : ${lastName.value}`;
        document.getElementById("email-field").innerText = `Mail : ${mail.value}`;
        document.getElementById("option-field").innerText = selectOption.value;
        ticketSlide.classList.toggle('is-active');
    }
})

//  Début du script ticket
/*
const returnButton = document.getElementById('icon-left-arrow')

returnButton.addEventListener("click", function () {
    window.open('billetterie.html', '_blank');
})


*/


