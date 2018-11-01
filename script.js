const signInDiv = document.querySelector(".signInDiv");
const signUpDiv = document.querySelector(".signUpDiv");
const registerDiv = document.querySelector(".register");
const loginDiv = document.querySelector(".login");
const signUpBtn = document.getElementById("signUpBtn");
const signInBtn = document.getElementById("signInBtn");

const changeVisible = (contentShow, contentHide, btnDeactive, btnActive, footerShow, footerHide) => {
    contentHide.style.display = 'none';
    contentShow.style.display = 'block';
    btnActive.classList.add("sign-active");
    btnDeactive.classList.remove("sign-active");
    footerHide.style.display = 'none';
    footerShow.style.display = 'block';
};
signUpBtn.addEventListener("click", () => {
    changeVisible(signUpDiv, signInDiv, signInBtn, signUpBtn, loginDiv, registerDiv);
});
signInBtn.addEventListener("click", () => {
    changeVisible(signInDiv, signUpDiv, signUpBtn, signInBtn, registerDiv, loginDiv);
});






const validationCorrect = () => {
    setTimeout(() => {
        alert("Formularz wypełniony poprawnie");

    }, 500);
};

// signIn validation

const signInValidation = () => {
    const fullName = document.querySelector('.signInDiv input[data-type="fullname"]');
    const email = document.querySelector('.signInDiv input[data-type="email"]');
    const password = document.querySelector('.signInDiv input[data-type="password"]');
    const verPassword = document.querySelector('.signInDiv input[data-type="verPassword"]');
    const terms = document.querySelector('.signInDiv input[data-type="terms"]');

    const fullNameValidation = () => {
        if (fullName.value.length >= 3) {
            fullName.parentElement.style.borderBottom = "3px solid green";
            return true;
        } else {
            fullName.parentElement.style.borderBottom = "3px solid red";
            return false;
        }
    };
    const emailValidation = () => {
        const dot = email.value.indexOf(".");
        const mail = email.value.indexOf("@");
        if (email.value.length >= 3 && dot !== -1 && mail !== -1) {
            email.parentElement.style.borderBottom = "3px solid green";
            return true;
        } else {
            email.parentElement.style.borderBottom = "3px solid red";
            return false;
        }
    };
    const passwordValidation = () => {
        const upperCaseLetters = password.value.replace(/[^A-Z]/g, "").length;
        if (password.value.length >= 3 && upperCaseLetters) {
            password.parentElement.style.borderBottom = "3px solid green";
            return true;
        } else {
            password.parentElement.style.borderBottom = "3px solid red";
            return false;
        }
    };
    const verPasswordValidation = () => {
        const upperCaseLetters = verPassword.value.replace(/[^A-Z]/g, "").length;
        if (verPassword.value.length >= 3 && upperCaseLetters) {
            if (password.value === verPassword.value) {
                verPassword.parentElement.style.borderBottom = "3px solid green";
                return true;
            } else {
                verPassword.parentElement.style.borderBottom = "3px solid red";
                return false;
            }
        } else {
            verPassword.parentElement.style.borderBottom = "3px solid red";
            return false;
        }
    };
    const fullNameScore = fullNameValidation();
    const emailScore = emailValidation();
    const passwordScore = passwordValidation();
    const verPasswordScore = verPasswordValidation();
    const termsScore = terms.checked;

    if (fullNameScore && emailScore && passwordScore && verPasswordScore && termsScore) {
        validationCorrect();
    }

};

// signUp

const signUpValidation = () => {
    const email = document.querySelector('.signUpDiv input[data-type="email"]');
    const password = document.querySelector('.signUpDiv input[data-type="password"]');
    const correctPassword = "User";
    const correctEmail = "user@gmail.com";
    const emailScore = false;
    const passwordScore = false;
    if (email.value === correctEmail) {
        email.parentElement.style.borderBottom = "3px solid green";
        if (password.value === correctPassword) {
            password.parentElement.style.borderBottom = "3px solid green";
            validationCorrect();
            return true;
        } else {
            password.parentElement.style.borderBottom = "3px solid red";
            return false;
        }
    } else {
        email.parentElement.style.borderBottom = "3px solid red";
        return false;
    }
}
document.querySelector(".register button").addEventListener("click", signInValidation);
document.querySelector(".login button").addEventListener("click", signUpValidation);