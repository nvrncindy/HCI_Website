document.addEventListener("DOMContentLoaded", () => {
    let menu = document.querySelector('.icon');
    let nav = document.querySelector('.nav');

    menu.onclick = () => {
        menu.classList.toggle('bx-x');
        nav.classList.toggle('open');
    }

    window.onscroll = () => {
        menu.classList.remove('bx-x');
        nav.classList.remove('open');
    }

        const form = document.querySelector("form");
    
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            if (!validateForm(form)) return;
    
        });
    
        const validateForm = (form) => {
            let valid = true;
    
            let first = form.querySelector("[name='first']");
            let last = form.querySelector("[name='last']");
            let email = form.querySelector("[name='email']");
            let phone = form.querySelector("[name='phone']");
    
            clearError(first);
            clearError(last);
            clearError(email);
            clearError(phone);
    
            if (first.value.trim() === "") {
                giveError(first, "Please enter your first name");
                valid = false;
            }
    
            if (last.value.trim() === "") {
                giveError(last, "Please enter your last name");
                valid = false;
            }
    
            if (!validateEmail(email.value.trim())) {
                giveError(email, "Invalid email format");
                valid = false;
            }
    
            const isNumeric = (str) => !isNaN(str) && !isNaN(parseFloat(str));
            if (phone.value.trim() === "") {
                giveError(phone, "Please enter your phone number");
                valid = false;
            } else if (!isNumeric(phone.value.trim())) {
                giveError(phone, "Phone number must be numeric");
                valid = false;
            }
    
            return valid;
        };
    
        const validateEmail = (email) => {
            if (email === '') return false;
            const atIndex = email.indexOf('@');
            const dotIndex = email.lastIndexOf('.');
            return atIndex > 0 && dotIndex > atIndex + 1 && dotIndex < email.length - 1;
        };
    
        const giveError = (field, message) => {
            let parentElement = field.parentElement;
            parentElement.classList.add("error");
            let existingError = parentElement.querySelector(".error-message");
            if (existingError) {
                existingError.textContent = message;
            } else {
                let error = document.createElement("span");
                error.textContent = message;
                error.classList.add("error-message");
                parentElement.appendChild(error);
            }
        };
    
        const clearError = (field) => {
            let parentElement = field.parentElement;
            parentElement.classList.remove("error");
            let existingError = parentElement.querySelector(".error-message");
            if (existingError) {
                existingError.textContent = "";
            }
        };
    });
    