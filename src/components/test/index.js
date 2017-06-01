import {h, Component} from 'preact';
import style from './style.less';
export default class TestComponent extends Component {
  render () {
    return (
      <div class={style.test}>
        TestComponent Component Yo!
      </div>
    );
  }
}
