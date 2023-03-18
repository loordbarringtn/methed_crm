// import {renderGoods} from './renderAndCreate.js';
// import {db} from './db.js';

// const start = () => {
//   renderGoods(db);
//   localStorage.setItem('db', db);
// };

// window.start = start;




import {renderGoods} from './renderAndCreate.js';
import {getDb} from './db.js';

const start = () => {
  renderGoods(getDb());
  localStorage.setItem('db', getDb());
};

window.start = start;


