import { h, Component } from 'preact';
import MainOfferContainer from './main-offer-container';

export default class App extends Component {
	render() {
		return (
			<div id="preact-app">
				<MainOfferContainer />
			</div>
		);
	}
}
