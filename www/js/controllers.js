angular.module('starter.controllers', [])

.controller('Map1Controller', function($scope, $timeout) {
    var posOptions = {timeout: 10000, enableHighAccuracy: false};
    var onSuccess = function(position) {
        var lat  = position.coords.latitude
        var long = position.coords.longitude
        var myLatLng = {lat: lat, lng: long};
        $timeout(function () {
                $scope.map = new google.maps.Map(document.getElementById('map1'), {
                    center: myLatLng,
                    zoom: 16
                });
                $scope.marker = new google.maps.Marker({
                    position: myLatLng,
                    map: $scope.map,
                    title: 'Your Position'
                });
                }, 500);
    };
        // onError Callback receives a PositionError object
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError, posOptions);
})

.controller('Map2Controller', function($scope, $timeout, $cordovaGeolocation) {
    var posOptions = {timeout: 10000, enableHighAccuracy: false};
    $cordovaGeolocation
        .getCurrentPosition(posOptions)
        .then(function(position) {
            var lat = position.coords.latitude
            var long = position.coords.longitude

            var myLatLng = {
                lat: lat,
                lng: long
            };
            $timeout(function() {
                $scope.map = new google.maps.Map(document.getElementById('map2'), {
                    center: myLatLng,
                    zoom: 16
                });

                $scope.marker = new google.maps.Marker({
                    position: myLatLng,
                    map: $scope.map,
                    title: 'Your Position'
                });
            }, 500);
        }, function(err) {
            // error
        });
})

.controller('ListController', function($scope, Chats) {
    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
        Chats.remove(chat);
    };
})

.controller('DetailController', function($scope, $timeout, $stateParams) {
    var id = $stateParams.mapId;

    var cordinates = [
        {
            lat: -8.223661,
            lng: 114.366918
        },
        {
            lat: -8.187145,
            lng: 114.260032
        },
        {
            lat: -8.360481,
            lng: 114.236327
        },
        {
            lat: -8.288926,
            lng: 113.985248
        },
        {
            lat: -8.434741,
            lng: 114.319158
        },
    ];

    var cordinate = cordinates[id];
    console.log(cordinate)

    $timeout(function () {
        $scope.map = new google.maps.Map(document.getElementById('map3'), {
            center: { lat: cordinate.lat, lng: cordinate.lng },
            zoom: 16
        });
    });
})

;
