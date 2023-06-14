/*
if (document.readyState !== "loading") {
    initializeCodeRegsiter();
} else {
    document.addEventListener("DOMContentLoaded", () => {
        initializeCodeRegsiter();
    });
}

function initializeCodeRegsiter() {
    document.getElementById("registration-form").addEventListener("submit", onSubmit);
}
function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    fetch("/api/user/register", {
        method: "POST",
        body: formData
    })
    .then((response) => response.json())
    .then((data) => {
        if (data.token) {
            storeToken(data.token);
            window.location.href="/";
        } else {
            if (data.message)
        }
    })
}
*/