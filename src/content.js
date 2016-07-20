var content = 'It works from content.js-';
let test = '';
_.each([1, 2, 3, 4, 5, 6, 7, 8, 9], (vaue, key) => {
    console.log(key, vaue);
    test += '_' + vaue;
});
//var angular = require('angular');
//import angular from 'angular';
/*var angular = require('angular');
 var myModule = angular.module('app', []);
 console.log(myModule);*/
/*console.log(toto);
 var version = toto.version.full;
 test += version;*/
content += test;
export {content};
