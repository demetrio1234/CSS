function changeFormTitle() {

    const cb_register = document.querySelector('input[name="show-register-new-user-checkbox"]').checked;

    if (cb_register) {
        document.querySelector('div[class="login-panel"]').style.backgroundColor = "aquamarine";
        document.querySelector('label[id="form-title"]').textContent = 'Register new User';
    } else if (!cb_register) {
        document.querySelector('div[class="login-panel"]').style.backgroundColor = "white";
        document.querySelector('label[id="form-title"]').textContent = 'Login';
    }
}