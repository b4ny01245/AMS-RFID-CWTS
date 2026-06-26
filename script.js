function signUp() {
    var formData = new FormData(document.getElementById('instructorForm'));
    var url = 'https://script.google.com/macros/s/AKfycbynvPeV4jajM0WYaCYZxtq8oIAlAb2CB_qstJtG5XoCdTk4DzEvNKc0Qj12px11bt2-/exec'; // Replace with your Google Apps Script deployment URL

    fetch(url, {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            alert('Sign up successful!');
            // Optionally, you can redirect the user to a dashboard page
            window.location.href = 'dashboard.html';
        } else {
            alert('Sign up failed. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
}