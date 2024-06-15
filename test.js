// Importar la función sum del archivo app.js
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    // Dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // Esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One Euro should be 1.07 Dollars", function() {
    
    const dollars = fromEuroToDollar(3.5);  
    // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07) = (3.745)
    const expected = 3.5 *1.07;
    expect(fromEuroToDollar(3.5)).toBe(expected); 
 })


test ("One Dollar should be 156.5 Yen", function() {
    const Yen = fromDollarToYen(3.5);
    const expected = 3.5 * 156.5;
    expect(Yen).toBe(expected);
})

 test ("One Yen should be 0.87 Pounds ", function () {
    const pounds = fromYenToPound(3.5);
    const expected = 3.5 * 0.87;
    expect(pounds).toBe(expected);
})
