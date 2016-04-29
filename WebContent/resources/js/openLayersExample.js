$(document).ready(function() {
	
	var extent = [0, 0, 4000, 1801];
	var projection = new ol.proj.Projection({
		code: 'image',
		units: 'pixels',
		extent: extent
	});

	var map = new ol.Map({
		layers: [
			new ol.layer.Image({
				source: new ol.source.ImageStatic({
					attributions: 'uts.edu.au',
					url: appContextPath + '/resources/img/customMap.png',
					imageSize: [4000, 1801],
					projection: projection,
					imageExtent: extent
				})
			})
		],
		target: 'map',
		view: new ol.View({
			projection: projection,
			center: ol.extent.getCenter(extent),
			zoom: 2,
			maxZoom: 8
		})
	});
	
	
	
	getJsonSensorData();
	
	function getJsonSensorData() {
		$.ajax({
			method: 'GET',
			// url: "http://localhost:8080/heimdall/get/waspmote/ES_B_08_422_7BDC/BAT/",
			url: "http://localhost:8080/heimdall/get/waspmote/ES_B_08_422_7BDC/",
			// url: "http://localhost:8080/heimdall/get/weather/",
			error: function() {
				$('#info').html('<p>An error has occured</p>');
			},
			dataType: "json",
			success: function(data) {
				for (var i in data.subSensors) {
					console.log(data.subSensors[i]);
				}
				
				$('#info').html('<p>Success!</p>');

			}
		})
	}
	
});