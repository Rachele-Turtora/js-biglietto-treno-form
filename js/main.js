"use strict"

const element = document.getElementById("send");
element.addEventListener("click", function(event) {
    event.preventDefault();

    // Asking name, km and age
    let name = document.getElementById("userName").value;
    let km = document.getElementById("userKm").value;
    let age = document.getElementById("userAge").value;

    const priceKm = 0.21;

    if (name.length > 0 && km.length > 0) {

        km = Number(km);

        if ((!isNaN(km) && isNaN(name)) && km > 0 ) {

            let ticketName = document.querySelector(".ticket-name");
            let ticketCab = document.querySelector(".ticket-cab");
            let ticketCp = document.querySelector(".ticket-cp");
            let ticketPrice = document.querySelector(".ticket-price");
            let ticketOffer = document.querySelector(".ticket-offer");
            
            // Calculating the standard price
            let price = km * priceKm;

            const discountUnder = 20;
            const discountOver = 40;

            // Calculating discount
            if (age === "minorenne") {
                price = (price * (100 - discountUnder)) / 100;
                ticketOffer.innerHTML = "Offerta minorenni"
            } else if (age === "over-65") {
                price = (price * (100 - discountOver)) / 100;
                ticketOffer.innerHTML = "Offerta over-65"
            } else {
                ticketOffer.innerHTML = "Offerta standard"
            }

            price = price.toFixed(2);

            // Printing the ticket
            ticketName.innerHTML = name
            ticketCab.innerHTML = Math.ceil(Math.random() * 9);
            ticketCp.innerHTML = Math.ceil(Math.random() * 150) + 1000;
            ticketPrice.innerHTML = price + "€";

            document.getElementById("ticket").classList.remove("d-none");
            document.getElementById("ticket").classList.add("d-block");

        } else {

            console.log("Il nome deve essere una stringa, i km devono essere valori maggiori di 0");
        }
        
    } else {

        console.log("Mancano dei valori nei campi di input");

    }
})

const removeElement = document.getElementById("cancel");
removeElement.addEventListener("click", function() {
    document.getElementById("form").reset();
    document.getElementById("ticket").classList.remove("d-block");
    document.getElementById("ticket").classList.add("d-none");
})



