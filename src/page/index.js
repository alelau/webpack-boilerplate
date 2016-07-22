require('!style!css!less!./style.less');
console.log('yea');

export default angular.module('app.page', [])

    .component('f8Page', {
        bindings: {
            hour: '@'
        },
        template: require('./template.html')
    })
    .name;