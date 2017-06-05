import {h} from 'preact';
import style from './style.less';

export const OfferUnitClaimed = ({claimedPercentage}) => (
  <div className={style.offerUnitClaimedWrapper}>
    <div>{claimedPercentage}% already claimed</div>
    <div className={style.indicatorWrapper}>
      <div className={style.indicator} style={{width: `${claimedPercentage}%`}}></div>
    </div>
  </div>
);

export const OfferUnitRemaining = ({claimedPercentage, buyableInventory}) => (
  <div className={style.offerUnitClaimedWrapper}>
    <div>{buyableInventory} units remaining</div>
    <div className={style.indicatorWrapper}>
      <div className={style.indicator} style={{width: `${claimedPercentage}%`}}></div>
    </div>
  </div>
);

export const OfferUnitRemainingSingle = ({claimedPercentage}) => (
  <div className={style.offerUnitClaimedWrapper}>
    <div>1 unit remaining</div>
    <div className={style.indicatorWrapper}>
      <div className={style.indicator} style={{width: `${claimedPercentage}%`}}></div>
    </div>
  </div>
);

export const OfferUnitClaimedFresh = () => (
  <div className={style.offerUnitClaimedWrapper}>
    <div>Freshly stocked</div>
    <div className={style.indicatorWrapper} style={{backgroundColor:'white'}}>
      <div className={style.indicator}></div>
    </div>
  </div>
);

export const OfferUnitClaimedSoldOut = () => (
  <div className={style.offerUnitClaimedWrapper}>
    <div className={style.soldOut}>100% already claimed</div>
    <div className={style.indicatorWrapper}>
      <div className={style.indicator} style={{width: '100%'}}></div>
    </div>
  </div>
);
