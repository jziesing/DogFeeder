var MoveCameraModel = Backbone.Model.extend({
	defaults: function() {
		return {
		};
	},

	moveCamera: function(dir){
		if(dir == "left") {
			$.post("MoveCamera", {left: 1, up: 0 }, function(res){ console.log("left"); });
		} else if(dir == "right") {
			$.post("MoveCamera", {left: -1, up: 0 }, function(res){ console.log("right"); });
		} else if(dir == "up") {
			$.post("MoveCamera", {left: 0, up: 1 }, function(res){ console.log("up"); });
		} else if(dir == "down") {
			$.post("MoveCamera", {left: 0, up: -1 }, function(res){ console.log("down"); });
		}
	},
	
});