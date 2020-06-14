// function getImages(ajaxUrl) {
//     let promise = $.ajax(ajaxUrl);
//     //console.log(promise);
//     return promise;
// }

// getImages('https://repetitora.net/api/JS/Images');

function getImagesAxios(ajaxUrl) {
    let promise = axios.get(ajaxUrl);
    return promise.then((data) => {
        console.log(data.data);
    });
}

getImagesAxios('https://repetitora.net/api/JS/Images');