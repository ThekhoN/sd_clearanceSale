import {h, Component} from 'preact';
import {polyfill} from 'es6-promise';
polyfill();
import axios from 'axios';
import url from '../../api';
import OfferUnitUl from '../../components/offer-unit-ul';
import OfferUnitLi from '../../components/offer-unit-li';
import OfferUnitLiPlaceholderGroup6X from '../../components/offer-unit-li-placeholder';
// import HeaderTitle from '../../components/header-title';
import SocialShareComponent from '../../components/social-share-component';

// global
const eventId = 'DealofDayOffers';

export default class MainOfferContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data: [],
      showPlaceholder: true,
      showBuyableInventory: false
    };
  }
  componentDidMount () {
    axios.get(url)
      .then(response => {
        const responseData = response.data.genericOfferItems;
        if (responseData.length < 1) {
          console.log(`no data found, update csv " -_- ?`);
          return;
        } else {
          this.setState({
            data: responseData,
            showPlaceholder: false
          });
        }
      })
      .catch(err => {
        console.log('axios initial fetch error: ', err);
      });
  }
  render () {
    const {data, showBuyableInventory} = this.state;
    return (
      <div class='main-offer-container'>
        {/* <HeaderTitle title='GOING..GOING..GONE Sale' subTitle='Only Till Stocks Last!' /> */}
        <OfferUnitUl>
          {this.state.showPlaceholder && <OfferUnitLiPlaceholderGroup6X />}
          {data
            .filter(offer => offer.eventId === eventId)
            .map((item, i) => <OfferUnitLi item={item} showBuyableInventory={showBuyableInventory} />)}
        </OfferUnitUl>
        <SocialShareComponent />
      </div>
    );
  }
}
