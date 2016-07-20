
import angular from 'angular';
import uiRouter from 'angular-ui-router';

import config from './app.config';
import home from './home';

require('!style!css!less!./style.less');
//document.write(require("./content.js"));


console.log('sdiofjk');

angular.module('app', [uiRouter,home])
    .config(config);

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

