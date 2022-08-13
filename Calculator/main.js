
const display = document.getElementById('display');
const buttons = Array.from(document.querySelectorAll('.button'));


buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'AC':
                display.innerText = '';
                break;
            case 'Delete':
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = '';
                }
                break;
            case '√':
                display.innerText = Math.sqrt(display.innerText);
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});