var DragItemView = Backbone.View.extend({
	model: FeedModel,
	className: "drag-item-container",
	timeOutObject: null,
	
	events: {
		"click #feed-btn": "sendFeed",
	},
	
	initialize: function(){
		AF.events.bind("feedback", this.showFeedback, this);
	},
	
	template: _.template(
		'<div id="feedback" class="alert alert-success">' +
	      '<strong>Success, your dog has been fed!</strong>' +
	    '</div>' +
		'<input type="text" id="slider" value="5" style="width:180px">' +
		'<button type="button" id="feed-btn" class="btn btn-primary">Feed</button>'
	),
	
	sendFeed: function(){
		this.model.setServoSecond(this.$('#slider').val());
			//append html add alert
//		this.$el.find('#feedback').append(this.dragItemView.render().$el);
//		    setTimeout(function () {
//		    	//fade out alert
//		    }, 5000);
		
//		$('#slider').slider('setValue', 5);
		
	},
	
	showFeedback: function(){
		clearTimeout(this.timeOutObject);
		this.$el.find('#feedback').fadeIn();
		this.$('#slider').slider('setValue', 5);
		this.$('#feedback').fadeOut(2000);
	},
			
	render: function(){
		this.$el.html(this.template());
		this.$('#feedback').hide();
		//this.$(".alert").alert('close');
		return this;
	}
	
});