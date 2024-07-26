const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultDiv = document.getElementById('results-div');

const checkValidNumber = input => {
    if (input === '') {
        alert('Make sure to enter a phone number');
        return;
    }
    const countryCode = '^(1\\s?)?'; //^ the caret symbol makes sure that the match must start at the beginning of the string
    const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})'; //\ backlash character in a string specifiy that the character follow is a literal string, so \(\) is literal string instead of capturing group; {} matches the number of occurence of a preceding element, {3} matches 3 occurences of the [0-9] 
    const spaceDashes = '[\\s\\-]?'; // ? make preceding character optional so [\s\-] : this character class is optional
    const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$'; // $ asserts that the match occurs at the end of the strings;     [\\s\\-] the pattern will match any one of the characters listed inside the square brackets: a space (\\s) or a hyphen (\\-).
    const phoneRegex = new RegExp(`${countryCode}${areaCode}${spaceDashes}${phoneNumber}`);
    

    const resultMessage = document.createElement('p');
    resultMessage.className = 'results-text';
    phoneRegex.test(input)? resultMessage.style.color =  'blue': resultMessage.style.color = 'red';
    resultMessage.innerText = `${phoneRegex.test(input)? 'Valid' : 'Invalid'} US number: ${input}`;
    resultDiv.appendChild(resultMessage);
};


checkBtn.addEventListener('click', ()=> {
    checkValidNumber(userInput.value);
    userInput.value = '';
});

userInput.addEventListener('keydown', e => {
    if (e.key == 'Enter') {
        checkValidNumber(userInput.value);
        userInput.value = '';
    }
});

clearBtn.addEventListener('click', () => {
    resultDiv.textContent ='';
});