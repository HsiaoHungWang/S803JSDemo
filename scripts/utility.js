const celsius_to_fahrenheit = celsius => celsius * (9 / 5) + 32;

const fahrenheit_to_celsius = fahrenheit => (fahrenheit - 32) * 5 / 9;

//純函式
const tempatureConvert = (degree, type) => {
    let degreeConvert;
    if (type === 'C') {
        degreeConvert = degree * (9 / 5) + 32;
    } else {
        degreeConvert = (degree - 32) * 5 / 9;
    }
    return degreeConvert;
}

const PI = 3.1415;

export default tempatureConvert;
export { celsius_to_fahrenheit, PI };


