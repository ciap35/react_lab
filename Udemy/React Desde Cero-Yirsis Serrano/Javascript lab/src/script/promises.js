document.write("<h3>promises.js</h3>");

const addFunction = (a, b) => {
    return new Promise((resolve, reject) => {
        if (a < 0 || b < 0) {
            reject("Invalid operation");
        } else {
            resolve(a+b);
        }
    });
};

const resultAddFunction = addFunction(1, 2)
                .then((res) => { 
                    document.write("Result: "+res);
                })
                .catch((error) => {
                     document.write(error); 
                });