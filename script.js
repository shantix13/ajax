$(document).ready(function () {
    $('button').on('click', myAjax);
});


function myAjax() {
    // Ajax запрос
    $.post(
        'backend.php',
        {
            'a': $('#num1').val(),

        },
        function (data) {
            console.log(data);
        }
    );
}