export const fileFunction = {
    // Convert a url file to base64
    urlToBase64: (url) => {
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
    },
    // Example 
    // const fileUrl = 'https://example.com/example.pdf';
    // urlToBase64(fileUrl)
    //     .then((base64String) => {
    //         console.log(base64String);
    //     })
    //     .catch((error) => {
    //         console.error('Error converting to base64:', error);
    //     });

    // File extension check with file upload
    checkFileExtension: (file, allowedExtensions) => {
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
    // const fileObject = {
    //     name: 'example.jpg',
    //     /* other properties */
    // };

    // const userAllowedExtensions = ['jpg', 'jpeg', 'png', 'gif'];
    // checkFileExtension(fileObject, userAllowedExtensions);
}