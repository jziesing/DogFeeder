var ControllerView = Backbone.View.extend({
	className: "mainContainer",	
	dragItemView: null,
	videoView: null,
	scheduleFeedView: null,
	scheduleFeedEditView: null,
	moveCameraView: null,
	
	events: {
	},
	
	initialize: function(){
		this.dragItemView = new DragItemView({model: new FeedModel()});
		this.videoView = new VideoView();
		this.scheduleFeedView = new ScheduleFeedView();
		this.scheduleFeedEditView = new ScheduleFeedEditView({model: new ScheduleFeedModel()});
		this.moveCameraView = new MoveCameraView({model: new MoveCameraModel()});
	},
	
	template: _.template(
			'<div id="main" class="container">' +
			  '<div class="header">' +
			    '<ul class="nav nav-pills pull-right">' +
			      '<li class="active"><a href="#">Home</a></li>' +
			      '<li><a href="info.html">Info</a></li>' +
			    '</ul>' +
			    '<h3 class="text-muted">Feeder</h3>' +
			  '</div>' +
			  '<div class="jumbotron">' +
			    '<h1>Feeder</h1>' +
			    '<p class="lead">An internet solution to remotely feed and monitor your dog.</p>' +
			  '</div>' +
			  '<div class="row ">' +
			    '<div class="col-lg-4">' +
			      '<h2 style="text-align: center">Feeding</h2><hr>' +
			      '<div id="feed" class="container">' +
			      '<h5>Feed Now:</h5>' +
			      '</div>' +
			      '<div id="schedule" class="container">' +
			      '<h5>Feed Later:</h5>' +
			      '</div>' +
			    '</div>' +
			    '<div id="controlContainer" class="col-lg-8">' +
			      '<h2 style="text-align: center">Monitor &amp Interact</h2><hr>' +
			      '<div id="camera-container" class="container">' +
			      '</div>' +
			      '<div id="control-container" class="container">' +
			      '</div>' +
			    '</div>' +
			  '</div>' +
			  '<div class="footer">' +
			    '<p>&copy; Feeder 2014</p>' +
			  '</div>' +
			'</div>'
			),
	
	render: function(){
		this.$el.html(this.template());
		this.$el.find('#feed').append(this.dragItemView.render().$el);
		this.$el.find('#control-container').append(this.moveCameraView.render().$el);
		this.$el.find('#camera-container').append(this.videoView.render().$el);
		this.$el.find('#schedule').append(this.scheduleFeedView.render().$el);
		this.$el.append(this.scheduleFeedEditView.render(new ScheduleFeedModel()).$el);
		
//		this.scheduleFeedEditView.render().$el.find('.modal').modal('show');
		
		return this;
	},	
});