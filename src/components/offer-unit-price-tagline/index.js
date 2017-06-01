import {h} from 'preact';
import {isLegitPogIdItem} from '../../modules/validateData';
import style from './style.less';

// mainWrapper
const OfferUnitPriceTagline = ({item}) => {
  if (isLegitPogIdItem(item)) {
    const {finalPrice, mrp} = item.commonMinProductDetailsDTO.priceInfo;
    // price & discount
    return (
      <OfferPriceAndMRP price={finalPrice} mrp={mrp} />
    );
  } else {
    // tagLine
    return (
      <GetTagLineUnit item={item} />
    );
  }
};

// +++++ PRICE
const OfferPriceAndMRP = ({price, mrp}) => {
  if (price === mrp) {
    return (
      <OfferPriceOnly price={price} />
    );
  } else {
    return (
      <OfferPriceMRP price={price} mrp={mrp} />
    );
  }
};
const OfferPriceOnly = ({price}) => {
  return (
    <div class={style.offerUnitPriceTaglineWrapper}>
      <span class={style.offerUnitDisplayPriceTagline}>{`Rs. ${price}`}</span>
    </div>
  );
};
const OfferPriceMRP = ({mrp, price}) => {
  return (
    <div class={style.offerUnitPriceTaglineWrapper}>
      <span class={style.offerUnitMRP}>{`Rs. ${mrp}`}</span>
      <span class={style.offerUnitDisplayPriceTagline}>{`Rs. ${price}`}</span>
    </div>
  );
};

// +++++ TAGLINE
const TagLineUnit = ({tagline}) => (
  <div className={style.offerUnitPriceTaglineWrapper}>
    <div className={style.offerUnitDisplayPriceTagline}>{tagline}</div>
  </div>
  );

const GetTagLineUnit = ({item}) => {
  const tagline = item.extraField1;
  return TagLineUnit({tagline});
};

export default OfferUnitPriceTagline;
