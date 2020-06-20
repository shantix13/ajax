let promise = fetch('https://jsonplaceholder.typicode.com/photos')
    .then(data => data.text())
    // data.text().then(data2 => {
    //     console.log(data2);
    // });
    .then(data => {
        console.log(data);
    });



