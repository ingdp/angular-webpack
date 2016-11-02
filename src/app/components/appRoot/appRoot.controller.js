export default class AppRootController {
    constructor() {
        console.log('AppRootController constructor');
        this.exampleDataObj = {
            exampleStr: 'esempio',
        };
    }

    resetData() {
        this.exampleDataObj = {
            exampleStr: 'esempio',
        };
    }

    setExampleStr(str) {
        console.info('<AppRootController::setExampleStr>', angular.toJson(this.exampleDataObj));
        this.exampleDataObj.exampleStr = str;
    }
}