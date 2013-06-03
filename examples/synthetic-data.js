var raster = new ol.layer.TileLayer({
  source: new ol.source.MapQuestOpenAerial()
});
 
var vector = new ol.layer.Vector({
  source: new ol.source.Vector({
    projection: ol.projection.get('EPSG:3857')
  }),
  style: new ol.style.Style({rules: [
    new ol.style.Rule({
      symbolizers: [
        new ol.style.Shape({
          type: ol.style.ShapeType.CIRCLE,
          size: new ol.Expression('size'),
          strokeColor: '#666666',
          fillColor: '#bada55'
        })
      ]
    })
  ]})
});
 
var count = 20000;
var features = new Array(count);
var e = 18000000;
for (var i = 0; i < count; ++i) {
  features[i] = new ol.Feature({
    'i': i,
    'size': i % 2 ? 10 : 20,
    geom: new ol.geom.Point([
      2 * e * Math.random() - e, 2 * e * Math.random() - e
    ])
  });
}
vector.addFeatures(features);
 
var map = new ol.Map({
  layers: [raster, vector],
  renderer: ol.RendererHint.CANVAS,
  target: 'map',
  view: new ol.View2D({
    center: [0, 0],
    zoom: 2
  })
});
 
var popup = new ol.Overlay({
  map: map,
  element: document.getElementById('popup')
});
map.on('mousemove', function(evt) {
  map.getFeatureInfo({
    pixel: evt.getPixel(),
    layers: [vector],
    success: function(features) {
      var info = [];
      for (var i = 0, ii = features.length; i < ii; ++i) {
        info.push(features[i].get('i'));
      }
      var element = popup.getElement();
      var coordinate = evt.getCoordinate();
      popup.setPosition(coordinate);
      $(element).popover('destroy');
      $(element).popover({
        'placement': 'top',
        'animation': false,
        'html': true,
        'content': info.join(', ')
      });
      $(element).popover(info.length ? 'show' : 'hide');
    }
  });
});