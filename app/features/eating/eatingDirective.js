angular.module('eating')
    .directive('eatingDirective', [function() {
        return {
            restrict: 'AE',
            templateUrl: 'app/features/eating/eating.html'
        }
    }]);