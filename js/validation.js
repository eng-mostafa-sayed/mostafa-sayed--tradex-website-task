/* """
respurces i used 
regular expression of password ==> https://www.thepolyglotdeveloper.com/2015/05/use-regex-to-test-password-strength-in-javascript
 regular Expression of email ==> http://zparacha.com/validate-email-address-using-javascript-regular-expression
 """ */

let form = document.getElementById("myForm");
form.addEventListener("input", function(element) {
    console.log(element);
    switch (element.target.id) {
        case "userName":
            console.log(element.target.value);
            checkName(element.target);
        case "userLastName":
            console.log(element.target.value);
            checkName(element.target);
            break;
        case "userEmail":
            checkMail(element.target);

            break;
        case "userMessage":
            checkMsg(element.target);
            break;
    }
});

function checkName(input) {
    var inputValue = input.value.trim();
    if (inputValue.length < 3) interruption(input, "enter at least 3 character");
    else remove_interruption(input);
}

function checkMail(input) {
    const regExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    console.log(regExp.test(input.value));
    if (regExp.test(input.value) == false)
        interruption(input, "enter a valid email");
    else remove_interruption(input);
}

function checkMsg(input) {
    let inputValue = input.value.trim();
    if (inputValue.length < 30) {
        interruption(input, "enter at least 30 character");
    } else {
        remove_interruption(input);
    }
}

function interruption(inputElement, msg) {
    let errMsg = inputElement.nextElementSibling;
    errMsg.innerText = msg;
    errMsg.classList.remove("d-none");
    errMsg.classList.add("text-danger");
}

function remove_interruption(inputElement) {
    let errMsg = inputElement.nextElementSibling;
    errMsg.classList.add("d-none");
}