import {h, Component} from 'preact';
import axios from 'axios';
import url from '../../api';
import OfferUnitUl from '../../components/offer-unit-ul';
import OfferUnitLi from '../../components/offer-unit-li';
import style from './style.less';
console.log('style mainOfferContainer: ', style);

export default class MainOfferContainer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount () {
    axios.get(url)
      .then(response => {
        const responseData = response.data.genericOfferItems;
        console.log('responseData: ', responseData);
        if (responseData.length < 1) {
          console.log(`no data found, update csv " -_- ?`);
          return;
        } else {
          this.setState({
            data: responseData
          });
        }
      })
      .catch(err => {
        console.log('axios initial fetch error: ', err);
      });
  }
  render () {
    const {data} = this.state;
    return (
      <div class={style.mainOfferContainer}>
        <OfferUnitUl>
          {data.map(item => <OfferUnitLi item={item} />)}
        </OfferUnitUl>
      </div>
    );
  }
}
