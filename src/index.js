import angular from 'angular';
import uiRouter from 'angular-ui-router';

import home from './home';

require('!style!css!less!./style.less');
//document.write(require("./content.js"));


angular.module('app', [uiRouter, home])
    .config(['$urlRouterProvider', ($urlRouterProvider) => {
        //$locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/');
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

