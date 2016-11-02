import angular from 'angular';
import appRoot from './components/appRoot/appRoot';
import childModule from './components/child/child';
import requestSrv from './providers/services/requestSrv';

import '../style/app.css';

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [
    requestSrv,
    appRoot,
    childModule,
]);

export default MODULE_NAME;