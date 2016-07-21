import uiRouter from 'angular-ui-router';

require('!style!css!less!./page.less');

export default angular.module('app.page', [uiRouter])

    .component('f8Page', {
        template: '<div class="page">THe page</div>',
    })
    .name;