import {h} from 'preact';
import style from './style.less';

const NonImgWrapper = ({children}) => (
  <div class={style.nonImgWrapper}>
    {children}
  </div>
);

export default NonImgWrapper;
