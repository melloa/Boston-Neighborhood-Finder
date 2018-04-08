function getDrivingDistance(address, neighborhoods, callback) {
    for (var i = 0; i < neighborhoods.length; i++) {
        neighborhoods[i] = neighborhoods[i] + " Boston MA"
    }

    var service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix({
        origins: [address],
        destinations: neighborhoods,
        travelMode: 'DRIVING',
        unitSystem: google.maps.UnitSystem.IMPERIAL,
        avoidHighways: false,
        avoidTolls: false,
        drivingOptions: {
            departureTime: new Date(),
            trafficModel: 'pessimistic'
        }
    }, callback);
}

function parseDrivingDistance(response) {
    var distances = {};
    var addresses = response.destinationAddresses;
    var elements = response.rows[0].elements;
    for (var i = 0; i < addresses.length; i++) {
        var name = addresses[i].split(',')[0];
        distances[name] = elements[i].duration_in_traffic.value;
    }
    return distances;
}
