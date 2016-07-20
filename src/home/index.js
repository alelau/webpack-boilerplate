import uiRouter from 'angular-ui-router';

import homeRouting from './home.routes';
import HomeController from './home.controller';

export default angular.module('app.home', [uiRouter])
    .config(homeRouting)
    .controller('HomeController', HomeController)
    .name;