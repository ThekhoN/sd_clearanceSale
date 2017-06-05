import {h, Component} from 'preact';
import OfferUnitLink from '../offer-unit-link';
import OfferUnitImg from '../offer-unit-img';
import NonImgWrapper from '../non-img-wrapper';
import AlignVerticalCenter from '../align-vertical-center';
import OfferUnitTitle from '../offer-unit-title';
import OfferUnitRating from '../offer-unit-rating';
import OfferUnitPriceTagline from '../offer-unit-price-tagline';
import OfferUnitDiscount from '../offer-unit-discount';
import {OfferUnitClaimed, OfferUnitRemaining, OfferUnitRemainingSingle, OfferUnitClaimedSoldOut, OfferUnitClaimedFresh} from '../offer-unit-claimed-remaining';
import style from './style.less';

// utils
import {isISObject} from '../../modules/validateData';
// global
// stage 2
// const buyableInventoryLimit = 5;

export default class OfferUnitLi extends Component {
  constructor (props) {
    super(props);
    this.handleRenderOfferUnitClaimed = this.handleRenderOfferUnitClaimed.bind(this);
  }
  handleRenderOfferUnitClaimed () {
    const {item} = this.props;
    if (!item || !item.pogId || !isISObject(item.commonMinProductDetailsDTO) || !item.commonMinProductDetailsDTO.vendorDTO || !item.commonMinProductDetailsDTO.vendorDTO.buyableInventory) {
      return null;
    }
    const buyableInventory = item.commonMinProductDetailsDTO.vendorDTO.buyableInventory;
    const originalInventory = item.extraField5 || 200;
    let claimedPercentage = Math.floor(((Number(originalInventory) - Number(buyableInventory)) / Number(originalInventory)) * 100);
    if (claimedPercentage <= 0) {
      // if negative return component with special text
      return <OfferUnitClaimedFresh />;
    } else {
      return (
        <OfferUnitClaimed claimedPercentage={claimedPercentage} />
      );
    }
    // stage 2
    // console.log('claimedPercentage: ', claimedPercentage);
    // if (buyableInventory <= buyableInventoryLimit) {
    //   if (buyableInventory === 1) {
    //     return <OfferUnitRemainingSingle claimedPercentage={claimedPercentage} />;
    //   } else {
    //     return <OfferUnitRemaining claimedPercentage={claimedPercentage} buyableInventory={buyableInventory} />;
    //   }
    // } else {
    //   return (
    //     <OfferUnitClaimed claimedPercentage={claimedPercentage} />
    //   );
    // }
  }
  render () {
    const {item} = this.props;
    if (!item || !item.pogId || !isISObject(item.commonMinProductDetailsDTO) || !item.commonMinProductDetailsDTO.vendorDTO) {
      return null;
    }
    if (item.commonMinProductDetailsDTO.soldOut) {
      console.log('is soldOUt.. .');
      return (
        <li class={[style.offerUnitLi, style.soldOut].join(' ')}>
          <OfferUnitImg item={item} />
          <NonImgWrapper>
            <AlignVerticalCenter>
              <OfferUnitTitle item={item} />
              <OfferUnitRating item={item} />
              <OfferUnitPriceTagline item={item} />
              <OfferUnitDiscount item={item} />
              <OfferUnitClaimedSoldOut />
            </AlignVerticalCenter>
          </NonImgWrapper>
        </li>
      );
    } else {
      return (
        <li class={style.offerUnitLi}>
          <OfferUnitLink item={item}>
            <OfferUnitImg item={item} />
            <NonImgWrapper>
              <AlignVerticalCenter>
                <OfferUnitTitle item={item} />
                <OfferUnitRating item={item} />
                <OfferUnitPriceTagline item={item} />
                <OfferUnitDiscount item={item} />
                {this.handleRenderOfferUnitClaimed()}
              </AlignVerticalCenter>
            </NonImgWrapper>
          </OfferUnitLink>
        </li>
      );
    }
  }
}
