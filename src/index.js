import angular from 'angular';

import uiRouter from 'angular-ui-router';

import homeConfig from './home/';

import oclazyLoad from 'oclazyload';


require('!style!css!less!./style.less');
//document.write(require("./content.js"));


angular.module('app', [uiRouter, oclazyLoad])
    .config(['$urlRouterProvider', '$stateProvider', ($urlRouterProvider, $stateProvider) => {
        //$locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/');
        homeConfig($stateProvider);
 /*       $stateProvider
            .state('home', {
                url: '/',
                template: '<f8-home></f8-home>',
                resolve: {
                    loadModule: ['$q','$timeout', '$ocLazyLoad', ($q,$timeout, $ocLazyLoad) => {
                        return $timeout(function () {
                           return $q((resolve) => {
                                require(['./home/index'], (module) => {
                                    console.log('I loaded',module);

                                    resolve($ocLazyLoad.load({name: module.default}));
                                });
                            });
                        },2000);
                    }]
                }
            });*/
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

