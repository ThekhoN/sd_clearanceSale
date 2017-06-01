import {h} from 'preact';
import style from './style.less';
import {isLegitPogIdItem} from '../../modules/validateData';

const OfferUnitDiscount = ({item}) => {
  if (isLegitPogIdItem(item)) {
    const {discount} = item.commonMinProductDetailsDTO.priceInfo;
    if (!discount || discount === null || discount === 0) {
      return null;
    } else {
      if (discount > 10) {
        return (
          <div class={style.offerUnitDiscountWrapper}>
            <span>{`${discount}% Off`}</span>
          </div>
        );
      } else {
        return null;
      }
    }
  }
};

export default OfferUnitDiscount;
