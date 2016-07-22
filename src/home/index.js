import HomeController from './controller';

require('!style!css!less!./style.less');

export default angular.module('app.home', [])

    .component('f8Home', {
        template: require('./template.html'),
        controller: HomeController
    })
    .name;