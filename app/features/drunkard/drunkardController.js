angular.module('drunkard')
    .controller('drunkardController', ['$scope', function($scope) {
        var Position = function() {
            return { 'x': 0, 'y': 0 };
        };

        var createDrunkard = function() {
            var Drunkard = {};

            Drunkard.currPos = new Position();
            Drunkard.path = [{'x': 0, 'y': 0}];

            Drunkard.moveNorth = function() {
                Drunkard.currPos.y++;
            };
            Drunkard.moveSouth = function() {
                Drunkard.currPos.y--;
            };
            Drunkard.moveEast = function() {
                Drunkard.currPos.x++;
            };
            Drunkard.moveWest = function() {
                Drunkard.currPos.x--;
            };

            Drunkard.walk = function(numSteps) {
                for(var i = 0; i < numSteps; i++) {
                    var t = Math.floor(Math.random() * (4 - 0) + 0);
                    if(t === 0) {
                        Drunkard.moveNorth();
                    } else if(t === 1) {
                        Drunkard.moveSouth();
                    } else if(t === 2) {
                        Drunkard.moveEast();
                    } else if(t === 3) {
                        Drunkard.moveWest();
                    }
                    Drunkard.path.push(jQuery.extend({}, Drunkard.currPos));
                }
            }

            Drunkard.setPosition = function(x, y) {
                Drunkard.currPos.x = x;
                Drunkard.currPos.y = y;
            };
            Drunkard.getPosition = function() {
                return {
                    'x': Drunkard.currPos.x,
                    'y': Drunkard.currPos.y
                };
            };

            Drunkard.getPath = function() {
                return Drunkard.path;
            }

            return Drunkard;
        };

        var drunk = new createDrunkard();

        drunk.walk(10);

        $scope.path = [];
        for(var i = 0; i < drunk.path.length; i++) {
            $scope.path[i] = drunk.path[i];
        }
    }]);