import HomeController from './controller';

import contactState from './contact/state';
require('./style.less');

export default angular.module('app.home', [contactState])

    .component('f8Home', {
        template: require('./template.html'),
        controller: HomeController
    })
    .name;