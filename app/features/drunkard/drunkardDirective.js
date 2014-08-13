angular.module('drunkard')
    .directive('drunkardDirective', function() {
        return {
            restrict: 'AE',
            templateUrl: 'app/features/drunkard/drunkard.html'
        }
    })