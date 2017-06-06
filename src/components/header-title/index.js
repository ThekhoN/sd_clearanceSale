import {h} from 'preact';
import style from './style.less';

const HeaderTitle = ({title}) => (
  <div className={style.headerTitle}>
    <h3>{title}</h3>
  </div>
);

export default HeaderTitle;
