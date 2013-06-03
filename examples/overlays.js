var seattle = [-13618019.918127416, 6050307.967492877];

var map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.TileLayer({
      source: new ol.source.Stamen({
        layer: 'watercolor'
      })
    })
  ],
  view: new ol.View2D({
    center: seattle,
    zoom: 11
  })
});

var popup = new ol.Overlay({
  map: map,
  element: document.getElementById('popup')
});

var hdms;
function getContent() {
  return '<p>The location you clicked is:</p><code>' + hdms + '</code>';
}

map.on('click', function(evt) {
  var element = popup.getElement();
  var coordinate = evt.getCoordinate();
  hdms = ol.coordinate.toStringHDMS(ol.projection.transform(
      coordinate, 'EPSG:3857', 'EPSG:4326'));
  popup.setPosition(coordinate);
  $(element).popover({
    'placement': 'top',
    'html': true,
    'content': getContent
  });
  $(element).popover('show');
});
