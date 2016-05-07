<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/bootstrap.css">
	<!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
	<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/customMap.css">
	<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
	<title>CustomMap</title>
</head>
<body>
	Bootstrap Testing! :D
	<div class="container-fluid">
		<div class="row">
		<div class="col-md-10 col-md-offset-1">
			<form>
				<div class="form-group">
				<label for="levelSelect">Select Level: </label>
				<select class="form-control" id="levelSelect">
					<option>1</option>
					<option>2</option>
					<option>3</option>
					<option>4</option>
				</select>
				</div>
			</form>
		</div>
		</div>
	</div>
</body>
<script src="${pageContext.request.contextPath}/resources/js/jquery.js"></script>
<script src="${pageContext.request.contextPath}/resources/js/bootstrap.js"></script>
<script type="text/javascript">
	var appContextPath = "<%=request.getContextPath()%>";
	console.log(appContextPath);	
</script>
<script src="${pageContext.request.contextPath}/resources/js/customMap.js"></script>
</html>