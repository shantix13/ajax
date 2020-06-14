// $.ajax(
//     'https://repetitora.net/api/JS/Images',
//     {
//         success: function (data) {
//             data.forEach(el => {
//                 const img = document.createElement('img');
//                 img.src = el.thumbnail;
//                 document.querySelector('body').appendChild(img);
//             });
//         }
//     }
// );
// Endpoint - оконечная точка.

// http протокол имеет разные типы запросов. Get / Post / Options / Delete / Put.

// Get - запрос для получения данных. Самый простой запрос. Состоит из одной характеристики - строка запроса. 

// query string - строка запроса. Можно заслать параметры для получения опеределенных данных.

// https://repetitora.net/api/JS/Images/?page=2&click=yes&other=blablabla


$.ajax(
    'https://repetitora.net/api/JS/Images/?page=2&count=4',
    {
        success: function (data) {
            data.forEach(el => {
                const img = document.createElement('img');
                img.src = el.thumbnail;
                document.querySelector('body').appendChild(img);
            });
        }
    }
);
