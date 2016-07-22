import ocLazyLoad from 'oclazyload';

export default angular.module('app.page.state', [ocLazyLoad]).config(['$stateProvider', ($stateProvider) => {
    $stateProvider
        .state('home.page', {
            url: '/page',
            template: '<f8-page data="$resolve.loadComponent" hour="18h"></f8-page>',
            resolve: {
                loadComponent: ['$ocLazyLoad', ($ocLazyLoad) =>
                    System.import('./').then((module) => $ocLazyLoad.load({name: module.default}))
                ]
            }
        });

}]).name;