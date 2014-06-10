var ControllerView = Backbone.View.extend({
	className: "mainContainer",	
	dragItemView: null,
	videoView: null,
	scheduleFeedView: null,
	scheduleFeedEditView: null,
	audioView: null,
	
	events: {
	},
	
	initialize: function(){
		this.dragItemView = new DragItemView({model: new FeedModel()});
		this.videoView = new VideoView();
		this.scheduleFeedView = new ScheduleFeedView();
		this.scheduleFeedEditView = new ScheduleFeedEditView({model: new ScheduleFeedModel()});
		this.audioView = new AudioModelView();
	},
	
	template: _.template(
			'<div id="headerContainer">' +
				'<div id="headerIconContainer"><img src="img/bone.png" style="height: 100px;"></div>' +
				'<div id="headersContainer"><h1>Arduino Feeder</h1></div>' +
			'</div>' +
			'<div id="contentContainer">' +
				'<div id="scheduleContainer">' +
				'</div>' +
				'<div id="controlContainer">' +
				'</div>' +
				'<div id="feedingContainer">' +
					'<h4>Feeding Control</h4>' +
				'</div>' +
			'</div>'
			),
	
	newTemplate: _.template(
			'<div class="container">' +
			  '<div class="header">' +
			    '<ul class="nav nav-pills pull-right">' +
			      '<li class="active"><a href="#">Home</a></li>' +
			      '<li><a href="#">Team</a></li>' +
			    '</ul>' +
			    '<h3 class="text-muted">Feeder</h3>' +
			  '</div>' +
			  '<div class="jumbotron">' +
			    '<h1>Feeder</h1>' +
			    '<p class="lead">An internet solution to remotely feed and monitor your dog.</p>' +
			  '</div>' +
			  '<div class="row">' +
			  	'<div id="stream" class="col-md-6 col-md-offset-3">' +
			  		'<iframe align="middle" style="text-align: center" width="420" height="345" src="http://www.youtube.com/embed/XGSy3_Czz8k" ></iframe>' +
				'</div>' +
			  '</div>' +
			  '<div class="row marketing">' +
			    '<div class="col-lg-4">' +
			      '<h2 style="text-align: center">Feeding</h2><hr>' +
			      '<div id="feed" class="container">' +
			      '<h5>Feed Now:</h5>' +
			      '</div>' +
			      '<div id="schedule" class="container">' +
			      '<h5>Feed Later:</h5>' +
			      '</div>' +
			    '</div>' +
			    '<div class="col-lg-8">' +
			      '<h2 style="text-align: center">Monitor &amp Interact</h2><hr>' +
			      '<div id="move" class="container">' +
			      '</div>' +
			      '<div id="see" class="container">' +
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
		this.$el.find('#feedingContainer').append(this.dragItemView.render().$el);
		this.$el.find('#controlContainer').append(this.videoView.render().$el);
		this.$el.find('#scheduleContainer').append(this.scheduleFeedView.render().$el);
		this.$el.find('#controlContainer').append(this.audioView.render().$el);
		this.$el.append(this.scheduleFeedEditView.render().$el.hide());
		
		return this;
	},	
});