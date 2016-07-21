export default function config($stateProvider) {


    $stateProvider
        .state('page', {
            url: '/page',
            template: '<f8-page></f8-page>',
            data: {
                getComponent: function () {
                    return System.import('./page');
                }
            }
        });

}