export default class ChildController {
    constructor($scope) {
        let self = this;
        self.$onChanges= (changes)=>{
            console.info('changed', changes)

            if(changes.stringToShow.currentValue){
                console.info('changed', changes.stringToShow.currentValue)
            }
        }
    }

    setStringToShow(str) {
        console.log(str)
        this.stringApi({str})
    }
}