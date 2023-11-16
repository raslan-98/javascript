export const timeFunction = {
    // SECONDS TO MINUTES
    secondsToMinutes: (seconds) => {
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
    },
    // Example
    // const result = secondsToMinutes('150');
    // console.log(result);


    // MINUTES TO HOURS
    minutesToHours: (minutes) => {
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
    },
    // Example
    // const result1 = minutesToHours(150);
    // console.log(result1);

    // HOURS TO DAYS
    hoursToDays: (hours) => {
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
    },
    // Example
    // const result2 = hoursToDays(48);
    // console.log(result2);

    // DAYS TO WEEKS
    daysToWeeks: (days) => {
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
    },
    // Example
    // const weeks = daysToWeeks(14);
    // console.log(weeks);

    // DAYS TO MONTHS
    daysToMonths: (days) => {
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
    },
    // Example
    // const months = daysToMonths('60');
    // console.log(months);

    // DAYS TO YEARS
    daysToYears: (days) => {
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
    },
    // Example
    // const years = daysToYears('730');
    // console.log(years);

    // Add Seconds to TIme
    addSecondsToTime: (time, seconds) => {
        try {
            if (!(time instanceof Date) || typeof seconds !== 'number') {
                throw new Error('Invalid input types. Time should be a Date object, and seconds should be a number.');
            }

            const hour = time.getHours();
            const minute = time.getMinutes();
            const second = time.getSeconds() + seconds;

            const newSecond = second % 60;
            const minuteOverflow = Math.floor(second / 60);
            const newMinute = (minute + minuteOverflow) % 60;
            const hourOverflow = Math.floor((minute + minuteOverflow) / 60);
            const newHour = (hour + hourOverflow) % 24;

            // Create a new Date object with updated time components
            const newTime = new Date(time);
            newTime.setHours(newHour, newMinute, newSecond);

            return newTime;
        } catch (error) {
            console.error(`Error in addSecondsToTime: ${error.message}`);
            return null;
        }
    },
    // // Example
    // const initialTime = new Date();
    // const updatedTime = addSecondsToTime(initialTime, 35);
    // if (updatedTime !== null) {
    //     console.log(updatedTime.toLocaleTimeString());
    // }

    // Add Hours to Time
    addHoursToTime: (time, hours) => {
        try {
            if (!(time instanceof Date) || typeof hours !== 'number') {
                throw new Error('Invalid input types. Time should be a Date object, and hours should be a number.');
            }

            const newTime = new Date(time);
            newTime.setHours(newTime.getHours() + hours);

            return newTime;
        } catch (error) {
            console.error(`Error in addHoursToTime: ${error.message}`);
            return null;
        }
    },
    // Example 
    // const initialTime2 = new Date();
    // const updatedTime2 = addHoursToTime(initialTime2, 5);
    // if (updatedTime2 !== null) {
    //     console.log(updatedTime2.toLocaleTimeString());
    // }

    // Subtract Seconds from Time
    subtractSecondsFromTime: (time, seconds) => {
        try {
            if (!(time instanceof Date) || typeof seconds !== 'number') {
                throw new Error('Invalid input types. Time should be a Date object, and seconds should be a number.');
            }

            const newTime = new Date(time);
            newTime.setSeconds(newTime.getSeconds() - seconds);

            const newHour = newTime.getHours();
            const newMinute = newTime.getMinutes();
            const newSecond = newTime.getSeconds();

            const formattedTime = [newHour, newMinute, newSecond].map((num) => num.toString().padStart(2, '0')).join(':');
            return formattedTime;
        } catch (error) {
            console.error(`Error in subtractSecondsFromTime: ${error.message}`);
            return null;
        }
    },
    // Example
    // const initialTime4 = new Date();
    // const updatedTime4 = subtractSecondsFromTime(initialTime4, 30);
    // console.log(updatedTime4);

    // Subtract Minutes from Time
    subtractMinutesFromTime: (time, minutes) => {
        try {
            if (!(time instanceof Date) || typeof minutes !== 'number') {
                throw new Error('Invalid input types. Time should be a Date object, and minutes should be a number.');
            }

            const newTime = new Date(time);
            newTime.setMinutes(newTime.getMinutes() - minutes);

            const newHour = newTime.getHours();
            const newMinute = newTime.getMinutes();
            const newSecond = newTime.getSeconds();

            const formattedTime = [newHour, newMinute, newSecond].map((num) => num.toString().padStart(2, '0')).join(':');
            return formattedTime;
        } catch (error) {
            console.error(`Error in subtractMinutesFromTime: ${error.message}`);
            return null;
        }
    },
    // Example
    // const initialTime5 = new Date();
    // const updatedTime5 = subtractMinutesFromTime(initialTime5, 15);
    // console.log(updatedTime5);

    // Subtract Hours from Time
    subtractHoursFromTime: (time, hours) => {
        try {
            if (!(time instanceof Date) || typeof hours !== 'number') {
                throw new Error('Invalid input types. Time should be a Date object, and hours should be a number.');
            }

            const newTime = new Date(time);
            newTime.setHours(newTime.getHours() - hours);

            const newHour = newTime.getHours();
            const newMinute = newTime.getMinutes();
            const newSecond = newTime.getSeconds();

            const formattedTime = [newHour, newMinute, newSecond].map((num) => num.toString().padStart(2, '0')).join(':');
            return formattedTime;
        } catch (error) {
            console.error(`Error in subtractHoursFromTime: ${error.message}`);
            return null;
        }
    },
    // Example
    // const initialTime6 = new Date();
    // const updatedTime6 = subtractHoursFromTime(initialTime6, 2);
    // console.log(updatedTime6);

    // CALENDAR TIME
    getCalendarTime: (date) => {
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
    },
    // Example
    // const currentDate = new Date();
    // const formattedDate2 = getCalendarTime(currentDate);
    // console.log(formattedDate2);
}