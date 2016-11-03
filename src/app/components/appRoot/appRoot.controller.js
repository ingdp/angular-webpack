export default class AppRootController {
    constructor(requestSrv) {
        let self = this;
        self.beerArr = [];
        requestSrv.getAll().then(
            (res)=> {
                console.info('<AppRootController::constructor> beers:', res)
                self.beerArr = res;
            });
    }

}