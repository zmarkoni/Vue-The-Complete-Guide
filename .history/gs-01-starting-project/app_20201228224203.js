const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const listEl = document.querySelector('ul');


function addGoal() {
    const enteredValue = inputEl.value;
    const listItemEl = document.createElement('li');
}

buttonEl.addEventListener('click', addGoal);