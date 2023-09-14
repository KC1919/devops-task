function handleFormSubmit(e) {
    try {
        e.preventDefault();

        const name = document.getElementById('name').value;

        console.log(name);

        alert(`Hello ${name}`);
    } catch (error) {
        console.log("Failed to submit form");
    }
}