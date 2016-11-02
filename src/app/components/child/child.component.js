import controller from './child.controller';
import template from './child.html'

const childComponent = {
    controller,
    template,
    bindings: {
        stringApi: '&',
        beers: '<',
    },
}


export default childComponent;