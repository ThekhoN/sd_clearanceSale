import {h, Component} from 'preact';
import ImgOfferUnit from '../img-offer-unit';
import NonImgWrapper from '../non-img-wrapper';
import OfferUnitTitle from '../offer-unit-title';
import OfferUnitRating from '../offer-unit-rating';
import OfferUnitPriceTagline from '../offer-unit-price-tagline';
import OfferUnitDiscount from '../offer-unit-discount';
import style from './style.less';

export default class OfferUnitLi extends Component {
  render () {
    const {item} = this.props;
    return (
      <li class={style.offerUnitLi}>
        <ImgOfferUnit item={item} />
        <NonImgWrapper>
          <OfferUnitTitle item={item} />
          <OfferUnitRating item={item} />
          <OfferUnitPriceTagline item={item} />
          <OfferUnitDiscount item={item} />
        </NonImgWrapper>
      </li>
    );
  }
}
