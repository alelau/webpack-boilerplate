import extensibleBar from '../extensible-bar';

require('!style!css!less!./style.less');

export default angular.module('app.page', [extensibleBar])

    .component('f8Page', {
        template: '<extensible-bar></extensible-bar>',
    })

    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('bob', {
                url: '/bob',
                template: '<div>bob</div>'
            });
    }])
    .name;