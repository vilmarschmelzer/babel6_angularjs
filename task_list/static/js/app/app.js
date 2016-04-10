require('angular');

import AppController from './controllers/AppController';
import ItemsService from './services/ItemsService';


//AppController.$inject = ['$scope','ItemsService'];




var app = angular.module('app', [])
    .config(function($interpolateProvider) {
        $interpolateProvider.startSymbol('{[{');
        $interpolateProvider.endSymbol('}]}');
    })
    .controller('AppController', AppController)
    .service('ItemsService', ItemsService);



/*app.constant('config', {
    apiUrl: '../api/'
});*/


/*app.config((statesProvider) => {
    statesProvider.setPrefix('You are feeling');
});*/




//require('./utils/register');
//require('./services/thingFactory');
//require('./services/itemsService');
//require('./controllers/appController');

/*require('./utils');
require('./services');
require('./controllers');*/
