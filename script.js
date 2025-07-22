const table = document.querySelector('table');
const addRow = document.getElementById('add-row');


addRow.addEventListener('click', function () {
    makeRow();
})

function makeRow() {
    const tableRow = document.createElement('tr');
    for (let i = 0; i <60; i++){
        const td = document.createElement('td');
        tableRow.appendChild(td);
    }
    table.appendChild(tableRow);
}

let clrs = 'red';

table.addEventListener('click', colorize);

function colorize(event) {
    const target = event.target
    if (target.tagName !== "TD") {
      return
    }
    if (target.className === clrs) {
        target.className = '';
    } else {
        target.className = clrs;
    }
}

const colors = document.getElementsByTagName('select')[0];
colors.addEventListener('change', function (event) {
    clrs = event.target.value;
})

table.addEventListener("mousedown", addMouseOver);
function addMouseOver() {
  table.addEventListener("mouseover", colorize);
}


table.addEventListener("mouseup", removeMouseOver);
function removeMouseOver() {
  table.removeEventListener("mouseover", colorize);
}
