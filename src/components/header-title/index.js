import {h} from 'preact';
import style from './style.less';

const HeaderTitle = ({title, subTitle}) => (
  <div className={style.headerTitle}>
    <h3>{title}</h3>
    <span>{subTitle}</span>
  </div>
);

export default HeaderTitle;
