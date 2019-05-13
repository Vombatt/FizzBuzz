function init() {
    let numbers = '';
    for (let i = 1; i <= 100; i++) {
        numbers += `<div>${getElementValue(i)}</div>`
    }
    document.querySelector('.container').insertAdjacentHTML('afterbegin', numbers)
}

function getElementValue(rawValue) {
    switch (true) {
        case rawValue % 5 === 0 && rawValue % 3 === 0:
            return 'FizzBuzz';
        case rawValue % 3 === 0:
            return 'Fizz';
        case rawValue % 5 === 0:
            return 'Buzz';
        default: 
            return rawValue;
    }
}