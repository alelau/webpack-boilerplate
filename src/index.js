import angular from 'angular';

import uiRouter from 'angular-ui-router';

import homeConfig from './home/';
import pageConfig from './page/';

import oclazyLoad from 'oclazyload';

require('!style!css!less!./style.less');
//document.write(require("./content.js"));


angular.module('app', [uiRouter, oclazyLoad])
    .run(['$rootScope', '$state', '$ocLazyLoad', function ($rootScope, $state, $ocLazyLoad) {
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {

            if (toState.data.hasOwnProperty('promise') && !toState.data.promise) {
                event.preventDefault();
                toState.data.promise = toState.data.getComponent();

                toState.data.promise.then(function (module) {
                    $ocLazyLoad.load({name: module.default});
                    $state.go(toState.name, toParams);
                });
            }
        });
    }])
    .config(['$urlRouterProvider', '$stateProvider',
        ($urlRouterProvider, $stateProvider) => {
            //$locationProvider.html5Mode(true);
            $urlRouterProvider.otherwise('/');


            homeConfig($stateProvider);
            pageConfig($stateProvider);
        }]);

/*
 window.myFunction = function () {
 require(['./content'], (cats) => {
 //var content = require('./content');
 console.log('the content result', cats);
 const newdiv = document.createElement('H1');
 newdiv.appendChild(document.createTextNode(cats.content));
 document.body.appendChild(newdiv);
 });
 };
 */

