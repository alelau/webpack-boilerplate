require('!style!css!less!./style.less');


export default angular.module('widgets.extensibleBar', [])

    .directive('extensibleBar', [()=> {

        return {
            template: require('./template.html'),
            transclude: {
                leftPanel: 'leftPanel',
                rightPanel: 'rightPanel'
            },
        };

    }])
    .name;