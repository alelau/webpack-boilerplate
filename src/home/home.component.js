import uiRouter from 'angular-ui-router';
import HomeController from './home.controller';

require('!style!css!less!./home.less');

export default angular.module('app.home', [uiRouter])
/*    .config(['$stateProvider', ($stateProvider) => {
 $stateProvider
 .state('home', {
 url: '/',
 template: '<f8-home></f8-home>'
 });
 }])*/
    .component('f8Home', {
        template: require('./home.html'),
        controller: HomeController
    })
    .name;