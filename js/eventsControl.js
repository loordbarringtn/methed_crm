/* eslint-disable max-len */
import {generateRandomId, calculateModalTotalPrice, calculateTotalPrice} from './helpers.js';
import {renderGoods, createRow} from './renderAndCreate.js';
// import {db} from './db.js';
import {getDb, setDb} from './db.js';


const formSelector = document.querySelector('.modal__fieldset');
const checkBoxOnFormSelector = document.querySelector('.modal__checkbox');
const discountFieldSelector = document.querySelector('.modal__input_discount');
const overlay = document.querySelector('.overlay');
const tableBody = document.querySelector('.table__body');
const overlayModal = document.querySelector('.overlay__modal');
const addGoodsButton = document.querySelector('.panel__add-goods');
const cmsGoods = document.querySelector('.cms__goods');
const totalPriceField = document.querySelector('.cms__total-price');
const vendorCodeId = document.querySelector('.vendor-code__id');
const modalWindowQuantity = document.querySelector('#count');
const modalWindowPrice = document.querySelector('#price');
const modalWindowTotalPrice = document.querySelector('.modal__total-price');
const form = document.querySelector('.modal__form');


const openModal = () => {
  overlay.classList.add('active');
  vendorCodeId.textContent = generateRandomId();
  modalWindowTotalPrice.textContent = 0;
  generateRandomId();
};

const closeModal = () => {
  overlay.classList.remove('active');
};

// const deleteObject = (id) => {
//     const filteredDb = db.filter((item) => item.id !== parseInt(id));
//     db = filteredDb;
//     renderGoods(filteredDb);
//   };
  

// const deleteObject = (id) => {
//   db = db.filter((item) => item.id !== parseInt(id));
//   renderGoods(db);
// };


// const deleteObject = (id) => {
//     const filteredDb = db.filter((item) => item.id !== parseInt(id));
//     renderGoods(filteredDb);
//     db = filteredDb;
//   };


//   const deleteObject = (id) => {
//     // setDb(getDb().filter((item) => item.id !== parseInt(id)));
//     // const updatedDb = getDb().filter((item) => item.id !== parseInt(id));
//     // setDb(updatedDb);

//     setDb(getDb().filter((item) => item.id !== parseInt(id)));



//     //   db = db.filter((item) => item.id !== parseInt(id));
//   renderGoods(getDb());
// };
  

const deleteObject = (id) => {
    console.log(id);
    const db = getDb();
    const itemIndex = db.findIndex(item => item.id === parseInt(id));
    
    if (itemIndex !== -1) {
      db.splice(itemIndex, 1);
      renderGoods(db);
      setDb(db);
    }
  };

// const deleteObject = (id) => {
//     const newDb = getDb().filter((item) => item.id !== parseInt(id));
//     setDb(newDb);
//     renderGoods(newDb);
//   };


// const deleteObject = (id) => {
    
//     setDb(getDb().filter((item) => item.id !== parseInt(id)));
//     renderGoods(getDb());
//   };

// const deleteObject = (id) => {

//     // import {db} from './db.js';
//        let currentIndex;
//        db.forEach((item, index) => {
//          if(item.id === parseInt(id)) {
//            currentIndex = index;
//          }
//        });
//        db.splice(currentIndex, 1);
//        renderGoods(db);
//     };

cmsGoods.addEventListener('click', (e) => {
  const target = e.target;
  if (target === addGoodsButton) {
    openModal();
  } else if (target === target.closest('.table__btn_del')) {
    const tableRow = target.closest('tr');
    const getId1 = tableRow
      .querySelector('.table__cell_name')
      .getAttribute('data-id');
    deleteObject(getId1);
    tableRow.remove();
  }
});

overlay.addEventListener('click', (e) => {
  const target = e.target;
  if (target === overlay || target.closest('.modal__close')) {
    document.querySelector('.overlay').classList.remove('active');
  }
});

[modalWindowPrice, modalWindowQuantity].forEach(item => {
  item.addEventListener('blur', calculateModalTotalPrice);
});

overlayModal.addEventListener('click', (e) => {
  const target = e.target;
  if (target === checkBoxOnFormSelector) {
    if (checkBoxOnFormSelector.checked) {
      discountFieldSelector.disabled = false;
    } else {
      discountFieldSelector.disabled = true;
      discountFieldSelector.value = null;
    }
  } else if (target === formSelector || target === form) {
    calculateModalTotalPrice();
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const newGood = Object.fromEntries(formData);
  console.log(newGood);
  newGood.id = parseInt(vendorCodeId.textContent);
  newGood.title = document.getElementById('name').value;
  console.log(newGood);

  console.log(typeof getDb());

//   setDb(getDb().push(newGood));
  getDb().push(newGood);
  console.log(getDb());
  console.log(typeof getDb());

//   getDb().push(newGood);



//   tableBody.append(createRow(newGood, getDb().length++));

// tableBody.append(createRow(newGood, getDb().push(newGood)));

  tableBody.append(createRow(newGood, getDb().length++));

  form.reset();
  closeModal();
  calculateTotalPrice(getDb());
});

export {
  formSelector,
  checkBoxOnFormSelector,
  discountFieldSelector,
  overlay,
  tableBody,
  overlayModal,
  addGoodsButton,
  cmsGoods,
  totalPriceField,
  vendorCodeId,
  modalWindowQuantity,
  modalWindowPrice,
  modalWindowTotalPrice,
  form,
};
