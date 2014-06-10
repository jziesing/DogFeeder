	// This view show the schedule feed in a compact format to be display on the list of Schedule Feeds.
	var AudioModelView = Backbone.View.extend({
		
		model: AudioModel,
		className: "audio",
		
		// init function
		initialize: function(){
		},
		
		template: _.template(
				'<div id="controls">' +
					'<img id="record" src="img/mic128.png" onclick="toggleRecording(this);">' +
					'<a id="save" href="#"><img src="img/save.svg"></a>' +
				'</div>'
				),
				
		// trigger event to show this model in the edit view
		
		// function to render the view
		render: function(){
			this.$el.html(this.template());
			return this;
		},
		
	});

