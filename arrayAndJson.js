export const arrayAndJson = {
    // Array of json filter based on two key values
    filterArray: (items, key1, value1, key2, value2) => {
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
    },
    // Example
    // const items = [
    //     { id: 1, name: 'John', age: 30 },
    //     { id: 2, name: 'Jane', age: 25 },
    //     { id: 3, name: 'Doe', age: 35 },
    //     { id: 4, name: 'Alice', age: 20 },
    // ];

    // const filteredData = filterArray(items, 'name', 'John', 'age', 30);
    // console.log(filteredData);

    // Empty object validation
    isEmptyObject: (obj) => {
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
    },
    // Example
    // const emptyObj = {};
    // const nonEmptyObj = { key: 'value' };

    // console.log(isEmptyObject(emptyObj));
    // console.log(isEmptyObject(nonEmptyObj));

    // Array of json search json based on key value
    searchJSONArray: (arr, key, value) => {
        try {
            if (!Array.isArray(arr) || typeof key !== 'string') {
                throw new Error('Invalid input. Expecting an array and a string key.');
            }

            return arr.filter((item) => item[key] === value);
        } catch (error) {
            console.error(`Error in searchJSONArray: ${error.message}`);
            return null;
        }
    },
    // Example
    // const jsonArray = [
    //     { id: 1, name: "John Doe" },
    //     { id: 2, name: "Jane Doe" },
    //     { id: 3, name: "Alice" },
    //     { id: 4, name: "Bob" },
    // ];

    // const searchResult = searchJSONArray(jsonArray, "name", "Jane Doe");
    // console.log(searchResult);

    // Group by based key value in array of json
    groupBy: (arr, key) => {
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
    },
    // Example
    // const dataArray = [
    //     { id: 1, name: 'John', group: 'A' },
    //     { id: 2, name: 'Doe', group: 'B' },
    //     { id: 3, name: 'Jane', group: 'A' },
    //     { id: 4, name: 'Smith', group: 'B' },
    // ];

    // const groupedData = groupBy(dataArray, 'group');
    // console.log(groupedData);

    // SUM OF AN ARRAY
    sumArray: (arr) => {
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
    },
    // Example
    // const array = [1, 2, 3, 4, 5];
    // console.log(sumArray(array));

    // Array of json identical find and group and different
    groupIdenticalAndDifferent: (arr) => {
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
    },
    // Example
    // const jsonArray1 = [
    //     { name: 'John', age: 30 },
    //     { name: 'Jane', age: 25 },
    //     { name: 'John', age: 30 },
    //     { name: 'Kate', age: 28 },
    //     { name: 'Jane', age: 25 }
    // ];

    // const result5 = groupIdenticalAndDifferent(jsonArray1);
    // console.log('Identical elements:', result5 ? result5.identical : null);
    // console.log('Different elements:', result5 ? result5.different : null);

    // Remove All (Remove all instance of an item from the array)
    removeAllByArray: (array, item) => {
        try {
            if (!Array.isArray(array)) {
                throw new Error('Input is not an array');
            }

            return array.filter(element => element !== item);
        } catch (error) {
            console.error(`Error in removeAllByArray: ${error.message}`);
            return null;
        }
    },
    // Example
    // const array2 = [1, 2, 3, 4, 2, 5, 2];
    // const itemToRemove = 2;
    // const resultArray = removeAllByArray(array2, itemToRemove);
    // console.log(resultArray);

    // Index based removal in an Array of JSON
    removeJsonByIndex: (array, index) => {
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
    // const jsonArray2 = [
    //     { id: 1, name: 'John' },
    //     { id: 2, name: 'Jane' },
    //     { id: 3, name: 'Doe' }
    // ];

    // const indexToRemove = 1;
    // const resultArray1 = removeJsonByIndex(jsonArray2, indexToRemove);
    // console.log(resultArray1);
}