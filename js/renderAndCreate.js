import {tableBody} from './eventsControl.js';
import {calculateTotalPrice} from './helpers.js';

const createRow = (object, index) => {
  const tableRow = document.createElement('tr');
  const tableData1 = document.createElement('td');
  const tableData2 = document.createElement('td');
  const span = document.createElement('span');
  const tableData3 = document.createElement('td');
  const tableData4 = document.createElement('td');
  const tableData5 = document.createElement('td');
  const tableData6 = document.createElement('td');
  const tableData7 = document.createElement('td');
  const tableData8 = document.createElement('td');

  tableData1.classList.add('table__cell');
  tableData1.textContent = index;

  tableData2.classList.add(
    'table__cell',
    'table__cell_left',
    'table__cell_name',
  );
  tableData2.setAttribute('data-id', object.id);
  tableData2.textContent = object.title;
  span.classList.add('table__cell-id');
  span.textContent = `id: ${object.id}`;
  tableData2.prepend(span);
  tableData3.classList.add('table__cell', 'table__cell_left');
  tableData3.textContent = object.category;
  tableData4.classList.add('table__cell');
  tableData4.textContent = object.units;
  tableData5.classList.add('table__cell');
  tableData5.textContent = object.count;
  tableData6.classList.add('table__cell');
  tableData6.textContent = object.price;
  tableData7.classList.add('table__cell');
  tableData7.textContent = object.price * object.count;
  tableData8.classList.add('table__cell', 'table__cell_btn-wrapper');
  const button1 = document.createElement('button');
  button1.classList.add('table__btn', 'table__btn_pic');
  button1.setAttribute('data-pic', './img/imageForUploadWindow.png');
  const button2 = document.createElement('button');
  button2.classList.add('table__btn', 'table__btn_edit');
  const button3 = document.createElement('button');
  button3.classList.add('table__btn', 'table__btn_del');
  tableData8.append(button1, button2, button3);
  tableRow.append(
    tableData1,
    tableData2,
    tableData3,
    tableData4,
    tableData5,
    tableData6,
    tableData7,
    tableData8,
  );
  return tableRow;
};

const renderGoods = (array) => {
  tableBody.textContent = null;
  array.map((element, index) => {
    tableBody.append(createRow(element, ++index));
  });
  calculateTotalPrice(array);
};

export {createRow, renderGoods};