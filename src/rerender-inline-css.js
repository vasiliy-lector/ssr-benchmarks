const { h, Component, renderToString } = require('../../rr/lib/index');
const Skeleton = require('./skeleton-rerender-inline-css');

const App = Skeleton(h, Component);

module.exports = () => renderToString(h(App));