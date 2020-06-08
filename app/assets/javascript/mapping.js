$(function (){
handler = Gmaps.build('Google');
handler.buildMap({ provider: {}, internal: {id: 'map'}}, function(){
 var polygons = handler.addPolygons(
    [
      [
        {lat:  48, lng: -3.5}, { lat: 51, lng: -0.5},
        {lat:  48, lng:  2.5}, { lat: 51, lng:  5.5},
        {lat:  48, lng:  8.5}, { lat: 42, lng:  2.5},
      ]
    ],
    { strokeColor: '#FF0000' }
  );
  handler.bounds.extendWith(polygons);
  handler.fitMapToBounds();
});
});
