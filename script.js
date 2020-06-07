$(document).ready(function () {
    $('button').on('click', myAjax2);
});


function myAjax() {
    // Ajax запрос
    $.get(
        'backend.php',
        {
            'a': $('#num1').val(),

        },
        function (data) {
            console.log(data);
        }
    );
}


function myAjax2() {
    $.ajax({
        url: 'backend.php',
        type: 'GET',
        data: { a: $('#num1').val() },
        success: function (data) {
            console.log(data);
        }
    });
}