let is_cookie = Cookies.get(`token`);
document.body.insertAdjacentHTML(`afterbegin`, `<h3> you've logged in</h3>`)


document.getElementById(`true_logout`).addEventListener(`click`, delete_me);

function delete_me (details) {
    Cookies.remove(`token`);
    console.log(`see if this works`)
    location.href = "index.html";
    document.body.insertAdjacentHTML(`beforeend`, `<h2>you have safely logged out</h2>`)
    
    
}

document.getElementById(`to_index`).addEventListener(`click`, to_index_page);

function to_index_page () {
    location.href = "index.html"
}