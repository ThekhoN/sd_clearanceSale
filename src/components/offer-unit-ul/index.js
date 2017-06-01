import {h, Component} from 'preact';
import style from './style.less';

const OfferUnitUl = ({children}) => (
  <ul class={style.offerUnitUl}>
    {children}
  </ul>
);

export default OfferUnitUl;
