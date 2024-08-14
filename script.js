let input = document.querySelector('input')
const btnBox = document.querySelector('.btn__box')
let result = document.querySelector('.output__box > h2');
let history = document.querySelector('.history > ul');

function appendHistory() {
    history.innerHTML += `<li>
                    <p>${input.value}</p>
                    <h5>${result.textContent}</h5>
                 </li>`
}

btnBox.addEventListener('click', (e) => {
    const btn = e.target.textContent.trim()
    if (btn.length < 12) {
        if (btn === 'Clear All') {
            input.value = '';
            result.textContent = '0';
        } else if (btn === 'clear') {
            input.value = input.value.slice(0, -1)
            if (input.value === '') {
                result.textContent = '0'
            } else {
                result.textContent = eval(input.value);
            }
        } else if (!(btn === '=')) {
            input.value += btn;
        } else if (!(input.value === '')) {
            result.textContent = eval(input.value);
            if (history.innerText === "There's is no history yet!") {
                history.innerText = '';
                appendHistory()
            } else {
                appendHistory()
            }

        }
    }
})
history.addEventListener('click', (e)=>{
    console.log(e.target.value);
        if(e.target.tagName === 'LI'){
            
        }
})

