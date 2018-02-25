const { perform, report, count }  = require('./benchmark');

const ReactApp = require('./src/react.bundle');
const RerenderApp = require('./src/rerender');
const RerenderAppInlineCss = require('./src/rerender-inline-css');
const RerenderApp2Iterations = require('./src/rerender-two-iterations');

// const InfernoApp = require('./src/inferno.bundle');

perform('react', ReactApp);
perform('rerender', RerenderApp);
perform('rerender-inline-css', RerenderAppInlineCss);
perform('rerender-two-iterations', RerenderApp2Iterations);
// perform('inferno', InfernoApp);

report('react');
report('rerender');
report('rerender-inline-css');
report('rerender-two-iterations', true);
// report('inferno');
