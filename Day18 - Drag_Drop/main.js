const boxes = document.querySelectorAll('.box');
const target = document.querySelector('.target');

target.addEventListener('dragstart', dragStart);

function dragStart(e) {
    e.dataTransfer.setData("text", e.target.id);
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0);
}

boxes.forEach(box => {
    box.addEventListener('dragenter', dragEnter)
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', drop);
});

function dragEnter(e){
    e.target.classList.add('drag-over');
    e.preventDefault();
}

function dragOver(e){
    e.target.classList.add('drag-over');
    e.preventDefault();
}

function dragLeave(e){
     e.target.classList.remove('drag-over');
}   

function drop(e){
    e.target.classList.remove('drag-over');

    var id = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(id));

    e.target.classList.remove('.hidden')
}

