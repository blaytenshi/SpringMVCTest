<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!doctype html>
<html lang="en">
<head>
<link rel="stylesheet" href="http://openlayers.org/en/v3.15.1/css/ol.css" type="text/css">
<style>
.map {
	height: 600px;
	width: 100%;
}
</style>
<script src="http://openlayers.org/en/v3.15.1/build/ol.js" type="text/javascript"></script>
<title>OpenLayers 3 example</title>
</head>
<body>
	<h2>My Map</h2>
	<div id="map" class="map"></div>
	<script type="text/javascript">
		var appContextPath = "<%=request.getContextPath()%>";
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
	</script>
</body>
</html>