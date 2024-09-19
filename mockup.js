function loadHTML(file, elementId) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', file, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById(elementId).innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}

// Call the function to load the nav.html
loadHTML('nav.html', 'nav-placeholder');

function redirectToSignup() {
    // Redirect to signup page
    window.location.href = 'signup.html';
}

function redirectRegistration() {
    window.location.href = 'registration.html';
}

function redirectPatientProfile() {
    window.location.href = 'patient_profile.html';
}
