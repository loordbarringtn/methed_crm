/* eslint-disable max-len */
import {totalPriceField, modalWindowTotalPrice, modalWindowPrice, modalWindowQuantity} from './eventsControl.js';

const calculateTotalPrice = (array) => {
  const totalPrice = array.reduce((accumulator, object) =>
    accumulator + (object.price * object.count), 0);
  totalPriceField.textContent = `$ ${totalPrice}`;
};

const generateRandomId = () => Math.floor(Math.random() * 10) +
    Date.now().toString().slice(0, 5) + Math.floor(Math.random() * 100);

const calculateModalTotalPrice = () => {
  modalWindowTotalPrice.textContent = modalWindowPrice.value * modalWindowQuantity.value;
};

export {calculateTotalPrice, generateRandomId, calculateModalTotalPrice};
