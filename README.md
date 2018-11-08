# flexKeypad

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

An auto resizing numeric keypad in react

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo

### Usage:

##### Import

import { FlexKeypad } from 'flexkeypadnumber/es/FlexKeypad'
import { withSizeUpdates } from 'flexkeypadnumber/es/SizeHOC';

##### withSizeUpdates creates a HOC from FlexKeypad to recieve the height and width
const FlexKeypadHOC = withSizeUpdates(FlexKeypad);

##### Render HTML
 FlexKeypadHOC open={this.state.open} close={this.CloseFlexKeypad.bind(this)}
  
  


