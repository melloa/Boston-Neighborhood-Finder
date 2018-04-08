var regions = {}

function create_polygon(map, location, color) {
    var database_location = 'region/' + location + '/'
    firebase.database().ref(database_location).on('value', function (snapshot) {
        var points = snapshot.val()
        var polygon = new google.maps.Polygon({
            map: map,
            paths: points,
            strokeColor: '#757575',
            strokeOpacity: 0.85,
            strokeWeight: 2,
            fillColor: color,
            fillOpacity: 0.85,
            draggable: false,
            geodesic: true
        });

        regions[location] = polygon
    });
}

function set_polygon_color(location, color) {
    regions[location].setOptions({
        fillColor: color
    })
}
