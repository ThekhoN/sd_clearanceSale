import {h} from 'preact';
import style from './style.less';
import mobPlatformCheck from '../../modules/mobPlatformCheck';

const OfferUnitLink = ({item, children}) => {
  let OfferURL;
  const {mobileLandingUrl, webLandingUrl} = item;
  if (mobPlatformCheck()) {
    OfferURL = mobileLandingUrl || webLandingUrl;
  } else {
    OfferURL = webLandingUrl;
  }
  return (
    <a href={OfferURL} target='_blank' className={style.OfferUnitLink}>
      {children}
    </a>
  );
};

export default OfferUnitLink;
