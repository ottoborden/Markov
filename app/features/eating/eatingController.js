angular.module('eating')
    .controller('eatingController', ['$scope', function($scope) {
        var Creature = function() {
            var day = 0,
                foods = ['cheese', 'lettuce', 'grapes'],
                path = [];

            /*
                [c, l ,g]
             */
            var probabilityMatrix = [
                [.3, .3, .3], // cheese eaten today
                [.6, .0, .4], // lettuce eaten today
                [.4, .5, .1] // grapes eaten today
            ];

            // Start conditions?
            var today = [];

            function getProb() {

            };
        };
    }]);