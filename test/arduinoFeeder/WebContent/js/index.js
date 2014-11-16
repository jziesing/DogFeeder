// The global object
AF = {};
AF.events = _.extend({},Backbone.Events);
AF.scheduleFeeds = []; 
	
AF.init = $("document").ready(function init(){
	// get all the scheduled feeds
	$.ajax({url: "/arduinoFeeder/ScheduleFeed", success: function(res){ AF.scheduleFeeds = JSON.parse(res); }, async: false, });
	
	// get data here, then pass it to the controller view or save it in the TT object
	AF.controllerView = new ControllerView();
	
	$('body').append(AF.controllerView.render().$el);
});