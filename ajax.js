// Объект promise
// Promise устраняет ад колбеков

let promise = new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(data => {
            resolve(data.text());
        });
});

let promise2 = new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(data => {
            resolve(data.text());
        });
});


promise.then(data => {
    console.log(data);
});

promise2.then(data => {
    console.log(data);
});

// PromiseAll - синтакси позволяет обработать обе инстанции объекта вместе.
// Результат promise записывется в массив и приходят в том порядке, в котороым мы указаваем параметры массива.
Promise.all([a, b]).then(data => {
    console.log(data);
});



