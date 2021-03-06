const { h, Component, renderToString } = require('../../rr/lib/index');
const Skeleton = require('./skeleton-rerender');

const App = Skeleton(h, Component);

module.exports = () => renderToString(h(App));