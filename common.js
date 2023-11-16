export const commonFunction = {
    // Convert Numbers to words
    // const singleDigits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    // const twoDigits = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    // const tensMultiple = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    // const tensPower = ['', 'thousand', 'million', 'billion', 'trillion'];

    convertNumberToWords: (num) => {
        try {
            if (isNaN(num) || !Number.isInteger(num) || num < 0) {
                throw new Error('Input must be a non-negative integer.');
            }

            if (num === 0) {
                return 'zero';
            }

            let words = '';
            let i = 0;

            while (num > 0) {
                if (num % 1000 !== 0) {
                    words = helper(num % 1000) + ' ' + tensPower[i] + ' ' + words;
                }
                num = Math.floor(num / 1000);
                i++;
            }

            return words.trim();
        } catch (error) {
            console.error(`Error in convertNumberToWords: ${error.message}`);
            return null;
        }
    },

    helper: (num) => {
        let temp = '';

        if (num % 100 < 10) {
            temp = singleDigits[num % 100];
            num = Math.floor(num / 100);
        } else if (num % 100 < 20) {
            temp = twoDigits[num % 10];
            num = Math.floor(num / 10);
        } else {
            temp = singleDigits[num % 10];
            num = Math.floor(num / 10);

            temp = tensMultiple[num % 10] + ' ' + temp;
            num = Math.floor(num / 10);
        }

        if (num === 0) {
            return temp;
        }

        return singleDigits[num] + ' hundred ' + temp;
    },
    // Example
    // const number = 123;
    // console.log(convertNumberToWords(number));

    // CURENCY CAMA SEPARATION
    addCommasToNumber: (num) => {
        try {
            // Convert to string and add commas
            const numberWithCommas = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            return numberWithCommas;
        } catch (error) {
            console.error(`Error in addCommasToNumber: ${error.message}`);
            return null;
        }
    },
    // Example
    // const numberWithCommas = addCommasToNumber(10000);
    // console.log(numberWithCommas);

    // PERCENTAGE CALCULATOR
    calculatePercentage: (value, total) => {
        try {
            if (typeof value !== 'number' || typeof total !== 'number') {
                throw new Error('Both value and total must be numbers');
            }

            if (total === 0) {
                throw new Error('Total cannot be zero to avoid division by zero');
            }

            return (value / total) * 100;
        } catch (error) {
            console.error(`Error in calculatePercentage: ${error.message}`);
            return null;
        }
    },
    // Example
    // const value = 75;
    // const total = 100;
    // const percentage = calculatePercentage(value, total);

    // if (percentage !== null) {
    //     console.log(`The percentage is: ${percentage}%`);
    // } else {
    //     console.log('Failed to calculate percentage');
    // }

    // Calculating value using percentage
    calculateValueFromPercentage: (total, percentage) => {
        try {
            if (typeof total !== 'number' || typeof percentage !== 'number') {
                throw new Error('Both total and percentage must be numbers');
            }

            return (percentage / 100) * total;
        } catch (error) {
            console.error(`Error in calculateValueFromPercentage: ${error.message}`);
            return null;
        }
    },
    // Example
    // const totalValue = 200;
    // const percentageValue = 25;
    // const calculatedValue = calculateValueFromPercentage(totalValue, percentageValue);
    // console.log(`The value corresponding to ${percentageValue}% of ${totalValue} is: ${calculatedValue}`);

    // Hertz colour to rgb colour
    hertzToRgb: (hertzColor) => {
        try {
            if (typeof hertzColor !== 'string') {
                throw new Error('Input must be a string');
            }

            let hex = hertzColor.replace("#", "");
            if (!/^[0-9A-Fa-f]{6}$/i.test(hex)) {
                throw new Error('Invalid hex color format');
            }

            let r = parseInt(hex.substring(0, 2), 16);
            let g = parseInt(hex.substring(2, 4), 16);
            let b = parseInt(hex.substring(4, 6), 16);

            return `rgb(${r}, ${g}, ${b})`;
        } catch (error) {
            console.error(`Error in hertzToRgb: ${error.message}`);
            return null;
        }
    },
    // Example
    // const hertzColor = "#ff4500";
    // const rgbColor = hertzToRgb(hertzColor);
    // console.log(rgbColor);

    //   Scroll to top or based on  id
    scrollToElementById: (id) => {
        try {
            if (typeof id !== 'string') {
                throw new Error('Input must be a string');
            }

            const element = document.getElementById(id);

            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth'
                });
            } else {
                throw new Error(`Element with ID '${id}' not found`);
            }
        } catch (error) {
            console.error(`Error in scrollToElementById: ${error.message}`);
        }
    },
    // Example
    // scrollToElementById('yourElementId');

    //   Scroll to top or based on  classname
    scrollToElementByClass: (className) => {
        try {
            if (typeof className !== 'string') {
                throw new Error('Input must be a string');
            }

            const element = document.querySelector(`.${className}`);

            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth'
                });
            } else {
                throw new Error(`Element with class '${className}' not found`);
            }
        } catch (error) {
            console.error(`Error in scrollToElementByClass: ${error.message}`);
        }
    },
    // Example
    // scrollToElementById('yourclassName');

    // Regex email validation
    validateEmail: (email) => {
        try {
            if (typeof email !== 'string') {
                throw new Error('Email must be a string');
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        } catch (error) {
            console.error(`Error in validateEmail: ${error.message}`);
            return null;
        }
    },
    // Example
    // const email1 = "test@example.com";
    // const email2 = "invalid.email";
    // console.log(validateEmail(email1));
    // console.log(validateEmail(email2));

    // Dot truncate for large paragraph
    truncateText: (text, maxLength) => {
        try {
            if (typeof text !== 'string' || typeof maxLength !== 'number') {
                throw new Error('Input types are not valid');
            }

            if (text.length <= maxLength) {
                return text;
            }

            const truncated = text.substr(0, maxLength);
            const lastSpace = truncated.lastIndexOf(' ');

            if (lastSpace === -1) {
                return truncated + '...';
            }

            return truncated.substr(0, lastSpace) + '...';
        } catch (error) {
            console.error(`Error in truncateText: ${error.message}`);
            return null;
        }
    },
    // Example
    // const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    // const maxLength = 50;
    // const truncated = truncateText(longText, maxLength);
    // console.log(truncated)

    // UUID Generation
    generateUUID: () => {
        try {
            const { v4: uuidv4 } = require('uuid');
            const uuid = uuidv4();
            return uuid;
        } catch (error) {
            console.error(`Error in generateUUID: ${error.message}`);
            return null;
        }
    },
    // Example
    // const generatedUUID = generateUUID();
    // console.log(generatedUUID);

    // Generate random text with numbers
    generateRandomTextWithNumber: (length) => {
        try {
            if (typeof length !== 'number' || length <= 0) {
                throw new Error('Input must be a positive number');
            }

            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            let randomText = '';

            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * characters.length);
                randomText += characters.charAt(randomIndex);
            }

            return randomText;
        } catch (error) {
            console.error(`Error in generateRandomText: ${error.message}`);
            return null;
        }
    },
    // Example
    // const randomText = generateRandomTextWithNumber(10);
    // console.log(randomText);

    // Random number generation
    getRandomNumber: (min, max) => {
        try {
            if (typeof min !== 'number' || typeof max !== 'number' || min >= max) {
                throw new Error('Invalid input. min and max must be numbers, and min must be less than max.');
            }

            return Math.floor(Math.random() * (max - min + 1)) + min;
        } catch (error) {
            console.error(`Error in getRandomNumber: ${error.message}`);
            return null;
        }
    },
    // Example
    // const min = 1;
    // const max = 100;
    // const randomNumber = getRandomNumber(min, max);
    // console.log(randomNumber);

    // Random color generation
    getRandomColor: () => {
        try {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                const randomIndex = Math.floor(Math.random() * 16);
                color += letters[randomIndex];
            }
            return color;
        } catch (error) {
            console.error(`Error in getRandomColor: ${error.message}`);
            return null;
        }
    },
    // Example
    // const randomColor = getRandomColor();
    // console.log(randomColor);

    // Country code and flag
    getCountryCodeAndFlag: (countryCode) => {
        try {
            // Check if the input is a non-empty string
            if (typeof countryCode !== 'string' || countryCode.trim() === '') {
                throw new Error('Country code must be a non-empty string');
            }

            const codeToUpper = countryCode.toUpperCase();
            const codeToFlag = countryCode
                .toUpperCase()
                .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397));

            return { code: codeToUpper, flag: codeToFlag };
        } catch (error) {
            // Handle and log errors
            console.error(`Error in getCountryCodeAndFlag: ${error.message}`);
            return null;
        }
    },
    // Example
    // const countryData = getCountryCodeAndFlag('in');
    // if (countryData) {
    //     console.log(countryData.code);
    //     console.log(countryData.flag);
    // }

    // Promise.all Settled filter success and failure results
    promiseAllSettledFilter: (promises) => {
        try {
            if (!Array.isArray(promises)) {
                throw new Error('Input must be an array of promises');
            }

            const results = Promise.allSettled(promises);
            const successfulPromises = [];
            const failedPromises = [];

            results.forEach((result, index) => {
                if (result.status === 'fulfilled') {
                    successfulPromises.push({ index, value: result.value });
                } else {
                    failedPromises.push({ index, reason: result.reason });
                }
            });

            return { successfulPromises, failedPromises };
        } catch (error) {
            console.error(`Error in promiseAllSettledFilter: ${error.message}`);
            return null;
        }
    },
    // Example:
    // const promises = [Promise.resolve(1), Promise.reject('Error'), Promise.resolve(3)];

    // promiseAllSettledFilter(promises).then((result) => {
    //     console.log('Successful Promises:', result.successfulPromises);
    //     console.log('Failed Promises:', result.failedPromises);
    // });

    // Case converions
    convertCase: (inputString, caseType) => {
        if (typeof inputString !== 'string') {
            throw new Error('Input must be a string');
        }

        switch (caseType.toLowerCase()) {
            case 'lowercase':
                return inputString.toLowerCase();
            case 'uppercase':
                return inputString.toUpperCase();
            case 'titlecase':
                return inputString
                    .toLowerCase()
                    .replace(/(?:^|\s)\S/g, match => match.toUpperCase());
            case 'sentencecase':
                return inputString
                    .toLowerCase()
                    .replace(/^.|\.\s*\w/g, match => match.toUpperCase());
            default:
                throw new Error('Invalid case type');
        }
    },
    // Example
    // const inputText = "hello world! This is an example.";
    // console.log("Lowercase:", convertCase(inputText, 'lowercase'));
    // console.log("Uppercase:", convertCase(inputText, 'uppercase'));
    // console.log("Title Case:", convertCase(inputText, 'titlecase'));
    // console.log("Sentence Case:", convertCase(inputText, 'sentencecase'));
}