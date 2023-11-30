const title = document.querySelector(".section-forum__title");
const myTimer = setTimeout();
let firstBtn = document.querySelector(".section-forum__btn-first");
let secondBtn = document.querySelector(".section-forum__btn-second");

if (firstBtn.addEventListener("click", firstStep)) {
    if (firstBtn.addEventListener("click", secondStep)) {
    } else secondBtn.addEventListener("click", secondStep);
} else if (secondBtn.addEventListener("click", firstStep)) {
}

function firstStep() {
    title.innerHTML = "Вы чувствуете боль?";
    firstBtn.innerHTML = "Да";
    secondBtn.innerHTML = "Нет";
}

function secondStep() {
    title.innerHTML = "Вы девственник?";
    firstBtn.innerHTML = "Да";
    secondBtn.innerHTML = "Нет";
}
