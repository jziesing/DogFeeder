var VideoView = Backbone.View.extend({
	className: "video-container",
	
	events: {},
	
	initialize: function(){
		var that = this;
		
		// get the ip address of the video stream, set the streming address and start the stream
		$.post("http://128.223.6.249:8080/arduinoFeeder/MonitorIP", function(res){
			that.setStreamAddress(res);
			that.getPicture();
		});
	},
	
	template: _.template(
		'<div id="image-container"></div>'
	),
	
	setStreamAddress: function(res){
		this.ipAddress = "http://" + res + ":8080/?action=snapshot";
	},

	getPicture: function(){
		this.curFrame = new Image();
		this.curFrame.onload = _.bind(this.onloadPicture, this);
		this.curFrame.onerror = _.bind(this.onerrorPicture, this);
		this.curFrame.src = this.ipAddress;
	},

	onloadPicture: function(events){
		this.$el.find('#image-container').html(events.srcElement);
		var that = this;
		
		setTimeout(function(){
			that.getPicture();			
		}, 70);
	},

	onerrorPicture: function(events){
		this.getPicture();
	},
			
	render: function(){
		this.$el.html(this.template());
		
		return this;
	}
	
});