const title = document.querySelector(".section-forum__title");
let firstBtn = document.querySelector(".section-forum__btn-first");
let secondBtn = document.querySelector(".section-forum__btn-second");

firstBtn.addEventListener("click", firstStep);
secondBtn.addEventListener("click", firstStep);

function firstStep() {
    title.innerHTML = "Вы чувствуете боль?";
    firstBtn.innerHTML = "Да";
    secondBtn.innerHTML = "Нет";
    firstBtn.addEventListener("click", secondStep);
    secondBtn.addEventListener("click", secondStep);
}

function secondStep() {
    title.innerHTML = "Вы девственник?";
    firstBtn.innerHTML = "Да";
    secondBtn.innerHTML = "Нет";
    firstBtn.addEventListener("click", thirdStepFirstWay);
    secondBtn.addEventListener("click", thirdStepSecondWay);
}

function thirdStepFirstWay() {
    title.innerHTML = "Ну ты и лузер!!!";
    firstBtn.className = "hidden";
    secondBtn.className = "hidden";
    firstBtn.addEventListener("click", thirdStepFirstWay);
    secondBtn.addEventListener("click", thirdStepFirstWay);
}

function thirdStepSecondWay() {
    title.innerHTML = "Отвечайте честно!";
    firstBtn.innerHTML = "Окей, я девственник";
    secondBtn.className = "hidden";
    firstBtn.addEventListener("click", thirdStepFirstWay);
    secondBtn.addEventListener("click", thirdStepFirstWay);
}
