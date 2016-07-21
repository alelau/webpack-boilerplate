import uiRouter from 'angular-ui-router';
import HomeController from './home.controller';

require('!style!css!less!./home.less');

export default angular.module('app.home', [uiRouter])

    .component('f8Home', {
        template: require('./home.html'),
        controller: HomeController
    })
    .name;