function isAuthN() {
    console.log('isAuthN?', sessionStorage.getItem('isAuthN'));
    return sessionStorage.getItem('isAuthN') === 'true';
}

function updateSessionValuesOnPage() {
    const authElements = document.querySelectorAll('#sessionAuthValue');
    const userElements = document.querySelectorAll('#sessionUserValue');
    const categoryElements = document.querySelectorAll('#sessionCategoryValue');

    authElements.forEach(element => {
        element.textContent = sessionStorage.getItem('isAuthN') || 'false';
    });

    userElements.forEach(element => {
        element.textContent = sessionStorage.getItem('username') || 'none';
    });

    categoryElements.forEach(element => {
        element.textContent = sessionStorage.getItem('currentCategory') || 'none';
    });
}

function attachClearSessionButton() {
    const clearButton = document.getElementById('clearSessionButton');

    if (!clearButton) {
        return;
    }

    clearButton.addEventListener('click', function () {
        sessionStorage.clear();
        sessionStorage.setItem('isAuthN', 'false');
        updateSessionValuesOnPage();

        const authBadge = document.getElementById('authBadge');
        const userGreeting = document.getElementById('userGreeting');
        const btnLogin = document.getElementById('btnLogin');
        const btnLogout = document.getElementById('btnLogout');

        if (authBadge) {
            authBadge.textContent = 'Logged Out';
        }

        if (userGreeting) {
            userGreeting.textContent = 'not signed in';
        }

        if (btnLogin) {
            btnLogin.classList.remove('d-none');
        }

        if (btnLogout) {
            btnLogout.classList.add('d-none');
        }

        showSessionToast('Session data cleared.');
    });
}

function showSessionToast(message) {
    const toastContainer = document.getElementById('toast-container');

    if (!toastContainer) {
        return;
    }

    const toast = document.createElement('div');
    toast.className = 'toast align-items-center text-bg-dark border-0 show';
    toast.setAttribute('role', 'alert');
    toast.setAttribute('aria-live', 'assertive');
    toast.setAttribute('aria-atomic', 'true');

    toast.innerHTML = `
    <div class="d-flex">
      <div class="toast-body">${message}</div>
      <button type="button" class="btn-close btn-close-white me-2 m-auto" aria-label="Close"></button>
    </div>
  `;

    toastContainer.appendChild(toast);

    toast.querySelector('.btn-close').addEventListener('click', function () {
        toast.remove();
    });

    setTimeout(function () {
        toast.remove();
    }, 2500);
}

document.addEventListener('DOMContentLoaded', function () {
    updateSessionValuesOnPage();
    attachClearSessionButton();
});