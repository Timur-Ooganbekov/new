const block = document.querySelector('.block');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');

let count = 1;

btnNext.onclick = () => {
    countFunc(1);
};
btnPrev.onclick = () => {
    countFunc(-1);
};

async function countFunc(numb) {
    if (count === 1 && numb === -1) {
        return;
    }
    count += numb;
    await getId();
}

async function getId() {
    try {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/todos/${count}`
        );
        const data = await response.json();
        block.innerHTML = `
            <h2>${data.title}</h2>
            <span>${data.id}</span>
            <h3>${data.completed}</h3>
        `;
    } catch (error) {
        console.error(error);
    }
}

getId();