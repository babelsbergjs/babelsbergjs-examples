var canvas, first, second;

function sendPosition (rectId, position) {
	xmlhttp = new XMLHttpRequest();
	$.ajax({
		method: "GET",
		url: "http://localhost:3000/position/" + rectId,
		data: position
	}).done(function(response) {
        var changeEvent = {onChange: canvas.renderAll.bind(canvas)};

        first.animate('left', response.first.x, changeEvent);
        first.animate('top', response.first.y, changeEvent);
        first.animate('width', response.first.width, changeEvent);
        first.animate('height', response.first.height, changeEvent);

        second.animate('left', response.second.x, changeEvent);
        second.animate('top', response.second.y, changeEvent);
        second.animate('width', response.second.width, changeEvent);
        second.animate('height', response.second.height, changeEvent);

        canvas.renderAll();
	});
}

contentLoaded(window, function() {
	canvas = new fabric.Canvas('canvas');

	first = new fabric.Rect({
		width: 200, height: 100, left: 50, top: 50,
		fill: 'red', hasControls: false
	});
	first.on('mouseup', function (event) {
		sendPosition('first', first.getBoundingRect())
	});

	second = new fabric.Rect({
		width: 75, height: 50, left: 300, top: 300,
		fill: 'green', hasControls: false
	});
	second.on('mouseup', function (event) {
		sendPosition('second', second.getBoundingRect())
	});

	canvas.add(first, second);
});
