// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}
// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
module.exports = { sum };


let oneEuroIs = {
    "JPY": 156.5, // Japan Yen
    "USD": 1.07, // US Dollar
    "GBP": 0.87, // British Pound
}

// Declaramos una función descriptiva "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor de Euro a Dollar
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    // Retornamos el valor en dólares
    return valueInDollar;
}

// Declaramos una función descriptiva "fromDollarToYen"
const fromDollarToYen = (valueInDollar) => {
    // Convertimos el valor de Dollar a Yen
    let valueInYen =  valueInDollar * oneEuroIs.JPY;
    // Retornamos el valor en Yen
    return valueInYen;
}
    // Declaramos una función descriptiva "fromYenToPound"
const fromYenToPound = (valueInYen) => {
    // Convertimos el valor de Yen a Pound
    let valueInPound = valueInYen * oneEuroIs.GBP;
    // Retornamos el valor en Pound
    return valueInPound;
}

// Exporta la función para usarla en otros archivos (test.js)
module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};