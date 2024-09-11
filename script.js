const tempInput = document.querySelector('#temperature');
const tempType = document.querySelector('#temperatureType');
const result = document.querySelector('#result');
const btn = document.querySelector('#submitBtn');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    const temp = Number(tempInput.value);
    const type = tempType.value;
    const celsius = (temp - 32) * 5 / 9;
    const fahrenheit = (temp * 9 / 5) + 32;
    const kelvin = temp + 273.15;
    if (type === 'celsius') {
        result.innerHTML = `${temp}°C = ${celsius.toFixed(2)}°F = ${kelvin.toFixed(2)}K`;
    } else if (type === 'fahrenheit') {
        result.innerHTML = `${temp}°F = ${fahrenheit.toFixed(2)}°C = ${kelvin.toFixed(2)}K`;
    } else {
        result.innerHTML = `${temp}K = ${kelvin.toFixed(2)}°C = ${fahrenheit.toFixed(2)}°F`;
    }
});
