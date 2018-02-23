const { perform, report, count }  = require('./benchmark');

const ReactApp = require('./src/react.bundle');
const RerenderApp = require('./src/rerender');

// const InfernoApp = require('./src/inferno.bundle');

perform('react', ReactApp);
perform('rerender', RerenderApp);
// perform('inferno', InfernoApp);

report('react');
report('rerender', true);
// report('inferno');
