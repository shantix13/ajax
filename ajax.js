async function getResponse() {
    let promise = await fetch('https://jsonplaceholder.typicode.com/photos');
    let content = await promise.json();
    content = content.splice(0, 10);
    let posts = document.querySelector('.posts');
    let post_item = '';
    for (items of content) {
        console.log(items);
        post_item += `<li><img src=${items.url} alt=${items.title} ></li>`;
    };
    posts.innerHTML = post_item;
};

getResponse();



