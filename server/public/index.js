var canvas, first, second;

function sendPosition (rectId, position) {
	xmlhttp = new XMLHttpRequest();
	$.ajax({
		method: "GET",
		url: "http://localhost:3000/position/" + rectId,
		data: position
	}).done(function(response) {
		first.setLeft(response.first.x);
        first.setTop(response.first.y);
        first.setWidth(response.first.width);
        first.setHeight(response.first.height);

        second.setLeft(response.second.x);
		second.setTop(response.second.y);
		second.setWidth(response.second.width);
		second.setHeight(response.second.height);

        canvas.renderAll();
	});
}

contentLoaded(window, function() {
	canvas = new fabric.Canvas('canvas');

	first = new fabric.Rect({
		width: 200, height: 100, left: 50, top: 50,
		fill: 'red'
	});
	first.on('mouseup', function (event) {
		sendPosition('first', first.getBoundingRect())
	});

	second = new fabric.Rect({
		width: 200, height: 100, left: 300, top: 300,
		fill: 'green'
	});
	second.on('mouseup', function (event) {
		sendPosition('second', second.getBoundingRect())
	});

	canvas.add(first, second);
});
