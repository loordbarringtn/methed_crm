import {renderGoods} from './renderAndCreate.js';
import {getDb} from './db.js';

const start = () => {
  renderGoods(getDb());
  localStorage.setItem('db', getDb());
};

window.start = start;


