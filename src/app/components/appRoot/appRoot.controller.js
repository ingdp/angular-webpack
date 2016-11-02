export default class AppRootController {
    constructor(requestSrv) {
        console.log('AppRootController constructor');
        let self = this;
        self.exampleDataObj = {
            exampleStr: 'esempio',
        };
        self.beerArr = [];
        requestSrv.getAll().then(
            (res)=> {
                console.info(res)
                self.beerArr = res;
            });
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