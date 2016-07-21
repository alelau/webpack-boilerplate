import ocLazyLoad from 'oclazyload';

export default angular.module('app.page.state', [ocLazyLoad]).config(['$stateProvider', ($stateProvider) => {
    $stateProvider
        .state('page', {
            url: '/page',
            template: '<f8-page></f8-page>',
            resolve: {
                loadComponent: ['$ocLazyLoad', ($ocLazyLoad) =>
                    System.import('./').then((module) => $ocLazyLoad.load({name: module.default}))
                ]
            }
        });

}]).name;