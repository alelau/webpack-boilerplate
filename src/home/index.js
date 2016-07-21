export default function config($stateProvider) {


    $stateProvider
        .state('home', {
            url: '/',
            template: '<f8-home></f8-home>',
            data: {

                promise: null,

                getComponent: function () {
                    return System.import('./home');
                }
            }
        });

}