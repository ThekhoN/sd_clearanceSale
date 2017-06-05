import {h} from 'preact';
import MobPlatformCheck from '../../modules/mobPlatformCheck';
import {isLegitPogIdItem} from '../../modules/validateData';
import SdPlusLogo from '../sd-plus-logo';
import style from './style.less';

const OfferUnitImg = ({item}) => {
  let offerImageUrl, userDefinedImageUrl, sdgold, offerName;
  offerName = item.offerName || '';
  if (MobPlatformCheck()) {
    userDefinedImageUrl = item.mobileOfferImageUrl;
  } else {
    userDefinedImageUrl = item.webOfferImageUrl;
  } if (isLegitPogIdItem(item)) {
    offerImageUrl = userDefinedImageUrl || item.commonMinProductDetailsDTO.imgs[0];
    sdgold = item.commonMinProductDetailsDTO.vendorDTO.sdgold;
  } else {
    offerImageUrl = userDefinedImageUrl;
  }
  return (
    <div class={style.imgOfferUnit}>
      {sdgold && <SdPlusLogo />}
      <span className='img--constrain-size offer-unit__img-preload'>
        <img src={offerImageUrl} alt={offerName} />
      </span>
    </div>
  );
};

export default OfferUnitImg;
