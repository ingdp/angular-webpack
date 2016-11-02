/**
 * Created by daniele on 02/11/16.
 */
import constant from '../constants/constants';

const requestSrvModule = 'requestSrvModule';

angular.module(requestSrvModule, [constant])
    .service('requestSrv', ['$http', '$log', '$q',
        'APIKEY', 'BASE_URL',
        function ($http, $log, $q,
                  APIKEY, BASE_URL) {
            let requestConfig = {
                method: 'GET',
                url: BASE_URL,
                headers: {
                    'Authorization': `Basic ${btoa(APIKEY)}`,
                },
            };

            return {
                getAll: function () {
                    return $http(requestConfig).then(
                        function (res) {
                            console.log('<requestSrv::getAll>', res)
                            return res.data;
                        });
                }
            }

        }]);

export default requestSrvModule;