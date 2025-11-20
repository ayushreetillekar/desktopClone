const textSection = document.getElementById('text');
const addBtn = document.getElementById('add-btn');
const listArea = document.querySelector('.list-area')

let count = 1;

function RenderList() {
    addBtn.addEventListener('click', () => {
        const list = document.createElement('li');

        const button1 = document.createElement('button');
        button1.innerHTML = count++;

        const spanText = document.createElement('span');
        spanText.textContent = textSection.value;

        const button2 = document.createElement('button');
        button2.innerHTML = 'X';
        button2.addEventListener('click', () => {
            list.remove();
        })
        list.appendChild(button1);
        list.appendChild(spanText);
        list.appendChild(button2);
        listArea.appendChild(list);
        textSection.value = "";
    })
}
RenderList()
