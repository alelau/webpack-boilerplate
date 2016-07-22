//import HomeController from './controller';
import extensibleBar from '../extensible-bar';

require('!style!css!less!./style.less');
export default angular.module('app.home', [extensibleBar])

    .component('f8Home', {
        template: require('./template.html')//,
   //     controller: HomeController
    })
    .name;