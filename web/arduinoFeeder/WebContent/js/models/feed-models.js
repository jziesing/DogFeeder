var FeedModel = Backbone.Model.extend({
	defaults: function() {
		return {
		};
	},

	setServoSecond: function(amount){
		$.post("Feed", {amount: amount}, function(res){ AF.events.trigger("feedback"); });
	},
	
});