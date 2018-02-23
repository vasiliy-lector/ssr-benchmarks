const { h, Component } = require('../../rr/lib/index');
const { renderServer } = require('../../rr/lib/renderServer');
const Skeleton = require('./skeleton-rerender');

const App = Skeleton(h, Component);

module.exports = () => renderServer(h(App), {});