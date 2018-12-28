'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ExpenseDashboardPage = function ExpenseDashboardPage() {
  return _react2.default.createElement(
    'div',
    null,
    'This is from my dashboard componentTdfsdfsdfsdfsdf'
  );
};
var ExpenseDashboardPage2 = function ExpenseDashboardPage2() {
  return _react2.default.createElement(
    'div',
    null,
    'This is from my dashboard 2'
  );
};
var routes = _react2.default.createElement(
  _reactRouterDom.BrowserRouter,
  null,
  _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_reactRouterDom.Route, { path: '/', component: ExpenseDashboardPage }),
    _react2.default.createElement(_reactRouterDom.Route, { path: '/create', component: ExpenseDashboardPage2 })
  )
);
_reactDom2.default.render(routes, document.getElementById('app'));
