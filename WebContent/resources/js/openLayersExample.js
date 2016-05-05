$(document).ready(function() {
	
	var extent = [0, 0, 4000, 1801];
	var projection = new ol.proj.Projection({
		code: 'image',
		units: 'pixels',
		extent: extent
	});

	var map = new ol.Map({
		layers: [],
		target: 'map',
		view: new ol.View({
			projection: projection,
			center: ol.extent.getCenter(extent),
			zoom: 2,
			minZoom: 2,
			maxZoom: 4
		})
	});
	
	var iconStyle = new ol.style.Style({
		image: new ol.style.Icon(
			({
				anchor: [0.5, 0.5],
				anchorXUnits: 'fraction',
				anchorYUnits: 'fraction',
				scale: 0.5,
				opacity: 0.9,
				src: appContextPath + '/resources/img/waspmote.png'
			})
		)
	});	
	
	function dataCallback(returnedData, levelNumber) { // Implementation of the callback method. Never actually called except for when called back by success of JQuery's AJAX method.
		
		var waspfeatures = [];
		
		var newLayer = new ol.layer.Image({
			source: new ol.source.ImageStatic({
				attributions: 'uts.edu.au',
				url: appContextPath + '/resources/img/customMap.png',
				imageSize: [4000, 1801],
				projection: projection,
				imageExtent: extent
			})
		});
		map.addLayer(newLayer);
		
		console.log("ReturnedDataContents:");
		console.log(returnedData);
		
		for(var i in returnedData) {
			console.log("Value of location X: " + returnedData[i].locationX + "Value of location Y:" + returnedData[i].locationY);
			var feature = new ol.Feature({
				geometry: new ol.geom.Point([returnedData[i].locationX, returnedData[i].locationY]),
				name: returnedData.sensorName
			})
			feature.setStyle(iconStyle);
			waspfeatures.push(feature);
		}
		
		var vector = new ol.layer.Vector({
			source: new ol.source.Vector({
				features: waspfeatures,
				projection: projection
			})
		});
		console.log("waspfeatures length: " + waspfeatures.length);
		console.log(waspfeatures);
		
		map.addLayer(vector);
	}
	
	getJsonSensorData(dataCallback, "default"); // call AJAX function with callback function supplied as argument
	
	function getJsonSensorData(callbackFunction, level) { // takes the callback function as a parameter
		if (level === "default") {
			console.log(level);
			level = 5;
		}
		
		$.ajax({
			method: 'GET',
			// url: "http://localhost:8080/heimdall/get/waspmote/ES_B_08_422_7BDC/BAT/",
			// url: "http://localhost:8080/heimdall/get/waspmote/ES_B_08_422_7BDC/",
			// url: "http://localhost:8080/heimdall/get/weather/",
			url: "http://localhost:8080/heimdall/get/sensors/all?level=" + level,
			error: function() {
				$('#info').html('<p>An error has occured</p>');
			},
			dataType: "json",
			success: function(data) {
				//for (var i in data.subSensors) {
				//	console.log(data.subSensors[i]);
				//}
				
				$('#info').html('<p>Success!</p>');
				callbackFunction(data, level); // executes the callback function with the data inside! :D 
			}
		})
	}
	
	$('#click').popover({
		title : 'popover!',
		content : 'hello :)',
		container : 'body'
	});
	
});