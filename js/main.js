"use strict"

const generateTicket = document.getElementById("form");
generateTicket.addEventListener("submit", function(event) {
    event.preventDefault();

    // Asking name, km and age
    const name = document.getElementById("user-name").value;
    let km = document.getElementById("user-km").value;
    const age = document.getElementById("user-age").value;

    const priceKm = 0.21;

    if (name.length > 0 && km.length > 0) {

        km = Number(km);

        if (isNaN(name) && km > 0 ) {

            const ticketName = document.querySelector(".ticket-name");
            const ticketCab = document.querySelector(".ticket-cab");
            const ticketCp = document.querySelector(".ticket-cp");
            const ticketPrice = document.querySelector(".ticket-price");
            const ticketOffer = document.querySelector(".ticket-offer");
            
            // Calculating the standard price
            let price = km * priceKm;

            const discountUnder = 20;
            const discountOver = 40;

            // Calculating discount
            if (age === "under") {
                price = (price * (100 - discountUnder)) / 100;
                ticketOffer.innerHTML = "Offerta minorenni"
            } else if (age === "over") {
                price = (price * (100 - discountOver)) / 100;
                ticketOffer.innerHTML = "Offerta over-65"
            } else {
                ticketOffer.innerHTML = "Offerta standard"
            }

            price = price.toFixed(2);

            // Printing the ticket
            ticketName.innerHTML = name[0].toUpperCase() + name.substring(1);
            ticketCab.innerHTML = Math.ceil(Math.random() * 9);
            ticketCp.innerHTML = Math.ceil(Math.random() * 150) + 1000;
            ticketPrice.innerHTML = price + "€";

            document.getElementById("ticket").classList.remove("d-none");

        } else {

            console.log("Il nome deve essere una stringa, i km devono essere valori maggiori di 0");
        }
        
    } else {

        console.log("Mancano dei valori nei campi di input");

    }
})

const removeElement = document.getElementById("cancel");
removeElement.addEventListener("click", function() {
    document.getElementById("ticket").classList.add("d-none");
})



