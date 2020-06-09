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
      drawingModes: [
        google.maps.drawing.OverlayType.MARKER,
        google.maps.drawing.OverlayType.CIRCLE,
        google.maps.drawing.OverlayType.POLYGON,
        google.maps.drawing.OverlayType.POLYLINE,
        google.maps.drawing.OverlayType.RECTANGLE
      ]
    },
    markerOptions: {
      icon: "/assets/icon.png"
    }
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
});
