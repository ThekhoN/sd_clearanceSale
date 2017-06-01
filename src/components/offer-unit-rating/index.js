import {h} from 'preact';
import {isLegitPogIdItem} from '../../modules/validateData';
import style from './style.less';

const getRatingElemWidth = rating => {
  let widthFactor = 0;
  const maxWidth = 70;
  const val = rating.toString();
  if (val < 1 || val > 5) {
    return false;
  }
  widthFactor = ((((val / 5) * 100) / 100) * maxWidth);
  widthFactor = Math.round(widthFactor * 10) / 10;
  return widthFactor;
};

const OfferUnitRatingWrapper = ({children}) => (
  <div class={style.offerUnitRatingWrapper}>
    {children}
  </div>
);

const OfferRatingContainer = ({ratingWidthFactor}) => (
  <OfferUnitRatingWrapper>
    <div class={style.offerUnitRatingDisabled}></div>
    <div class={style.offerUnitRatingEnabled} style={{width: ratingWidthFactor}}></div>
  </OfferUnitRatingWrapper>
);

const OfferUnitRating = ({item}) => {
  if(!isLegitPogIdItem(item)){
    return (
      <OfferUnitRatingWrapper />
    );
  } else {
    const avgRating = item.commonMinProductDetailsDTO.avgRating;
    const ratingWidthFactor = getRatingElemWidth(avgRating);
    if (!avgRating) {
      return (
        <OfferUnitRatingWrapper />
      );
    } else {
      return (
        <OfferRatingContainer ratingWidthFactor={ratingWidthFactor} />
      );
    }
  }
};

export default OfferUnitRating;
