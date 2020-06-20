import './index.less';

import { a } from './a';

function writeCode() {
  document.getElementById('root').innerText = 'hello world!';

  console.log('>>>>>> a', a);
}

writeCode();