$(function (){
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 3,
    center: {lat: 24.886, lng: -70.268},
    mapTypeId: 'terrain'
  });

  drawingManager = new google.maps.drawing.DrawingManager({
    drawingMode: null,
    drawingControl: true,
    drawingControlOptions: {
      position: google.maps.ControlPosition.TOP_CENTER,
      drawingModes: [ 'marker', 'circle', 'polygon', 'polyline', 'rectangle' ]
    }
  });
  drawingManager.addListener('polygoncomplete', function (polygon) {
    vertices = polygon.getPath();
    coors = []
    for (var i =0; i < vertices.getLength(); i++) {
      var xy = vertices.getAt(i);
      coors.push({lat: xy.lat(), lng: xy.lng()})
    }
    $.ajax({
      url: 'polygons',
      type: 'POST',
      data: {polygon: {coordinates: JSON.stringify(coors)}},
      success: function(data){alert(data)},
      error: function(data){alert(data)}
    });
  });
  drawingManager.setMap(map);

  polygons = new google.maps.Polygon({
    paths: gon.polygons,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35
  });
  polygons.setMap(map);

  div = $('#purge-all-polygons')[0]
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(div);
  div.addEventListener('click', function() {
    if (confirm('Do you want to purge all polygons?')) {
      polygons.setMap(null);
      this.style ='display:none'
      $.ajax({
        url: 'polygons/purge_all',
        type: 'DELETE',
        success: function(data){alert(data)}
      });
    }
  });
});
