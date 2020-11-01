const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.querySelector(".email");

    if (!email.value) {
        Swal.fire(
            'Oopss!',
            'Please enter a valid email',
            'error'
        );
        return;
    }

    Swal.fire(
        'Well Done!',
        'Thank you for subscribing!',
        'success'
    );
    email.value = "";
})