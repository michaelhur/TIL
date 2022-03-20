const React = require('react');
const ReactDom = require('react-dom');
const { hot } = require('react-hot-loader/root')

import Minesweeper from './Minesweeper';
const Hot = hot(Minesweeper);

ReactDom.render(<Hot />, document.querySelector("#root"));