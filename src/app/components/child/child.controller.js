export default class ChildController {
    constructor() {
        let self = this;

        self.$onChanges = (changes)=> {
            console.info('changed', changes)
        }
    }

    customFilter(actual, expected) {
        console.log(actual, expected)
        return actual < expected;
    }
}