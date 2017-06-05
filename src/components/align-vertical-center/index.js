import {h} from 'preact';
import style from './style.less';

const AlignVerticalCenterWrapper = ({children}) => (
  <div className={style.alignVerticalCenterWrapper}>
    <div className={style.alignVerticalCenter}>
      {children}
    </div>
  </div>
);

export default AlignVerticalCenterWrapper;
