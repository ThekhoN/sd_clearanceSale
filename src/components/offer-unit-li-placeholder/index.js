import {h, Component} from 'preact';
import OfferUnitImg from '../offer-unit-img';
import NonImgWrapper from '../non-img-wrapper';
import AlignVerticalCenter from '../align-vertical-center';
import style from './style.less';

const AnimatedPlaceholder = ({delayTranslateLoop}) => {
  const animationStyle = {
    animationDelay: `${delayTranslateLoop}s`
  };
  return (
    <div className={style.placeholderWrapper}>
      <div
        className={style.animatedPlaceholder}
        style={animationStyle}
      />
    </div>
  );
};

const OfferUnitLiPlaceholder = () => (
  <li class={style.offerUnitLi}>
    <OfferUnitImg placeholder />
    <NonImgWrapper>
      <AlignVerticalCenter>
        <AnimatedPlaceholder delayTranslateLoop='0' />
        <AnimatedPlaceholder delayTranslateLoop='0.1' />
        <AnimatedPlaceholder delayTranslateLoop='0.2' />
        <AnimatedPlaceholder delayTranslateLoop='0.3' />
      </AlignVerticalCenter>
    </NonImgWrapper>
  </li>
);

const OfferUnitLiPlaceholderGroup6X = () => (
  <span>
    <OfferUnitLiPlaceholder /><OfferUnitLiPlaceholder />
    <OfferUnitLiPlaceholder /><OfferUnitLiPlaceholder />
    <OfferUnitLiPlaceholder /><OfferUnitLiPlaceholder />
  </span>
);

export default OfferUnitLiPlaceholderGroup6X;
