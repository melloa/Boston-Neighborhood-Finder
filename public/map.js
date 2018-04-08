var points = [];
var map;

var boston_center = {
    lat: 42.351,
    lng: -71.076
};

var colors = {
    best: "#709053",
    better: "#81ae64",
    good: "#c7e78b",
    fair: "#fff4c9"
};

document.addEventListener('DOMContentLoaded', function() {
    console.log("test")
    firebase.database().ref('region/Downtown/').on('value', function(snapshot) {
        console.log("RESPONSE: " + snapshot.val())
        points = snapshot.val()
        new google.maps.Polygon({
            map: map,
            paths: points,
            strokeColor: '#757575',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: colors.best,
            fillOpacity: 0.8,
            draggable: false,
            geodesic: true
        });
    });

    var c = [{
        "lat": 42.361295952726586,
        "lng": -71.05341835721063
    },
        {
            "lat": 42.344863910441305,
            "lng": -71.05949924146289
        },
        {
            "lat": 42.349533426640555,
            "lng": -71.057062032957
        },
        {
            "lat": 42.35653726729268,
            "lng": -71.06202649611477
        }
    ]
    // Construct a draggable red triangle with geodesic set to true.

});

/**
 * The CenterControl adds a control to the map that recenters the map on
 * Chicago.
 * This constructor takes the control DIV as an argument.
 * @constructor
 */
function CenterControl(controlDiv, map) {

    // Set CSS for the control border.
    var controlUI = document.createElement('div');
    controlUI.style.backgroundColor = '#fff';
    controlUI.style.border = '2px solid #fff';
    controlUI.style.borderRadius = '3px';
    controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
    controlUI.style.cursor = 'pointer';
    controlUI.style.marginBottom = '22px';
    controlUI.style.textAlign = 'center';
    controlUI.title = 'Click to recenter the map';
    controlDiv.appendChild(controlUI);

    // Set CSS for the control interior.
    var controlText = document.createElement('div');
    controlText.style.color = 'rgb(25,25,25)';
    controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
    controlText.style.fontSize = '16px';
    controlText.style.lineHeight = '38px';
    controlText.style.paddingLeft = '5px';
    controlText.style.paddingRight = '5px';
    controlText.innerHTML = 'Center Map';
    controlUI.appendChild(controlText);

    // Setup the click event listeners: simply set the map to Chicago.
    controlUI.addEventListener('click', function() {
        map.setCenter(boston_center);
    });

}

function initMap() {
    // Create a map object and specify the DOM element for display.
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 42.351,
            lng: -71.076
        },
        zoom: 14,
        draggable: true,
        mapTypeControl: true,
        disableDefaultUI: false

    });

    var centerControlDiv = document.createElement('div');
    var centerControl = new CenterControl(centerControlDiv, map);

    centerControlDiv.index = 1;
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);

    var colors2 = {
        best: "#0278ae",
        better: "#51adcf",
        good: "#a5ecd7",
        fair: "#e8ffc1"
    };


    var map_style = [{
        elementType: 'geometry',
        stylers: [{
            color: '#f5f5f5'
        }]
    },
        {
            elementType: 'labels.icon',
            stylers: [{
                visibility: 'off'
            }]
        },
        {
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#bababa'
            }]
        },
        {
            elementType: 'labels.text.stroke',
            stylers: [{
                color: '#f5f5f5'
            }]
        },
        {
            featureType: 'administrative.land_parcel',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#bdbdbd'
            }]
        },
        {
            featureType: 'poi',
            elementType: 'geometry',
            stylers: [{
                color: '#eeeeee'
            }]
        },
        {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#757575'
            }]
        },
        {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{
                color: '#e5e5e5'
            }]
        },
        {
            featureType: 'poi.park',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#9e9e9e'
            }]
        },
        {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{
                color: '#ffffff'
            }]
        },
        {
            featureType: 'road.arterial',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#757575'
            }]
        },
        {
            featureType: 'road.highway',
            elementType: 'geometry',
            stylers: [{
                color: '#dadada'
            }]
        },
        {
            featureType: 'road.highway',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#616161'
            }]
        },
        {
            featureType: 'road.local',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#9e9e9e'
            }]
        },
        {
            featureType: 'transit.line',
            elementType: 'geometry',
            stylers: [{
                color: '#e5e5e5'
            }]
        },
        {
            featureType: 'transit.station',
            elementType: 'geometry',
            stylers: [{
                color: '#eeeeee'
            }]
        },
        {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{
                color: '#5a5a5a'
            }]
        },
        {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#9e9e9e'
            }]
        }
    ];

    map.setOptions({
        styles: map_style
    });

}