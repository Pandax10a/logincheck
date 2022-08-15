Cookies.set(`current_user`);

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
    
    Cookies.set(`current_user`, `${response444[`data`][`token`]}`);
 document.body.insertAdjacentHTML("beforeend", `<h1>${response444[`data`][`token`]}</h1>`)
}

function failureFunction (errro5555) {
    console.log(`fail`)
}


function my_function(details) {
    a = 2
}
let input = document.getElementById(`inputBox`);
input.addEventListener(`click`, my_function);
