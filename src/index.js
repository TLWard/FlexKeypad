import React, {Component} from 'react'
import { FlexKeypad } from './FlexKeypad'
import { withSizeUpdates } from './SizeHOC';
const FlexKeypadHOC = withSizeUpdates(FlexKeypad);


export default class extends Component {
  constructor() {
    super();

    this.state = { open: false, value: 0 };
}  
SetState(open, value) {

    this.setState({ open: open, value: value});
}
OpenFlexKeypad() {
        this.SetState(true, 0);
}
CloseFlexKeypad(value) {
    this.SetState(false, value);
}
  render() {
    return <div>
      <h2>Test Page for FlexKeypad</h2>
      <FlexKeypadHOC open={this.state.open} close={this.CloseFlexKeypad.bind(this)} />
            <h1>FlexKeypad value: {this.state.value}</h1>
              <button onClick={this.OpenFlexKeypad.bind(this)}>Open Keypad</button>  
    </div>
  }
}
