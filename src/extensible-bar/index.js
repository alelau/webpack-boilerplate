export default angular.module('widgets.extensibleBar', [])

    .directive('extensibleBar', [()=> {

        return {
            template: require('./template.html'),
        };

    }])
    .name;