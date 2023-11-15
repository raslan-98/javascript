// SECONDS TO MINUTES
function secondsToMinutes(seconds) {
    try {
        const secondsNumber = Number(seconds);
        if (isNaN(secondsNumber)) {
            throw new Error('Input must be a valid number');
        }

        let minutes = secondsNumber / 60;
        return minutes;
    } catch (error) {
        console.error(`Error in secondsToMinutes: ${error.message}`);
        return null;
    }
}

// Example
const result = secondsToMinutes('150');
console.log(result);



// MINUTES TO HOURS
function minutesToHours(minutes) {
    try {
        const minutesNumber = Number(minutes);
        if (isNaN(minutesNumber)) {
            throw new Error('Invalid input. Please provide a valid number for minutes.');
        }

        let hours = minutes / 60;
        return hours;
    } catch (error) {
        console.error(error.message);
        return null;
    }
}

// Example
const result1 = minutesToHours(150);
console.log(result1);

// HOURS TO DAYS
function hoursToDays(hours) {
    try {
        const hoursNumber = Number(hours);
        if (isNaN(hoursNumber)) {
            throw new Error("Input is not a valid number.");
        }

        let days = hours / 24;
        return days;
    } catch (error) {
        console.error("Error in hoursToDays function:", error.message);
        return null;
    }
}

// Example
const result2 = hoursToDays(48);
console.log(result2);

// DAYS TO WEEKS
function daysToWeeks(days) {
    try {

        const daysNumber = Number(days);
        if (isNaN(daysNumber)) {
            throw new Error('Input must be a valid number');
        }
        const weeks = daysNumber / 7;
        return weeks;
    } catch (error) {
        console.error(`Error in daysToWeeks: ${error.message}`);
        return null;
    }
}

// Example
const weeks = daysToWeeks(14);
console.log(weeks);

// DAYS TO MONTHS
function daysToMonths(days) {
    try {
        const daysAsNumber = Number(days);

        if (isNaN(daysAsNumber)) {
            throw new Error('Input must be a valid number');
        }

        const months = daysAsNumber / 30;
        return months;
    } catch (error) {
        console.error('An error occurred:', error.message);
        return null;
    }
}

// Example
const months = daysToMonths('60');
console.log(months);


// DAYS TO YEARS
function daysToYears(days) {
    try {
        const numericDays = Number(days);
        if (isNaN(numericDays)) {
            throw new Error('Input must be a number');
        }

        const years = numericDays / 365;
        return years;
    } catch (error) {
        console.error(`Error in daysToYears: ${error.message}`);
        return null;
    }
}

// Example
const years = daysToYears('730');
console.log(years);

// Difference between two days
function dateDiffInDays(date1, date2) {
    try {
        if (!(date1 instanceof Date) || !(date2 instanceof Date)) {
            throw new Error('Invalid date format. Please provide valid Date objects.');
        }

        const diffTime = Math.abs(date2.getTime() - date1.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    } catch (error) {
        console.error(`Error in dateDiffInDays: ${error.message}`);
        return null;
    }
}

// Example
const date1 = new Date('2023-10-20');
const date2 = new Date('2023-10-25');
const diff = dateDiffInDays(date1, date2);
console.log(diff);

// Difference between two days excluding non-business days
function getWeekdayCount(startDate, endDate) {
    try {
        let count = 0;
        const currentDate = new Date(startDate);
        const endDateObj = new Date(endDate);

        while (currentDate <= endDateObj) {
            const day = currentDate.getDay();
            if (day !== 0 && day !== 6) {
                count++;
            }
            currentDate.setDate(currentDate.getDate() + 1);
        }

        return count;
    } catch (error) {
        console.error(`Error in getWeekdayCount: ${error.message}`);
        return null;
    }
}

// Example
const startDate = new Date('2023-10-20');
const endDate = new Date('2023-10-25');
const weekdayCount = getWeekdayCount(startDate, endDate);
console.log(weekdayCount);

// Number of the week for a given date
function getWeekNumber(date) {
    try {
        // Check if the input is a valid date object
        if (!(date instanceof Date) || isNaN(date)) {
            throw new Error('Invalid date object');
        }

        // Calculate the week number
        const onejan = new Date(date.getFullYear(), 0, 1);
        const weekNumber = Math.ceil(((date - onejan) / 86400000 + onejan.getDay() + 1) / 7);

        return weekNumber;
    } catch (error) {
        // Handle and log errors
        console.error(`Error in getWeekNumber: ${error.message}`);
        return null;
    }
}

// Example
const date4 = new Date('2023-10-25');
const weekNumber = getWeekNumber(date4);
console.log(weekNumber);

// Get Days of week
function getDaysOfWeek(date) {
    try {
        if (!(date instanceof Date) || isNaN(date)) {
            throw new Error('Invalid date object');
        }
        const startDate = new Date(date);
        startDate.setDate(date.getDate() - date.getDay());
        const daysOfWeek = [];
        for (let i = 0; i < 7; i++) {
            const currentDate = new Date(startDate);
            currentDate.setDate(startDate.getDate() + i);
            daysOfWeek.push(currentDate);
        }

        return daysOfWeek;
    } catch (error) {
        // Handle and log errors
        console.error(`Error in getDaysOfWeek: ${error.message}`);
        return null;
    }
}

// Example: Get the days of the week for the current date
const currentDate1 = new Date();
const weekDays = getDaysOfWeek(currentDate1);

// Log the days of the week
if (weekDays) {
    weekDays.forEach(day => {
        console.log(day.toDateString());
    });
}


// DATE BASED DAY RETURN AS STRING
function getDayFromDate(date) {
    try {
        if (!(date instanceof Date) || isNaN(date)) {
            throw new Error('Invalid date provided');
        }

        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return days[date.getDay()];
    } catch (error) {
        console.error(`Error in getDayFromDate: ${error.message}`);
        return null;
    }
}

// Example
const dayString = getDayFromDate(new Date());
console.log(`The day is ${dayString}.`);

// ADD A DAY
function addDays(date, days) {
    try {
        if (!(date instanceof Date) || isNaN(date.getTime())) {
            throw new Error('Invalid date input');
        }

        if (typeof days !== 'number' || isNaN(days)) {
            throw new Error('Invalid number of days input');
        }

        const result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    } catch (error) {
        console.error(`Error in addDays: ${error.message}`);
        return null;
    }
}

// Example
const newDate = addDays(new Date(), 1);
console.log(`Tomorrow's date: ${newDate}`);

// SUBTRACT A DAY
function subtractDays(date, days) {
    try {
        if (!(date instanceof Date) || isNaN(date.getTime()) || typeof days !== 'number') {
            throw new Error('Invalid input. Please provide a valid date and a number of days.');
        }

        const result = new Date(date);
        result.setDate(result.getDate() - days);
        return result;
    } catch (error) {
        console.error(`Error in subtractDays: ${error.message}`);
        return null;
    }
}

// Add Seconds to TIme
function addSecondsToTime(time, seconds) {
    try {
        if (typeof time !== 'string' || typeof seconds !== 'number') {
            throw new Error('Invalid input types. Time should be a string in "HH:mm:ss" format, and seconds should be a number.');
        }

        const timeArray = time.split(':');
        if (timeArray.length !== 3) {
            throw new Error('Invalid time format. Should be in "HH:mm:ss" format.');
        }

        const hour = parseInt(timeArray[0]);
        const minute = parseInt(timeArray[1]);
        const second = parseInt(timeArray[2]) + seconds;

        const newSecond = second % 60;
        const minuteOverflow = Math.floor(second / 60);
        const newMinute = (minute + minuteOverflow) % 60;
        const hourOverflow = Math.floor((minute + minuteOverflow) / 60);
        const newHour = (hour + hourOverflow) % 24;

        const newTime = [newHour, newMinute, newSecond].map((num) => num.toString().padStart(2, '0')).join(':');
        return newTime;
    } catch (error) {
        console.error(`Error in addSecondsToTime: ${error.message}`);
        return null;
    }
}

// Example
const initialTime = '12:30:15';
const updatedTime = addSecondsToTime(initialTime, 35);
if (updatedTime !== null) {
    console.log(updatedTime);
}


// Add Minutes to Time
function addMinutesToTime(time, minutes) {
    try {
        const timeArray = time.split(':');

        if (timeArray.length !== 2) {
            throw new Error('Invalid time format. Must be in "HH:mm" format.');
        }

        const hour = parseInt(timeArray[0]);
        const minute = parseInt(timeArray[1]) + minutes;

        const newMinute = minute % 60;
        const hourOverflow = Math.floor(minute / 60);
        const newHour = (hour + hourOverflow) % 24;

        const newTime = [newHour, newMinute].map((num) => num.toString().padStart(2, '0')).join(':');
        return newTime;
    } catch (error) {
        console.error(`Error in addMinutesToTime: ${error.message}`);
        return null;
    }
}
// Example
const initialTime1 = '12:30';
const updatedTime1 = addMinutesToTime(initialTime1, 45);
console.log(updatedTime1);

// Add Hours to Time
function addHoursToTime(time, hours) {
    try {
        const timeArray = time.split(':');

        if (timeArray.length !== 2) {
            throw new Error('Invalid time format. Must be in "HH:mm" format.');
        }

        const hour = parseInt(timeArray[0]) + hours;
        const minute = parseInt(timeArray[1]);

        const newHour = (hour + Math.floor(hour / 24)) % 24;
        const newTime = [newHour, minute].map((num) => num.toString().padStart(2, '0')).join(':');
        return newTime;
    } catch (error) {
        console.error(`Error in addHoursToTime: ${error.message}`);
        return null;
    }
}

// Example 
const initialTime2 = '12:30';
const updatedTime2 = addHoursToTime(initialTime2, 5);
console.log(updatedTime2);

// Subtract Seconds from Time
function subtractSecondsFromTime(time, seconds) {
    try {
        const timeArray = time.split(':');

        if (timeArray.length !== 3) {
            throw new Error('Invalid time format. Must be in "HH:mm:ss" format.');
        }

        let hour = parseInt(timeArray[0]);
        let minute = parseInt(timeArray[1]);
        let second = parseInt(timeArray[2]);

        let totalSeconds = hour * 3600 + minute * 60 + second;
        totalSeconds -= seconds;

        if (totalSeconds < 0) {
            throw new Error('Resulting time cannot be negative.');
        }

        hour = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        minute = Math.floor(totalSeconds / 60);
        second = totalSeconds % 60;

        const newTime = [hour, minute, second].map((num) => num.toString().padStart(2, '0')).join(':');
        return newTime;
    } catch (error) {
        console.error(`Error in subtractSecondsFromTime: ${error.message}`);
        return null;
    }
}

// Example
const initialTime4 = '12:30:15';
const updatedTime4 = subtractSecondsFromTime(initialTime4, 30);
console.log(updatedTime4);

// Subtract Minutes from Time
function subtractMinutesFromTime(time, minutes) {
    try {
        const timeArray = time.split(':');

        if (timeArray.length !== 3) {
            throw new Error('Invalid time format. Must be in "HH:mm:ss" format.');
        }

        let hour = parseInt(timeArray[0]);
        let minute = parseInt(timeArray[1]);
        let second = parseInt(timeArray[2]);

        let totalSeconds = hour * 3600 + minute * 60 + second;
        totalSeconds -= minutes * 60;

        if (totalSeconds < 0) {
            throw new Error('Resulting time cannot be negative.');
        }

        hour = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        minute = Math.floor(totalSeconds / 60);
        second = totalSeconds % 60;

        const newTime = [hour, minute, second].map((num) => num.toString().padStart(2, '0')).join(':');
        return newTime;
    } catch (error) {
        console.error(`Error in subtractMinutesFromTime: ${error.message}`);
        return null;
    }
}

// Example 
const initialTime5 = '12:30:15';
const updatedTime5 = subtractMinutesFromTime(initialTime5, 15);
console.log(updatedTime5);

// Subtract Hours from Time
function subtractHoursFromTime(time, hours) {
    try {
        const timeArray = time.split(':');

        if (timeArray.length !== 3) {
            throw new Error('Invalid time format. Must be in "HH:mm:ss" format.');
        }

        let hour = parseInt(timeArray[0]);
        let minute = parseInt(timeArray[1]);
        let second = parseInt(timeArray[2]);

        let totalSeconds = hour * 3600 + minute * 60 + second;
        totalSeconds -= hours * 3600;

        if (totalSeconds < 0) {
            throw new Error('Resulting time cannot be negative.');
        }

        hour = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        minute = Math.floor(totalSeconds / 60);
        second = totalSeconds % 60;

        const newTime = [hour, minute, second].map((num) => num.toString().padStart(2, '0')).join(':');
        return newTime;
    } catch (error) {
        console.error(`Error in subtractHoursFromTime: ${error.message}`);
        return null;
    }
}

// Example
const initialTime6 = '12:30:15';
const updatedTime6 = subtractHoursFromTime(initialTime6, 2);
console.log(updatedTime6);


// Example
const newDate2 = subtractDays(new Date(), 1);
console.log(`Yesterday's date: ${newDate2}`);

// CALENDAR TIME
function getCalendarTime(date) {
    try {
        const formattedDate = date.toLocaleString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: true,
        });

        return formattedDate;
    } catch (error) {
        console.error(`Error in getCalendarTime: ${error.message}`);
        return null;
    }
}

// Example
const currentDate = new Date();
const formattedDate2 = getCalendarTime(currentDate);
console.log(formattedDate2);

// UTC CONVERSION
function convertToUTC(date) {
    try {
        if (!(date instanceof Date) || isNaN(date)) {
            throw new Error('Invalid date input');
        }

        return date.toUTCString();
    } catch (error) {
        console.error(`Error in convertToUTC: ${error.message}`);
        return null;
    }
}

// Example
const utcDate = convertToUTC(new Date());
console.log(utcDate);

// LOCAL CONVERSION
function convertToLocal(date) {
    try {
        if (!(date instanceof Date) || isNaN(date)) {
            throw new Error('Invalid date input');
        }

        return date.toLocaleString();
    } catch (error) {
        console.error(`Error in convertToLocal: ${error.message}`);
        return null;
    }
}

// Example
const localDate = convertToLocal(new Date());
console.log(localDate);

// START AND END DAY OF A WEEK
function getStartAndEndOfWeek(date) {
    try {
        if (!(date instanceof Date)) {
            throw new Error('Input must be a valid Date object');
        }

        const day = date.getDay();
        const startDate = new Date(date);
        startDate.setDate(date.getDate() - day);

        const endDate = new Date(startDate);
        endDate.setDate(startDate.getDate() + 6);

        return { start: startDate, end: endDate };
    } catch (error) {
        console.error(`Error in getStartAndEndOfWeek: ${error.message}`);
        return null;
    }
}

// Example
const weekRange = getStartAndEndOfWeek(new Date());

if (weekRange) {
    console.log("Start of the week: ", weekRange.start);
    console.log("End of the week: ", weekRange.end);
}

// Time zone conversion - zone based time
function convertToTimeZone(date, timeZone) {
    try {
        const options = {
            timeZone: timeZone,
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        };
        const convertedDate = new Date(date).toLocaleString('en-US', options);
        return convertedDate;
    } catch (error) {
        console.error(`Error in convertToTimeZone: ${error.message}`);
        return null;
    }
}

// Example
const date = new Date();
const timeZone = 'America/New_York';
const convertedDate = convertToTimeZone(date, timeZone);
console.log(convertedDate);


// Convert Numbers to words
const singleDigits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const twoDigits = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const tensMultiple = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const tensPower = ['', 'thousand', 'million', 'billion', 'trillion'];

function convertNumberToWords(num) {
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
}

function helper(num) {
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
}

// Example
const number = 123;
console.log(convertNumberToWords(number));

// CURENCY CAMA SEPARATION
function addCommasToNumber(num) {
    try {
        // Convert to string and add commas
        const numberWithCommas = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return numberWithCommas;
    } catch (error) {
        console.error(`Error in addCommasToNumber: ${error.message}`);
        return null;
    }
}

// Example
const numberWithCommas = addCommasToNumber(10000);
console.log(numberWithCommas);

// PERCENTAGE CALCULATOR
function calculatePercentage(value, total) {
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
}

// Convert a url file to base64
function urlToBase64(url) {
    return new Promise((resolve, reject) => {
        try {
            const xhr = new XMLHttpRequest();
            xhr.responseType = 'blob';
            xhr.onload = function () {
                const reader = new FileReader();
                reader.onloadend = function () {
                    resolve(reader.result);
                };
                reader.readAsDataURL(xhr.response);
            };
            xhr.onerror = function () {
                reject(new Error('Failed to fetch the URL.'));
            };
            xhr.open('GET', url);
            xhr.send();
        } catch (error) {
            reject(error);
        }
    });
}

// Example 
const fileUrl = 'https://example.com/example.pdf';
urlToBase64(fileUrl)
    .then((base64String) => {
        console.log(base64String);
    })
    .catch((error) => {
        console.error('Error converting to base64:', error);
    });


// Example
const result3 = calculatePercentage(25, 100);
console.log(result3);

// Calculating value using percentage
function calculateValueFromPercentage(total, percentage) {
    try {
        if (typeof total !== 'number' || typeof percentage !== 'number') {
            throw new Error('Both total and percentage must be numbers');
        }

        return (percentage / 100) * total;
    } catch (error) {
        console.error(`Error in calculateValueFromPercentage: ${error.message}`);
        return null;
    }
}

// Example
const totalValue = 200;
const percentageValue = 25;
const calculatedValue = calculateValueFromPercentage(totalValue, percentageValue);

console.log(`The value corresponding to ${percentageValue}% of ${totalValue} is: ${calculatedValue}`);

// Hertz colour to rgb colour
function hertzToRgb(hertzColor) {
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
}

// Example
const hertzColor = "#ff4500";
const rgbColor = hertzToRgb(hertzColor);
console.log(rgbColor);

//   Scroll to top or based on  id
function scrollToElementById(id) {
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
}

// Example
scrollToElementById('yourElementId');

//   Scroll to top or based on  classname
function scrollToElementByClass(className) {
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
}

// Array of json filter based on two key values
function filterArray(items, key1, value1, key2, value2) {
    try {
        if (!Array.isArray(items)) {
            throw new Error('Input must be an array');
        }

        if (typeof key1 !== 'string' || typeof key2 !== 'string') {
            throw new Error('Key values must be strings');
        }

        return items.filter((item) => item[key1] === value1 && item[key2] === value2);
    } catch (error) {
        console.error(`Error in filterArray: ${error.message}`);
        return null;
    }
}

// Example
const items = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Jane', age: 25 },
    { id: 3, name: 'Doe', age: 35 },
    { id: 4, name: 'Alice', age: 20 },
];

const filteredData = filterArray(items, 'name', 'John', 'age', 30);
console.log(filteredData);


// Example
scrollToElementByClass('yourClassName');

// Regex email validation
function validateEmail(email) {
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
}

// Example
const email1 = "test@example.com";
const email2 = "invalid.email";
console.log(validateEmail(email1));
console.log(validateEmail(email2));

// Dot truncate for large paragraph
function truncateText(text, maxLength) {
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
}

// Example
const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
const maxLength = 50;
const truncated = truncateText(longText, maxLength);
console.log(truncated);

// UUID Generation
function generateUUID() {
    try {
        const { v4: uuidv4 } = require('uuid');
        const uuid = uuidv4();
        return uuid;
    } catch (error) {
        console.error(`Error in generateUUID: ${error.message}`);
        return null;
    }
}

// Example
const generatedUUID = generateUUID();
console.log(generatedUUID);

// Empty object validation
const isEmptyObject = (obj) => {
    try {
        if (typeof obj !== 'object' || obj === null) {
            throw new Error('Input must be a non-null object');
        }

        for (let key in obj) {
            // Using Object.keys(obj).length to check the number of keys
            if (Object.keys(obj).length !== 0) {
                return false;
            }
        }

        return true;
    } catch (error) {
        console.error(`Error in isEmptyObject: ${error.message}`);
        return null;
    }
};

// Example
const emptyObj = {};
const nonEmptyObj = { key: 'value' };

console.log(isEmptyObject(emptyObj));
console.log(isEmptyObject(nonEmptyObj));

// Generate random text with numbers
function generateRandomTextWithNumber(length) {
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
}

// Example
const randomText = generateRandomTextWithNumber(10);
console.log(randomText);

// Query params access 
// Example URL with query parameters
const urlString = 'https://example.com/page?param1=value1&param2=value2';

// Creating a URL object
const url = new URL(urlString);

// Accessing query parameters
const params = new URLSearchParams(url.search);

// Retrieving specific parameters
const param1Value = params.get('param1');
const param2Value = params.get('param2');

// Example
console.log('Param 1:', param1Value);
console.log('Param 2:', param2Value);

// Random number generation
function getRandomNumber(min, max) {
    try {
        if (typeof min !== 'number' || typeof max !== 'number' || min >= max) {
            throw new Error('Invalid input. min and max must be numbers, and min must be less than max.');
        }

        return Math.floor(Math.random() * (max - min + 1)) + min;
    } catch (error) {
        console.error(`Error in getRandomNumber: ${error.message}`);
        return null;
    }
}

// Example
const min = 1;
const max = 100;
const randomNumber = getRandomNumber(min, max);
console.log(randomNumber);

// Random color generation
const getRandomColor = () => {
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
};

// Example
const randomColor = getRandomColor();
console.log(randomColor);

// Country code with mobile number count validation
const validateMobileNumber = (input) => {
    try {
        if (typeof input !== 'string') {
            throw new Error('Input must be a string');
        }

        const mobileNumberRegex = /^\+[1-9]\d{1,2}-\d{3}-\d{3}-\d{4}$/;
        return mobileNumberRegex.test(input);
    } catch (error) {
        console.error(`Error in validateMobileNumber: ${error.message}`);
        return null;
    }
};

// Example
const phoneNumber1 = "+1-123-456-7890";
const phoneNumber2 = "+91-987-654-3210";
const phoneNumber3 = "+123-456-7890";

console.log(validateMobileNumber(phoneNumber1));
console.log(validateMobileNumber(phoneNumber2));
console.log(validateMobileNumber(phoneNumber3));

// Country code and flag
function getCountryCodeAndFlag(countryCode) {
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
}

// Example
const countryData = getCountryCodeAndFlag('in');
if (countryData) {
    console.log(countryData.code);
    console.log(countryData.flag);
}


// Array of json search json based on key value
const searchJSONArray = (arr, key, value) => {
    try {
        if (!Array.isArray(arr) || typeof key !== 'string') {
            throw new Error('Invalid input. Expecting an array and a string key.');
        }

        return arr.filter((item) => item[key] === value);
    } catch (error) {
        console.error(`Error in searchJSONArray: ${error.message}`);
        return null;
    }
};

// Example
const jsonArray = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
    { id: 3, name: "Alice" },
    { id: 4, name: "Bob" },
];

const searchResult = searchJSONArray(jsonArray, "name", "Jane Doe");
console.log(searchResult);

// Promise.all Settled filter success and failure results
async function promiseAllSettledFilter(promises) {
    try {
        if (!Array.isArray(promises)) {
            throw new Error('Input must be an array of promises');
        }

        const results = await Promise.allSettled(promises);
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
}

// Example:
const promises = [Promise.resolve(1), Promise.reject('Error'), Promise.resolve(3)];

promiseAllSettledFilter(promises).then((result) => {
    console.log('Successful Promises:', result.successfulPromises);
    console.log('Failed Promises:', result.failedPromises);
});

// Group by based key value in array of json
function groupBy(arr, key) {
    try {
        if (!Array.isArray(arr)) {
            throw new Error('Input must be an array');
        }

        return arr.reduce((result, obj) => {
            const keyValue = obj[key];

            if (keyValue === undefined) {
                throw new Error(`Key "${key}" not found in one or more objects.`);
            }

            (result[keyValue] = result[keyValue] || []).push(obj);
            return result;
        }, {});
    } catch (error) {
        console.error(`Error in groupBy: ${error.message}`);
        return null;
    }
}

// Example
const dataArray = [
    { id: 1, name: 'John', group: 'A' },
    { id: 2, name: 'Doe', group: 'B' },
    { id: 3, name: 'Jane', group: 'A' },
    { id: 4, name: 'Smith', group: 'B' },
];

const groupedData = groupBy(dataArray, 'group');
console.log(groupedData);

// Case converions
function convertCase(inputString, caseType) {
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
}

// Example
const inputText = "hello world! This is an example.";

console.log("Lowercase:", convertCase(inputText, 'lowercase'));
console.log("Uppercase:", convertCase(inputText, 'uppercase'));
console.log("Title Case:", convertCase(inputText, 'titlecase'));
console.log("Sentence Case:", convertCase(inputText, 'sentencecase'));


// SUM OF AN ARRAY
const sumArray = (arr) => {
    try {
        if (!Array.isArray(arr)) {
            throw new Error('Input is not an array');
        }

        if (arr.length === 0) {
            return 0;
        }

        return arr.reduce((total, current) => total + current, 0);
    } catch (error) {
        console.error(`Error in sumArray: ${error.message}`);
        return null;
    }
};

// Example
const array = [1, 2, 3, 4, 5];
console.log(sumArray(array));

// Array of json identical find and group and different
function groupIdenticalAndDifferent(arr) {
    try {
        if (!Array.isArray(arr)) {
            throw new Error('Input is not an array');
        }

        const result = {
            identical: [],
            different: []
        };

        for (let i = 0; i < arr.length; i++) {
            const current = arr[i];
            let isIdentical = false;

            for (let j = 0; j < result.identical.length; j++) {
                if (JSON.stringify(current) === JSON.stringify(result.identical[j][0])) {
                    result.identical[j].push(current);
                    isIdentical = true;
                    break;
                }
            }

            if (!isIdentical) {
                let isDifferent = true;
                for (let j = 0; j < result.different.length; j++) {
                    if (JSON.stringify(current) === JSON.stringify(result.different[j])) {
                        isDifferent = false;
                        break;
                    }
                }
                if (isDifferent) {
                    result.different.push(current);
                }
            }
        }

        return result;
    } catch (error) {
        console.error(`Error in groupIdenticalAndDifferent: ${error.message}`);
        return null;
    }
}

// Example
const jsonArray1 = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'John', age: 30 },
    { name: 'Kate', age: 28 },
    { name: 'Jane', age: 25 }
];

const result5 = groupIdenticalAndDifferent(jsonArray1);
console.log('Identical elements:', result5 ? result5.identical : null);
console.log('Different elements:', result5 ? result5.different : null);

// Remove All (Remove all instance of an item from the array)
function removeAll(array, item) {
    try {
        if (!Array.isArray(array)) {
            throw new Error('Input is not an array');
        }

        return array.filter(element => element !== item);
    } catch (error) {
        console.error(`Error in removeAll: ${error.message}`);
        return null;
    }
}
// Example
const array2 = [1, 2, 3, 4, 2, 5, 2];
const itemToRemove = 2;
const resultArray = removeAll(array2, itemToRemove);
console.log(resultArray);

// Index based removal in an Array of JSON
function removeJsonByIndex(array, index) {
    try {
        if (!Array.isArray(array)) {
            throw new Error('Input is not an array');
        }

        if (typeof index !== 'number' || index < 0 || index >= array.length) {
            throw new Error('Invalid index');
        }

        // Use Array.splice to remove the element at the specified index
        array.splice(index, 1);

        return array;
    } catch (error) {
        console.error(`Error in removeJsonByIndex: ${error.message}`);
        return null;
    }
}

// Example
const jsonArray2 = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Doe' }
];

const indexToRemove = 1;
const resultArray1 = removeJsonByIndex(jsonArray2, indexToRemove);
console.log(resultArray1);

// File extension check with file upload
function checkFileExtension(file, allowedExtensions) {
    try {
        // Check if the input is a valid file object
        if (typeof file !== 'object' || !file.name) {
            throw new Error('Invalid file object');
        }

        // Check if allowedExtensions is an array
        if (!Array.isArray(allowedExtensions)) {
            throw new Error('Allowed extensions must be an array');
        }

        const fileName = file.name;
        const fileExtension = fileName.split('.').pop().toLowerCase();

        if (allowedExtensions.includes(fileExtension)) {
            console.log('File extension is allowed');
            // Perform further actions here, such as uploading the file
        } else {
            console.log('File extension is not allowed');
            // Handle the case when the file extension is not allowed
        }
    } catch (error) {
        // Handle and log errors
        console.error(`Error in checkFileExtension: ${error.message}`);
    }
}

// Example with a file object and user-defined allowed extensions
const fileObject = {
    name: 'example.jpg',
    /* other properties */
};

const userAllowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];
checkFileExtension(fileObject, userAllowedExtensions);































