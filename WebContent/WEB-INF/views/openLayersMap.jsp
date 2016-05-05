<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!doctype html>
<html lang="en">
<head>
<link rel="stylesheet" href="http://openlayers.org/en/v3.15.1/css/ol.css" type="text/css">
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/bootstrap.css" type="text/css">
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
	</script>
	<div class="info" id="info"></div>
	<div>
		<button type="button" class="btn btn-default" id="click" data-toggle="popover">Click me!</button>
	</div>
</body>
<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/jquery.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/openLayersExample.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/bootstrap.js"></script>
</html>