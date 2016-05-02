// alert('hello world');

var data;

$.getJSON('http://localhost:8080/SpringMVCTest/getEmployees', function(retrievedData) {
	data = retrievedData;
	console.log(data);
});