const modalWindowTitleSelector = document.querySelector('.modal__title');
const formSelector = document.querySelector('.modal__fieldset');
const checkBoxOnFormSelector = document.querySelector('.modal__checkbox');
const discountFieldSelector = document.querySelector('.modal__input_discount');
const overlay = document.querySelector('.overlay');
const tableBody = document.querySelector('.table__body');
const overlayModal = document.querySelector('.overlay__modal');
const addGoodsButton = document.querySelector('.panel__add-goods');
const cmsGoods = document.querySelector('.cms__goods');

let db = [
  {
    id: 1,
    title: 'Смартфон Xiaomi 11T 8/128GB',
    price: 27000,
    description:
      'Смартфон Xiaomi 11T – это представитель флагманской линейки, выпущенной во второй половине 2021 года. И он полностью соответствует такому позиционированию, предоставляя своим обладателям возможность пользоваться отличными камерами, ни в чем себя не ограничивать при запуске игр и других требовательных приложений.',
    category: 'mobile-phone',
    discont: false,
    count: 3,
    units: 'шт',
    images: {
      small: 'img/smrtxiaomi11t-m.jpg',
      big: 'img/smrtxiaomi11t-b.jpg',
    },
  },
  {
    id: 2,
    title: 'Радиоуправляемый автомобиль Cheetan',
    price: 4000,
    description:
      'Внедорожник на дистанционном управлении. Скорость 25км/ч. Возраст 7 - 14 лет',
    category: 'toys',
    discont: 5,
    count: 1,
    units: 'шт',
    images: {
      small: 'img/cheetancar-m.jpg',
      big: 'img/cheetancar-b.jpg',
    },
  },
  {
    id: 3,
    title: 'ТВ приставка MECOOL KI',
    price: 12400,
    description:
      'Всего лишь один шаг сделает ваш телевизор умным, Быстрый и умный MECOOL KI PRO, прекрасно спроектированный, сочетает в себе прочный процессор Cortex-A53 с чипом Amlogic S905D',
    category: 'tv-box',
    discont: 15,
    count: 4,
    units: 'шт',
    images: {
      small: 'img/tvboxmecool-m.jpg',
      big: 'img/tvboxmecool-b.jpg',
    },
  },
  {
    id: 4,
    title: 'Витая пара PROConnect 01-0043-3-25',
    price: 22,
    description:
      'Витая пара Proconnect 01-0043-3-25 является сетевым кабелем с 4 парами проводов типа UTP, в качестве проводника в которых используется алюминий, плакированный медью CCA. Такая неэкранированная витая пара с одножильными проводами диаметром 0.50 мм широко применяется в процессе сетевых монтажных работ. С ее помощью вы сможете обеспечить развертывание локальной сети в домашних условиях или на предприятии, объединить все необходимое вам оборудование в единую сеть.',
    category: 'cables',
    discont: false,
    count: 420,
    units: 'v',
    images: {
      small: 'img/lan_proconnect43-3-25.jpg',
      big: 'img/lan_proconnect43-3-25-b.jpg',
    },
  },
];

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
    'table__cell_name'
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
    tableData8
  );
  return tableRow;
};

const renderGoods = (array) => {
  array.map((element, index) => {
    tableBody.append(createRow(element, ++index));
  });
};

const openModal = () => {
  overlay.classList.add('active');
};

const closeModal = () => {
  overlay.classList.remove('active');
};

const deleteObject = (id) => {
  db = db.filter((item) => item.id !== parseInt(id));
  console.log(db);
};

cmsGoods.addEventListener('click', (e) => {
  const target = e.target;

  if (target === addGoodsButton) {
    openModal();
  } else if (target === target.closest('.table__btn_del')) {
    const tableRow = target.closest('tr');
    const getId = tableRow
      .querySelector('.table__cell_name')
      .getAttribute('data-id');
    deleteObject(getId);
    tableRow.remove();
  }
});

overlay.addEventListener('click', (e) => {
  const target = e.target;
  console.log(target);
  if (target === overlay || target.closest('.modal__close')) {
    document.querySelector('.overlay').classList.remove('active');
  }
});

// tableBody.addEventListener('click', (e) => {
//   const target = e.target;
//   if (target === target.closest('.table__btn_del')) {
//     const tableRow = target.closest('tr');
//     const getId = tableRow
//       .querySelector('.table__cell_name')
//       .getAttribute('data-id');
//     deleteObject(getId);
//     tableRow.remove();
//   }
// });

overlayModal.addEventListener('click', (e) => {
  const target = e.target;
  if (target === checkBoxOnFormSelector) {
    if (checkBoxOnFormSelector.checked) {
      discountFieldSelector.disabled = false;
    } else {
      discountFieldSelector.disabled = true;
    }
  }
});

overlayModal.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  console.log(...[formData.entries()]);
  closeModal();
});

renderGoods(db);
