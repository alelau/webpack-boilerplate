export default function config($stateProvider) {


    $stateProvider
        .state('home', {
            url: '/',
            template: '<f8-home></f8-home>',
            resolve: {
                loadModule: ['$q', '$timeout', '$ocLazyLoad', ($q, $timeout, $ocLazyLoad) => {
                    return $timeout(function () {
                        return $q((resolve) => {
                            require(['./home.component'], (module) => {
                                console.log('I loaded', module);
                                resolve($ocLazyLoad.load({name: module.default}));
                            });
                        });
                    }, 2000);
                }]
            }
        });

}