var AudioModel = Backbone.Model.extend({
	defaults: function() {
		return {
			data: null,
		};
	},

	sendAudio: function(file){
		$.post(file, console.log("send audio"));		
	},
	
});