const inputs = document.querySelectorAll(".input");
const errorMMYY = document.querySelector(".error-label-mm-yy");

const btnConfirm = document.querySelector(".btn--confirm");
const btnContinue = document.querySelector(".btn--continue");

const imgNumber = document.querySelector(".img--number");
const imgName = document.querySelector(".img--name");
const imgMM = document.querySelector(".img--mm");
const imgYY = document.querySelector(".img--yy");

const errorMessage = "Can't be blank";

function error(el, message, type) {
    el.parentElement.querySelector(".error-label").textContent = message;
    el.classList[type]("input-error");
}

function checkIfBlank(el, blankMessage = errorMessage) {
    if (el.value === "") {
        error(el, blankMessage, "add");
        return true;
    } else {
        error(el, "", "remove");
        return false;
    }
}

function fillUpCardImg(mm, yy, num, name) {
    imgMM.textContent = mm;
    imgYY.textContent = yy;
    imgName.textContent = name;
    imgNumber.textContent = num;
}

function checkInputError(input) {
    if (input.value === "") {
        errorMMYY.textContent = errorMessage;
        input.classList.add("input-error");
        return true;
    } else {
        errorMMYY.textContent = "";
        input.classList.remove("input-error");
        return false;
    }
}

function toggleModal(el, el2) {
    el2.classList.remove("active");
    el.classList.add("active");
}

function handleCardDetails(e) {
    e.preventDefault();
    let hasError = false;

    inputs.forEach((input) => {
        if (
            input.classList.contains("input__mm") ||
            input.classList.contains("input__yy")
        ) {
            checkInputError(input);
            hasError = checkInputError(input);
        } else {
            checkIfBlank(input);
            hasError = checkIfBlank(input);
        }
    });

    if (!hasError) {
        fillUpCardImg(
            document.querySelector(".input__mm").value,
            document.querySelector(".input__yy").value,
            document.querySelector(".input__number").value,
            document.querySelector(".input__name").value
        );

        toggleModal(
            document.querySelector(".complete"),
            document.querySelector(".form")
        );
    }
}

function cleanForm(inputs) {
    inputs.forEach((input) => (input.value = ""));
}

function handleContinue(e) {
    e.preventDefault();
    toggleModal(
        document.querySelector(".form"),
        document.querySelector(".complete")
    );
    cleanForm(inputs);
}

btnConfirm.addEventListener("click", handleCardDetails);
btnContinue.addEventListener("click", handleContinue);
