/*require(["lodash"], function(_) {
 var content = 'It works from content.js';

 _.each([1, 2, 3, 4, 5, 6, 7, 8, 9], function (item) {
 console.log(item);
 content.concat(item);
 });

 module.exports = content;
 });*/
import _ from 'lodash';

var content = 'It works from content.js-';
var test = '';
_.each([1, 2, 3, 4, 5, 6, 7, 8, 9], function (vaue, key) {
    console.log(key, vaue);
    test += "_" + vaue;
});

content += test;
export {content};
