$(function (){
handler = Gmaps.build('Google');
handler.buildMap({ provider: {}, internal: {id: 'map'}}, function(){
  polygons = handler.addPolygons(
    gon.polygons,
    { strokeColor: '#FF0000' }
  );
  handler.bounds.extendWith(polygons);
  handler.fitMapToBounds();
});
});
