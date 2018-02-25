const { h, Component, renderServer } = require('../../rr/lib/index');
const Skeleton = require('./skeleton-rerender');

const App = Skeleton(h, Component);

module.exports = () => {
    let html = '';
    renderServer(h(App), { iterations: 2 })
        .subscribe(
            value => (html += value)
        );
    return html;
};