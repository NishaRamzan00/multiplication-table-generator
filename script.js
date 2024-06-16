document.getElementById('generateTable').addEventListener('click', function() {
    let userInput = prompt('Please enter a number:');
    let number = parseInt(userInput);

    if (!isNaN(number)) {
        let result = '';
        for (let i = 1; i <= 12; i++) {
            result += `${number} * ${i} = ${number * i}<br>`;
        }
        document.getElementById('output').innerHTML = `Multiplication Table of ${number}:<br>${result}`;
    } else {
        alert('Please enter a valid number');
    }
});


