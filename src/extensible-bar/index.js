require('!style!css!less!./style.less');


export default angular.module('widgets.extensibleBar', [])
/*
 .animation('.expanded', ['$animateCss', function ($animateCss) {
 return {
 addClass: function (element, doneFn) {
 //setup animation
 console.log('im here');

 var expanded = element.children('.expanded-template');
 var collapsed = element.children('.collapsed-template');

 var collapsedContentWidth = collapsed.children('left-panel-collapsed').get(0).getBoundingClientRect().width;
 var expandedContentWidth = expanded.children('left-panel').get(0).getBoundingClientRect().width;

 var animation = $animateCss(element, {
 from: {width: collapsedContentWidth, overflow: 'hidden'},
 to: {width: expandedContentWidth}
 });
 //trigger animation
 var animator = animation.start();
 //setup done callback
 animator.finally(function () {
 console.log('im done');
 expanded.style.display = 'block';
 element.style.width = 'auto';
 doneFn();
 });
 }
 };
 }])*/
    .directive('extensibleBar', [()=> {
        console.log('im the bar');
        return {
            template: require('./template.html'),
            scope: {
                useManualCollapse: '<'
            },
            transclude: {
                leftPanel: 'leftPanel',
                leftPanelCollapsed: '?leftPanelCollapsed',
                rightPanel: 'rightPanel'
            },
            link: function (scope, elem, attrs, ctrls, transcluded) {

                scope.link = {
                    collapsedWith: '150px',
                    expandedWidth: '300px',
                    isExpanded: true,
                    useCollapseTemplate: transcluded.isSlotFilled('leftPanelCollapsed')
                };


            }
        };

    }])
    .name;