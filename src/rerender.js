const { h, Component } = require('../../rr/lib/index');
const { renderToString } = require('../../rr/lib/renderServer');
const Skeleton = require('./skeleton-rerender');

const App = Skeleton(h, Component);

module.exports = () => renderToString(h(App));