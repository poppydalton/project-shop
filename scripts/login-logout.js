document.addEventListener('DOMContentLoaded', function () {
    showSignInOut();
    updateLoginUi();
    attachLogoutHandler();
});

function showSignInOut() {
    const btnLogin = document.getElementById('btnLogin');
    const btnLogout = document.getElementById('btnLogout');

    if (!btnLogin || !btnLogout) {
        return;
    }

    if (isAuthN()) {
        btnLogout.classList.remove('d-none');
        btnLogin.classList.add('d-none');
    } else {
        btnLogout.classList.add('d-none');
        btnLogin.classList.remove('d-none');
    }
}

function updateLoginUi() {
    const userGreeting = document.getElementById('userGreeting');
    const authBadge = document.getElementById('authBadge');

    if (userGreeting) {
        if (isAuthN()) {
            userGreeting.textContent = `hello, ${sessionStorage.getItem('username') || 'shopper'}`;
        } else {
            userGreeting.textContent = 'not signed in';
        }
    }

    if (authBadge) {
        if (isAuthN()) {
            authBadge.textContent = 'Logged In';
            authBadge.className = 'badge blush-auth-badge blush-auth-badge-in';
        } else {
            authBadge.textContent = 'Logged Out';
            authBadge.className = 'badge blush-auth-badge';
        }
    }
}

function attachLogoutHandler() {
    const btnLogout = document.getElementById('btnLogout');

    if (!btnLogout) {
        return;
    }

    btnLogout.addEventListener('click', function () {
        sessionStorage.clear();
        sessionStorage.setItem('isAuthN', 'false');

        showSignInOut();
        updateLoginUi();
        updateSessionValuesOnPage();

        showLogoutToast();
    });
}

function showLogoutToast() {
    const toastContainer = document.getElementById('toast-container');

    if (!toastContainer) {
        return;
    }

    const toast = document.createElement('div');
    toast.className = 'toast align-items-center text-bg-success border-0 show';
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'assertive');
    toast.setAttribute('aria-atomic', 'true');

    toast.innerHTML = `
    <div class="d-flex">
      <div class="toast-body">You have been logged out.</div>
      <button type="button" class="btn-close btn-close-white me-2 m-auto" aria-label="Close"></button>
    </div>
  `;

    toastContainer.appendChild(toast);

    toast.querySelector('.btn-close').addEventListener('click', function () {
        toast.remove();
    });

    setTimeout(function () {
        toast.remove();
    }, 3000);
}