var ScheduleFeedModel = Backbone.Model.extend({
	defaults: function() {
		return {
			hour: 0,
			minute: 0,
			amount: 0,
			lastFeedTime: "Not Available",
		};
	},
	
	postDestroy: function(){
		var tempObj = {type: 'remove', hour: this.get('hour'), minute: this.get('minute'), amount: this.get('amount')};
		$.post("/arduinoFeeder/ScheduleFeed", 
			tempObj,
			function(res){
				console.log(res);
			}
		);
		
		this.destroy();
	},
});

var ScheduleFeedCollection = Backbone.Collection.extend({
	model:ScheduleFeedModel,
	comparator: function(model){
		var now = new Date();
		
		if (now.getHours() < parseInt(model.get('hour')) || (now.getHours() == parseInt(model.get('hour')) && now.getMinutes() <= parseInt(model.get('minute')))){
			return parseInt(model.get('hour'))*60 + parseInt(model.get('minute'));
		}else{
			return parseInt(model.get('hour')+24)*60 + parseInt(model.get('minute'));
		}
	},
});