document.addEventListener('DOMContentLoaded', function () {
    console.log('password is: 1234');

    const loginButton = document.getElementById('login-button');
    const togglePassword = document.getElementById('togglePassword');
    const loginMessage = document.getElementById('loginMessage');

    if (togglePassword) {
        togglePassword.addEventListener('click', function () {
            const passwordInput = document.getElementById('password');
            const icon = togglePassword.querySelector('i');

            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                icon.className = 'bi bi-eye';
            } else {
                passwordInput.type = 'password';
                icon.className = 'bi bi-eye-slash';
            }
        });
    }

    if (loginButton) {
        loginButton.addEventListener('click', function () {
            console.log('clicked');

            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value;


            if (!username) {
                console.log('username missing');
                loginMessage.textContent = 'Please enter a username.';
                sessionStorage.setItem('isAuthN', 'false');
                return;
            }

            if (password === '1234') {
                console.log('user is authenticated');
                sessionStorage.setItem('username', username);
                sessionStorage.setItem('isAuthN', 'true');

                loginMessage.textContent = '';
                window.location.assign('../index.html');
            }

            if (password !== '1234') {
                sessionStorage.setItem('isAuthN', 'false');
                loginMessage.textContent = 'Incorrect password. Try 1234.';
            }

        });
    }
});