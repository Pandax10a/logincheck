

document.querySelector(`#log_in_button`).addEventListener(`click`, get_info);

function get_info (details) {
    let user_email = document.getElementById(`client_email`).value;
    let user_password = document.querySelector(`#the_password`).value;

    axios.request({
        url: `https://reqres.in/api/login`,
        method: `POST`,
        data: {
            email: `${user_email}`,
            password: `${user_password}`

        }
    }).then(successFunction).catch(failureFunction);
}

function successFunction (response444) {
    
    Cookies.set(`token`, `${response444[`data`][`token`]}`);
 document.body.insertAdjacentHTML("beforeend", `<h1>${response444[`data`][`token`]}</h1>`)
 location.href = "logout.html"
}

function failureFunction (errro5555) {
    console.log(`fail`)
}
// button is set to just go to logout.html
document.getElementById(`to_logout`).addEventListener(`click`, to_logout_page);

let cookie_token = Cookies.get(`token`);
console.log(cookie_token);

function to_logout_page (details) {
    if (cookie_token === undefined) {
   document.body.insertAdjacentHTML(`beforeend`, `<h1> you haven't logged in</h1>`)
    
    } else if (cookie_token !== undefined) {
        // Cookies.remove(`token`);
        location.href = "logout.html";
    }
    
}

/*
function my_function(details) {
    a = 2
}
let input = document.getElementById(`inputBox`);
input.addEventListener(`click`, my_function);
*/