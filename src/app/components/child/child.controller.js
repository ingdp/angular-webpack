export default class ChildController {
    constructor() {
        let self = this;

        self.$onChanges = (changes)=> {
            console.info('changed', changes)
        }
    }

    setStringToShow(str) {
        console.log(str)
        this.stringApi({str})
    }
}