export const dateFunction = {
    // Difference between two days
    dateDiffInDays: (date1, date2) => {
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
    },
    // Example
    // const date1 = new Date('2023-10-20');
    // const date2 = new Date('2023-10-25');
    // const diff = dateDiffInDays(date1, date2);
    // console.log(diff);

    // Difference between two days excluding non-business days
    getWeekdayCount: (startDate, endDate) => {
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
    },
    // Example
    // const startDate = new Date('2023-10-20');
    // const endDate = new Date('2023-10-25');
    // const weekdayCount = getWeekdayCount(startDate, endDate);
    // console.log(weekdayCount);


    // Number of the week for a given date
    getWeekNumber: (date) => {
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
    },
    // Example
    // const date4 = new Date('2023-10-25');
    // const weekNumber = getWeekNumber(date4);
    // console.log(weekNumber);


    // Get Days of week
    getDaysOfWeek: (date) => {
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
    },
    // Example: Get the days of the week for the current date
    // const currentDate1 = new Date();
    // const weekDays = getDaysOfWeek(currentDate1);

    // Log the days of the week
    // if (weekDays) {
    //     weekDays.forEach(day => {
    //         console.log(day.toDateString());
    //     });
    // }

    // DATE BASED DAY RETURN AS STRING
    getDayFromDate: (date) => {
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
    },
    // Example
    // const dayString = getDayFromDate(new Date());
    // console.log(`The day is ${dayString}.`);

    // ADD A DAY
    addDays: (date, days) => {
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
    },
    // Example
    // const newDate = addDays(new Date(), 1);
    // console.log(`Tomorrow's date: ${newDate}`);

    // SUBTRACT A DAY
    subtractDays: (date, days) => {
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
    },
    // Example
    // const newDate1 = subtractDays(new Date(), 1);
    // console.log(`Yesterday's date: ${newDate1}`);

    // UTC CONVERSION
    convertToUTC: (date) => {
        try {
            if (!(date instanceof Date) || isNaN(date)) {
                throw new Error('Invalid date input');
            }

            return date.toUTCString();
        } catch (error) {
            console.error(`Error in convertToUTC: ${error.message}`);
            return null;
        }
    },
    // Example
    // const utcDate = convertToUTC(new Date());
    // console.log(utcDate);

    // LOCAL CONVERSION
    convertToLocal: (date) => {
        try {
            if (!(date instanceof Date) || isNaN(date)) {
                throw new Error('Invalid date input');
            }

            return date.toLocaleString();
        } catch (error) {
            console.error(`Error in convertToLocal: ${error.message}`);
            return null;
        }
    },
    // Example
    // const localDate = convertToLocal(new Date());
    // console.log(localDate);

    // START AND END DAY OF A WEEK
    getStartAndEndOfWeek: (date) => {
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
    },
    // Example
    // const weekRange = getStartAndEndOfWeek(new Date());

    // if (weekRange) {
    //     console.log("Start of the week: ", weekRange.start);
    //     console.log("End of the week: ", weekRange.end);
    // }

    // Time zone conversion - zone based time
    convertToTimeZone: (date, timeZone) => {
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
    },
    // Example
    // const date = new Date();
    // const timeZone = 'America/New_York';
    // const convertedDate = convertToTimeZone(date, timeZone);
    // console.log(convertedDate);
}