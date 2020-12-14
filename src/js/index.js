import '../styles/a.css';
import '../styles/b.css';
// 引入 iconfont 样式文件
import '../styles/iconfont.css';
import '../styles/index.less';

const add = (x, y) => x + y; // presets: ['@babel/preset-env']

// eslint-disable-next-line no-console
console.log(add(1, 3));
// eslint-disable-next-line no-console
console.log('test...');
// eslint-disable-next-line no-new
const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, 1000);
});

// eslint-disable-next-line no-console
console.log(promise);
