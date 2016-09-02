import angular from 'angular';
import stateLoader from './stateLoader';

// Material design css
import 'angular-material/angular-material.css';

const Theme1 = require('./themes/theme1/style.less');
require('./style.less');


angular.module('app', [stateLoader]).run(['$timeout', function ($timeout) {
    $timeout(function () {
        Theme1.use();
    }, 5000);
    $timeout(function () {
        //  Theme1.unuse();
    }, 10000);
}]);

