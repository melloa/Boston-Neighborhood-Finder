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
    controlText.style.fontFamily = 'sans-serif';
    controlText.style.fontSize = '14px';
    controlText.style.fontWeight = '600';
    controlText.style.lineHeight = '38px';
    controlText.style.paddingLeft = '5px';
    controlText.style.paddingRight = '5px';
    controlText.innerHTML = 'Center Map';
    controlUI.appendChild(controlText);

    // Setup the click event listeners: simply set the map to Chicago.
    controlUI.addEventListener('click', function () {
        map.setCenter(boston_center);
        map.setZoom(12);
    });

}

function initMap() {
    // Create a map object and specify the DOM element for display.
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 42.321,
            lng: -71.076
        },
        zoom: 12,
        draggable: true,
        mapTypeControl: false,
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

    var map_style2 = [{
            "elementType": "labels",
            "stylers": [{
                "visibility": "off"
                    }]
                },
        {
            "featureType": "administrative.neighborhood",
            "stylers": [{
                "visibility": "off"
                    }]
                },
        {
            "featureType": "road.highway",
            "stylers": [{
                    "color": "#f5f5f5"
                        },
                {
                    "saturation": -45
                        },
                {
                    "lightness": 35
                        }
                    ]
                },
        {
            "featureType": "water",
            "stylers": [{
                "color": "#cbdaec"
                    }]
                }
            ]

    map.setOptions({
        styles: map_style2
    });

}
