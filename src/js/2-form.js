const formData = {
    email: "",
    message: "",
};



const feedbackForm = document.querySelector(".feedback-form");
const emailArea = feedbackForm.elements.email;
const messageArea = feedbackForm.elements.message;
const localStorageKey = "feedback-form-state";


const savedData = JSON.parse(localStorage.getItem(localStorageKey)) ?? {};
formData.email = savedData.email ?? "";
formData.message = savedData.message ?? "";
emailArea.value = savedData.email ?? "";
messageArea.value = savedData.message ?? "";

feedbackForm.addEventListener("input", sendData);
function sendData(event) {
    formData.email = event.currentTarget.elements.email.value;
    formData.message = event.currentTarget.elements.message.value;
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

feedbackForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    if (emailArea.value === "" || messageArea.value === "") {
        alert("Fill please all field");
    }
    else {
        console.log(formData);
        formData.email = "";
        formData.message = "";
        localStorage.removeItem(localStorageKey);
        feedbackForm.reset();
    }
        
});
