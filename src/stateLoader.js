import uiRouter from 'angular-ui-router';

import homeState from './home/state';
import pageState from './page/state';

export default angular.module('app.stateLoader', [uiRouter, pageState, homeState])
    .config(['$urlRouterProvider', ($urlRouterProvider) => {

        $urlRouterProvider.when('','/');
        $urlRouterProvider.when('/','/home');
        $urlRouterProvider.otherwise('/');
    }])

    .name;

