const React = require('react');
const ReactDom = require('react-dom');
const { hot } = require('react-hot-loader/root')

import Test from './Test';
const Hot = hot(Test);

ReactDom.render(<Hot />, document.querySelector("#root"));