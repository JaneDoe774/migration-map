// var script = document.createElement('script');
// script.src = 'https://code.jquery.com/jquery-3.4.1.min.js';
// script.type = 'text/javascript';
// document.getElementsByTagName('head')[0].appendChild(script);


// Slider data


var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;



// fetch JSON

$.getJSON('migration-map/data/migration.json',function(data){
console.log(data);
var output = '<ul>';
$.each(data, function(key,val){
  output += '<li>'+ val.name + " " + val.year+ " " + val.from+ " " + val.to+'</li>';
});
output += '</ul>';
$('#update').html(output);
});



// Map data

var mymap = L.map('mapid').setView([51.351134, 12.377113], 7);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'eliza1337/ck7yurcyq1dv81intrwx1ix4n',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZWxpemExMzM3IiwiYSI6ImNrN3l1cGVhdDA5b2Iza3BmdjE0c3gxcGsifQ.SAUKRQiKkag2cFK2-wFYgQ'
}).addTo(mymap);


// set and remove Marker

slider.oninput = function() {
  output.innerHTML = this.value;
  //setMarker();
  onMapClick()

  }



// var marker;
//
// function setMarker() {
//
//   if(output.innerHTML == 1550) {
//     console.log("Hello");
//     marker = L.marker([51.351134, 12.377113]).addTo(mymap);
//     marker.bindPopup("<b>Hello world!</b><br>I am a popup.");
//
// }
//
// }


// mymap.on('click', onMapClick);

var markers = new Array();

function onMapClick() {

      if(output.innerHTML == 1550) {
        var marker = new L.Marker([51.351134, 12.377113]);
        mymap.addLayer(marker);
        markers[marker._leaflet_id] = marker;
        console.log(markers);
        // $('#overlay > ul').append('<li>Marker '+ marker._leaflet_id + ' - <a href="#" class="remove" id="' + marker._leaflet_id + '">remove</a></li>');

    // Remove a marker
    $('.remove').on("click", function() {
        // Remove the marker
        mymap.removeLayer(markers[$(this).attr('id')]);

        // Remove the link
        $(this).parent('li').remove();

        // Remove the marker from the array
        delete markers[$(this).attr('id')];

    });
};
};






var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "Saxony",
        "amenity": "State",
        "popupContent": "This is where we live!",

    },
    "geometry": {
      "type": "Polygon",
      "coordinates": [[
        [
            13.623046875,
            51.37863823622004
          ],
          [
            13.38134765625,
            51.45400691005982
          ],
          [
            13.194580078125,
            51.406059404992746
          ],
          [
            13.062744140625,
            51.63847621195153
          ],
          [
            12.777099609375,
            51.66574141105715
          ],
          [
            12.139892578125,
            51.549751017014195
          ],
          [
            12.139892578125,
            51.337475662965204
          ],
          [
            12.1728515625,
            51.103521942404186
          ],
          [
            12.59033203125,
            51.00684227163969
          ],
          [
            12.59033203125,
            50.94458443495011
          ],
          [
            12.2607421875,
            50.78510168548186
          ],
          [
            12.293701171875,
            50.680797145321655
          ],
          [
            12.073974609375,
            50.55532498251967
          ],
          [
            11.898193359375,
            50.597186230587035
          ],
          [
            11.88720703125,
            50.42951794712287
          ],
          [
            12.0849609375,
            50.28933925329178
          ],
          [
            12.32666015625,
            50.20503326494332
          ],
          [
            12.50244140625,
            50.39451208023374
          ],
          [
            12.843017578124998,
            50.46449795300867
          ],
          [
            12.98583984375,
            50.42951794712287
          ],
          [
            13.480224609375,
            50.645977340713586
          ],
          [
            13.7548828125,
            50.736455137010665
          ],
          [
            14.271240234375,
            50.86837814203458
          ],
          [
            14.3701171875,
            50.91688748924508
          ],
          [
            14.30419921875,
            51.020666012558095
          ],
          [
            14.512939453125,
            51.034485632974125
          ],
          [
            14.622802734374998,
            50.88917404890332
          ],
          [
            14.820556640625,
            50.826758482363275
          ],
          [
            15.073242187499998,
            51.27566243415853
          ],
          [
            14.952392578124998,
            51.481382896100975
          ],
          [
            14.69970703125,
            51.56341232867588
          ],
          [
            14.26025390625,
            51.549751017014195
          ],
          [
            13.985595703125,
            51.39920565355378
          ],
          [
            13.623046875,
            51.37863823622004
          ]
      ]]
    }
};

var myStyle = {
    "color": "#ff7800",
    "weight": 2,
    "opacity": 0.65
};

var myLayer = L.geoJSON(myLayer, {
    style: myStyle
}).addTo(mymap);


myLayer.addData(geojsonFeature);
myLayer.bindPopup("<b>Hello world!</b><br>I am a popup.");
