import {h} from 'preact';
import {isLegitPogIdItem} from '../../modules/validateData';
import style from './style.less';

const OfferUnitTitle = ({item}) => {
  let title;
  if (isLegitPogIdItem(item)) {
    title = item.offerName || item.commonMinProductDetailsDTO.title;
  } else {
    title = item.offerName;
  }
  return (
    <div class={style.offerUnitTitle}>
      {title}
    </div>
  );
};

export default OfferUnitTitle;
