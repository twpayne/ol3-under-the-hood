var map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.TileLayer({
      source: new ol.source.BingMaps({
        key: 'AlQLZ0-5yk301_ESrmNLma3LYxEKNSg7w-e_knuRfyYFtld-UFvXVs38NOulku3Q',
        style: 'Aerial'
      })
    })
  ],
  view: new ol.View2D({
    center: [0, 0],
    zoom: 2
  })
});
