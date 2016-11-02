/**
 * Created by daniele on 02/11/16.
 */

const constantsModule = 'constantsModule';

angular.module(constantsModule, [])
    .constant('BASE_URL', 'https://punkapi.com/api/v1/beers')
    .constant('APIKEY', '2fe72cc67be24a298907c5d93e36465e')

export default constantsModule;