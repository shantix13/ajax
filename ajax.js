

$.ajax(
    'https://repetitora.net/api/JS/Images',
    {
        success: function (data) {
            data.forEach(el => {
                const img = document.createElement('img');
                img.src = el.thumbnail;
                document.querySelector('body').appendChild(img);
            });
        }
    }
)