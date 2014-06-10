// This view show the schedule feed in a compact format to be display on the list of Schedule Feeds.
var ScheduleFeedModelView = Backbone.View.extend({
	model: ScheduleFeedModel,
	className: "schedule-feed",
	
	events: {
		"click .glyphicon-remove": "removeFeed",
		"click .schedule-feed-remove": "removeFeed",
		"click .schedule-feed-edit": "showContactEditView",
	},
	
	// init function
	initialize: function(){
	},
	
	template: _.template(
			'<span class="glyphicon glyphicon-remove"></span>' +
			'<div class="">Hour: <%= hour %></div>' +
			'<div class="">Minute: <%= minute %></div>' +
			'<div class="">Amount: <%= amount %> Seconds</div>' +
			'<button type="button" class="schedule-feed-edit btn btn-default">Edit</button>' +
			'<button type="button" class="schedule-feed-remove btn btn-default">Remove</button>'
			),
			
	// trigger event to show this model in the edit view
	showContactEditView: function(){
		AF.events.trigger("showScheduleFeedEdit", this.model);
	},
	
	// function to render the view
	render: function(){
		var tempJSON = this.model.toJSON();
		if (tempJSON.hour<12){
			tempJSON.hour = tempJSON.hour + " am";
		}else{
			tempJSON.hour = (tempJSON.hour-12) + " pm";
		}
		
		this.$el.html(this.template(tempJSON));
		return this;
	},
	
	removeFeed: function(){
		this.model.postDestroy();
	},
});

// This view contains a collection of contact view to be display on the list of Schedule Feeds.
var ScheduleFeedCollectionView = Backbone.View.extend({
	collection: ScheduleFeedCollection,
	className: "feed-list-container",
	
	// init function, set the view to listen to various events
	initialize: function() {
		// listen to changes events and render this view when event is trapped
		this.listenTo(this.collection, 'add', this.render);
		this.listenTo(this.collection, 'remove', this.render);

//		this.collection.sort();
	},
	
	template: _.template(
			''
			),
	
	//set the collection comparator to sort by last name
//	setCollectionComparatorByLastName: function(){
//		this.collection.comparator = this.collection.strategies['lastName'];
//		this.collection.sort();
//	},
	
	// renders the view
	render: function(){
		this.$el.html(this.template());
		this.collection.sort();
		
		//add all the support item
		this.collection.forEach(this.addOne, this);
		
		// set interview to update every minute
		var that = this;
		setTimeout(function(){
			that.render();
		}, 60*1000);
		
		return this;
	},
	
	// add each of the contact view under this collection view
	addOne: function(m){
		var scv = new ScheduleFeedModelView({model: m});
		this.$el.append(scv.render().$el);
	},
	
});

var ScheduleFeedView = Backbone.View.extend({
	className: "schedule-feed-container",
	scheduleFeedCollectionView: null,
	
	events: {
		"click #create_btn": "createNewFeed", 
	},
	
	// init function
	initialize: function(){
		this.scheduleFeedCollectionView = new ScheduleFeedCollectionView({collection: new ScheduleFeedCollection(AF.scheduleFeeds)})
	},
	
	createNewFeed: function(){
		var hour = this.$('#hour-select').val();
		var min = this.$('#minute-select').val();
		var amount = this.$('#amount-select').val();
		var tempObj = {type: 'create', hour: hour, minute: min, amount: amount};
		
		var that = this;
		$.post("/arduinoFeeder/ScheduleFeed", 
			tempObj,
			function(res){
				if (res=="feed created"){
					that.scheduleFeedCollectionView.collection.add(tempObj);
				}else{
					alert(res);
				}
			}
		);
	},
	
	template: _.template(
			'<h5>Create New Feed:</h5>' +
			'<div>Hour:</div>' +
			'<div class="hour-drop-down-container">' +
				'<select id="hour-select" class="form-control">' +
				'</select>' +
			'</div>' +
			
			'<div>Minute:</div>' +
			'<div class="minute-drop-down-container">' +
				'<select id="minute-select" class="form-control">' +
				'</select>' +
			'</div>' +
			
			'<div>Amount:</div>' +
			'<div class="amount-drop-down-container">' +
				'<select id="amount-select" class="form-control">' +
				'</select>' +
			'</div>' +
			'<button id="create_btn" type="button" class="reset_btn btn btn-default">Create</button>' +
			'<h5>Scheduled Feeds:</h5>'
			),
	
	// function to render the view
	render: function(){
		this.$el.html(this.template());
		// populate the hour drop down list
		for (var i=0; i < 12; i++){
			this.$el.find('#hour-select').append('<option value="'+i+'">'+i+' AM</option>');
		};
		for (var i=12; i < 24; i++){
			this.$el.find('#hour-select').append('<option value="'+i+'">'+(i-12)+' PM</option>');
		};
		
		// populate the minute drop down list
		for (var i=0; i < 60; i++){
			this.$el.find('#minute-select').append('<option value="'+i+'">'+i+'</option>');
		};
		
		// populate the amount drop down list
		for (var i=1; i < 10; i++){
			this.$el.find('#amount-select').append('<option value="'+i+'">'+i+' Seconds </option>');
		};
		
		this.$el.append(this.scheduleFeedCollectionView.render().$el);
		return this;
	},
});

var ScheduleFeedEditView = Backbone.View.extend({
	model: ScheduleFeedModel,
	firstTimeRender: true,
	
	className: "schedule-feed-edit-container",
	
	events: {
		"click .schedule-feed-save": "updateFeed",
		"click .schedule-feed-cancel": "cancelEdit",
	},
	
	initialize: function(){
		AF.events.bind("showScheduleFeedEdit", this.showCurrentScheduleFeed, this);
	},
	
	template: _.template(
			'<div class="schedule-feed-body">' +
				'<div>Edit Feed:</div>' +
				'<div>Hour: <%= hour %></div>' +
				'<div class="hour-drop-down-container">' +
					'<select id="hour-select" class="form-control">' +
					'</select>' +
				'</div>' +
				
				'<div>Minute: <%= minute %></div>' +
				'<div class="minute-drop-down-container">' +
					'<select id="minute-select" class="form-control">' +
					'</select>' +
				'</div>' +
				
				'<div>Amount: <%= amount %> Seconds</div>' +
				'<div class="amount-drop-down-container">' +
					'<select id="amount-select" class="form-control">' +
					'</select>' +
				'</div>' +
				'<button type="button" class="schedule-feed-save btn btn-default">Done Editing</button>' +
				'<button type="button" class="schedule-feed-cancel btn btn-default">Cancel</button>' +
			'</div>'
			),
	
	updateFeed: function(){
		var hour = this.$('#hour-select').val();
		var min = this.$('#minute-select').val();
		var amount = this.$('#amount-select').val();
		var tempObj = {type: 'update', hour: this.model.get('hour'), minute: this.model.get('minute'), amount: this.model.get('amount'), 
				newHour: hour, newMinute: min, newAmount: amount};
		
		var that = this;
		$.post("/arduinoFeeder/ScheduleFeed", 
			tempObj,
			function(res){
				if (res == 'updated'){
					tempObj = {hour: tempObj.newHour, minute: tempObj.newMinute, amount: tempObj.newAmount};
					AF.controllerView.scheduleFeedView.scheduleFeedCollectionView.collection.add(tempObj);
					that.model.postDestroy();
					that.cancelEdit();
				}else{
					alert(res);
				}
			}
		);
	},
			
	cancelEdit: function(){
		this.$el.hide();
	},
			
	showCurrentScheduleFeed: function(model){
		this.model = model;
		this.render();
		this.$el.show();
	},
	
	// renders the view
	render: function(){
		var tempJSON = this.model.toJSON();
		if (tempJSON.hour<12){
			tempJSON.hour = tempJSON.hour + " am";
		}else{
			tempJSON.hour = (tempJSON.hour-12) + " pm";
		}
		
		this.$el.html(this.template(tempJSON));
		this.$el.draggable({ containment: "parent" });

		// populate the hour drop down list
		for (var i=0; i < 12; i++){
			this.$el.find('#hour-select').append('<option value="'+i+'">'+i+' AM</option>');
		};
		for (var i=12; i < 24; i++){
			this.$el.find('#hour-select').append('<option value="'+i+'">'+(i-12)+' PM</option>');
		};
		
		// populate the minute drop down list
		for (var i=0; i < 60; i++){
			this.$el.find('#minute-select').append('<option value="'+i+'">'+i+'</option>');
		};
		
		// populate the amount drop down list
		for (var i=1; i < 10; i++){
			this.$el.find('#amount-select').append('<option value="'+i+'">'+i+' Seconds </option>');
		};
		
		// set the view to the top left corner if it is the first time render
		if (this.firstTimeRender){
			this.$el.css("left", "10%");
			this.$el.css("top", "-90%");
			
			this.firstTimeRender = false;
		}
		
		return this;
	},
});