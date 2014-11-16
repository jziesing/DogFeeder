var InfoView = Backbone.View.extend({
	className: "info-container",
	
	events: {
	},
	
	initialize: function(){
	},
	
	template: _.template(
			'<h5>Move Camera:</h5><br>' +
			
			'<div class="well">' +
		        '<div class="row">' +
		          '<div class="col-md-1 col-md-offset-5"><i id="up" class="fa fa-caret-square-o-up fa-4x"></i></div>' +
		        '</div><br>' +
		        '<div class="row">' +
		          '<div class="col-md-1 col-md-offset-3"><i id="left" class="fa fa-caret-square-o-left fa-4x"></i></div>' +
		          '<div class="col-md-1 col-md-offset-1"><i id="down" class="fa fa-caret-square-o-down fa-4x"></i></div>' +
		          '<div class="col-md-1 col-md-offset-1"><i id="right" class="fa fa-caret-square-o-right fa-4x"></i></div>' +
		        '</div>' +
		    '</div>' 
	),
		
	
	render: function(){
		this.$el.html(this.template());
		return this;
	}
	
});