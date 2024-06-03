function changeFormTitle() {

    const cb_register = document.querySelector('input[name="show-register-new-user-checkbox"]').checked;

    if (cb_register) {
        document.querySelector('div[class="login-panel"]').style.backgroundColor = "aquamarine";
        document.querySelector('label[id="form-title"]').textContent = 'Register new User';
        document.querySelector('input[name="username"]').style.display = 'block';
        document.querySelector('input[name="repeated-password"]').style.display = 'block';
        document.querySelector('input[name="remember-credentials"]').style.display = 'none';
        document.querySelector('label[name="remember-credentials-label"]').style.display = "none";
        document.querySelector('button[name="submit_button"]').textContent = 'Register';
    } else if (!cb_register) {
        document.querySelector('div[class="login-panel"]').style.backgroundColor = "white";
        document.querySelector('label[id="form-title"]').textContent = 'Login';
        document.querySelector('input[name="username"]').style.display = 'none';
        document.querySelector('input[name="repeated-password"]').style.display = 'none';
        document.querySelector('input[name="remember-credentials"]').style.display = 'inline-block';
        document.querySelector('label[name="remember-credentials-label"]').style.display = "inline-block";
        document.querySelector('button[name="submit_button"]').textContent = 'Login';
    }
}