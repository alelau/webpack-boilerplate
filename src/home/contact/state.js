import ocLazyLoad from 'oclazyload';

export default angular.module('app.home.contact.state', [ocLazyLoad]).config(['$stateProvider', ($stateProvider) => {
    $stateProvider
        .state('home.contact', {
            url: '/contact',
            template: '<f8-contact></f8-contact>',
            resolve: {
                loadComponent: ['$ocLazyLoad', ($ocLazyLoad) =>
                    System.import('./').then((module) => $ocLazyLoad.load({name: module.default}))
                ]
            }
        });

}]).name;