'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Display = require('./Display');

var _Display2 = _interopRequireDefault(_Display);

var _Form = require('./Form');

var _Form2 = _interopRequireDefault(_Form);

var _getMuiTheme = require('material-ui/styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Video = function Video(props) {
  return _react2.default.createElement(
    _MuiThemeProvider2.default,
    { muiTheme: (0, _getMuiTheme2.default)() },
    props.readOnly ? _react2.default.createElement(_Display2.default, props) : _react2.default.createElement(_Form2.default, props)
  );
};
exports.default = Video;
//# sourceMappingURL=index.js.map