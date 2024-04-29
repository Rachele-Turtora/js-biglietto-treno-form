"use strict"

const element = document.getElementById("send")
element.addEventListener("click", function() {

    // Asking km and age
    let km = document.getElementById("inputKm").value
    let age = document.getElementById("inputAge").value

    const priceKm = 0.21;

    if (km.length > 0 && age.length > 0) {

        km = Number(km);
        age = parseInt(age);

        if ((!isNaN(km) && !isNaN(age)) && (km > 0 && age > 0)) {
            
            // Calculating the standard price
            let price = km * priceKm;

            const discountUnder = 20;
            const discountOver = 40;

            // Calculating discount
            if (age < 18) {
                price = (price * (100 - discountUnder)) / 100;
            } else if (age > 65) {
                price = (price * (100 - discountOver)) / 100;
            }

            // Printing the final price
            console.log(`Il prezzo del tuo biglietto è: ${price.toFixed(2)}€`);

        } else {

            console.log(" I km e l'eta devono essere interi maggiori di zero");
        }
        
    } else {

        console.log("Non hai inserito dei valori");

    }
})



