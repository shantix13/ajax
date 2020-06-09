let servResponse = document.querySelector('#response');


document.forms.ourForm.onsubmit = function (e) {
    e.preventDefault();

    let userInput = document.forms.ourForm.ourForm_inp.value;
    userInput = encodeURIComponent(userInput);

    let xhr = new XMLHttpRequest();

    // GET Запрос
    // xhr.open('GET', 'form.php?' + 'ourForm_inp=' + userInput);

    // POST Запрос
    xhr.open('POST', 'backend.php');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            servResponse.textContent = xhr.responseText;
        }
    }

    xhr.send('ourForm_inp=' + userInput);

};