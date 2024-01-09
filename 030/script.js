var users = {
    "pepik.ahoj1": "heslo1",
    "jana.pizza2": "heslo2",
    "karel.kočka3": "heslo3",
    "eva.12345": "heslo4"
 };
 function login() {
    event.preventDefault();
    var usernameInput = document.getElementById("username").value;
    var passwordInput = document.getElementById("password").value;
    if (users[usernameInput] === passwordInput) {
        alert("Úspěšně přihlášen!");
        window.location.href = "welcome.html?user=" + encodeURIComponent(usernameInput);
    } else {
        alert("Špatně zadané jméno nebo heslo.");
    }
 }