import {h, Component} from 'preact';
import style from './style.less';
import preURLs from '../../modules/socialSharePreUrls';

export default class SocialShareComponent extends Component {
  constructor (props) {
    super(props);
    this.state = {
      currentUrl: '',
      finalURL: '',
      windowWidth: '',
      windowHeight: ''
    };
    this.openShareWindow = this.openShareWindow.bind(this);
    this.onClickFacebook = this.onClickFacebook.bind(this);
    this.onClickGoogle = this.onClickGoogle.bind(this);
    this.onClickPinterest = this.onClickPinterest.bind(this);
    this.onClickTwitter = this.onClickTwitter.bind(this);
  }
  componentDidMount () {
    this.setState({
      currentUrl: window.location.href,
      windowWidth: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
      windowHeight: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    });
  }
  onClickFacebook () {
    const {currentUrl} = this.state;
    this.setState({
      finalURL: `${preURLs.facebook}${currentUrl}`
    }, () => {
      this.openShareWindow();
    });
  }
  onClickGoogle () {
    const {currentUrl} = this.state;
    this.setState({
      finalURL: `${preURLs.google}${currentUrl}`
    }, () => {
      this.openShareWindow();
    });
  }
  onClickPinterest () {
    const {currentUrl} = this.state;
    this.setState({
      finalURL: `${preURLs.pinterest}${currentUrl}`
    }, () => {
      this.openShareWindow();
    });
  }
  onClickTwitter () {
    const {hashtag} = this.props;
    const {currentUrl} = this.state;
    let useHashtag = hashtag || 'Snapdeal Going Going Gone Sale';
    this.setState({
      finalURL: `${preURLs.twitter}${currentUrl}&hashtags=${useHashtag}`
    }, () => {
      this.openShareWindow();
    });
  }
  openShareWindow () {
    const {finalURL, windowWidth, windowHeight} = this.state;
    window.open(finalURL, 'shareWindow', 'height=450, width=550, top=' + (windowHeight / 2 - 275) + ', left=' + (windowWidth / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
  }
  render () {
    return (
      <div className={style.wrapper}>
        <div className={style.shareThisPage}>
          <div className={[style.airPlane, style.verticalCenter].join(' ')} />
          <div className={[style.shareThisPageTxt, style.verticalCenter].join(' ')}>
            Share <span>this page on:</span>
          </div>
          <div className={[style.iconWrapper, style.verticalCenter].join(' ')}>
            <span className={style.facebook} onClick={this.onClickFacebook}>
              <i className={[style.bgSprite, style.verticalCenter].join(' ')} />
            </span>
            <span className={style.google} onClick={this.onClickGoogle}>
              <i className={[style.bgSprite, style.verticalCenter].join(' ')} />
            </span>
            <span className={style.pinterest} onClick={this.onClickPinterest}>
              <i className={[style.bgSprite, style.verticalCenter].join(' ')} />
            </span>
            <span className={style.twitter} onClick={this.onClickTwitter}>
              <i className={[style.bgSprite, style.verticalCenter].join(' ')} />
            </span>
          </div>
        </div>
      </div>
    );
  }
}
