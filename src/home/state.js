import page from '../page/state';

import ocLazyLoad from 'oclazyload';

export default angular.module('app.home.state', [ocLazyLoad,page])
    .config(['$stateProvider', ($stateProvider) => {
        $stateProvider
            .state('home', {
                url: '/home',
                template: '<f8-home></f8-home>',
                resolve: {
                    loadComponent: ['$ocLazyLoad', ($ocLazyLoad) =>
                        System.import('./').then((module) => $ocLazyLoad.load({name: module.default}))
                    ]
                }
            });

    }]).name;