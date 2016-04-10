require('angular');

import TaskController from './controllers/TaskController';
import TaskService from './services/TaskService';

var app = angular.module('app', [])
    .config(function($interpolateProvider) {
        $interpolateProvider.startSymbol('{[{');
        $interpolateProvider.endSymbol('}]}');
    })
    .controller('TaskController', TaskController)
    .service('TaskService', TaskService);