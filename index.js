
const data = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
];

const table = document.createElement('table');
table.id = 'table';
const tbody = document.createElement('tbody');

const trList = _.map(data, (arr, indexRow) => {
    const tdList = _.map(arr, (val, indexCol) => (
        `<td class='bb' rel='${indexRow}_${indexCol}'>${val}</td>`
    ));
    return `<tr>${tdList.join('')}</tr>`;
});

tbody.innerHTML = trList.join('');
table.appendChild(tbody);
document.getElementById('root').appendChild(table);

const onHover = (rel) => {
    const [row, col] = rel.split('_');
    _.each(document.querySelectorAll('td'), (el)=>{
        const [rowEl, colEl] = el.getAttribute('rel').split('_');
        if ((rowEl === row && colEl < col) || (rowEl < row && colEl === col) ) {
            el.classList.add('secondHover');
        }
    });
};
table.onmouseover = (ev) => {
    const target =  ev.target;
    if (target.tagName.toUpperCase() === 'TD') {
        const dtStart = new Date();
        onHover(target.getAttribute('rel'));
        console.log('TimeAdd', new Date() - dtStart);
    }
};
table.onmouseout = (ev) => {
    const dtStartrm = new Date();
    const target =  ev.target;
    if (target.tagName.toUpperCase() === 'TD') {
        [].forEach.call(document.querySelectorAll('td'), (el) => {
            el.classList.remove('secondHover');
        });
    }
    console.log('TimeRm', new Date() - dtStartrm);
};
