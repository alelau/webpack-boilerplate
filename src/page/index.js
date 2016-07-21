require('!style!css!less!./style.less');

export default angular.module('app.page', [])

    .component('f8Page', {
        template: '<div class="page">THe page <a ui-sref="home">Back home</a>   <a ui-sref="bob">fo bob</a></div>',
    })

    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider
            .state('bob', {
                url: '/bob',
                template: '<div>bob</div>'
            });
    }])
    .name;