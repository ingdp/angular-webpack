class ChildController {
    constructor($log, $scope) {
        this.$onChanges = (changes)=> {
            console.info('changed', changes)
        };
        this.log = $log;
        $scope.minAbv = 2;
        $scope.maxAbv = 12;
        $scope.minIbu = 0;
        $scope.maxIbu = 100;
    }

    customFilter(minAbv = 2, maxAbv = 12, minIbu = 0, maxIbu = 100) {
        return (actual)=>(actual.abv > minAbv && actual.abv < maxAbv && actual.ibu > minIbu && actual.ibu < maxIbu);
    }
}

ChildController.$inject = ['$log', '$scope'];

export default ChildController;