import childComponent from './child.component';

const childModule = 'childModule';

angular.module(childModule, [])
    .component('child', childComponent);

export default childModule;