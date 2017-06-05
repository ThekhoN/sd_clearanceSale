import {h} from 'preact';
import style from './style.less';
import {isLegitPogIdItem} from '../../modules/validateData';

const OfferUnitDiscountWrapper = ({children}) => (
  <div class={style.offerUnitDiscountWrapper}>
    {children}
  </div>
);

const OfferUnitDiscount = ({item}) => {
  if (isLegitPogIdItem(item)) {
    const {discount} = item.commonMinProductDetailsDTO.priceInfo;
    if (!discount || discount === null || discount === 0) {
      return <OfferUnitDiscountWrapper />;
    } else {
      if (discount > 10) {
        return (
          <div class={style.offerUnitDiscountWrapper}>
            <span>{`${discount}% Off`}</span>
          </div>
        );
      } else {
        return <OfferUnitDiscountWrapper />;
      }
    }
  }
};

export default OfferUnitDiscount;
