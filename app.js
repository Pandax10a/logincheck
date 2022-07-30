Cookies.set(`current_user`);

document.querySelector(`#log_in_button`).addEventListener(`click`, get_info);

function get_info (details) {
    let user_email = document.getElementById(`client_email`).value;
    let user_password = document.querySelector(`#the_password`).value;

    axios.request({
        url: `https://reqres.in/api/login`,
        method: `POST`
        data: {

        }
    }).then(successFunction).catch(failureFunction);
}


