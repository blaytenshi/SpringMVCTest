var map = L.map('customMap', {
	crs: L.CRS.Simple,
	minZoom: -2,
	maxZoom: 1
});

var bounds = [[0,0], [1801,4000]];
var image = L.imageOverlay(appContextPath+'/resources/img/customMap.png', bounds).addTo(map);

map.fitBounds(bounds);
