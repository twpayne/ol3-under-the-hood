var view = new ol.View2D({
  center: [-9101767, 2822912],
  zoom: 14
});

var layer = new ol.layer.TileLayer({
  source: new ol.source.BingMaps({
    key: 'AlQLZ0-5yk301_ESrmNLma3LYxEKNSg7w-e_knuRfyYFtld-UFvXVs38NOulku3Q',
    style: 'Aerial'
  })
});

var map = new ol.Map({
  target: 'map',
  controls: ol.control.defaults({}, [
    new ol.control.FullScreen(),
    new ol.control.ScaleLine({
      units: ol.control.ScaleLineUnits.IMPERIAL
    })
  ]),
  layers: [layer],
  view: view
});


var rotation = new ol.dom.Input(document.getElementById('rotation'));
rotation.bindTo('value', map.getView(), 'rotation');

var geolocation = new ol.Geolocation();
geolocation.bindTo('projection', map.getView());

geolocation.on('position_changed', function() {
  var duration = 2000;
  var start = +new Date();
  var pan = ol.animation.pan({
    duration: duration,
    source: view.getCenter(),
    start: start
  });
  var bounce = ol.animation.bounce({
    duration: duration,
    resolution: 4 * view.getResolution(),
    start: start
  });
  map.addPreRenderFunctions([pan, bounce]);
  view.setCenter(geolocation.getPosition());
  geolocation.setTracking(false);
});

document.getElementById('locate').onclick = function() {
  geolocation.setTracking(true);
};
