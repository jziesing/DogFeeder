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
		this.listenTo(this.model, 'change', this.render);
	},
	
	template: _.template(
			'<span class="glyphicon glyphicon-remove"></span>' +
			'<div class="">Hour: <%= hour %></div>' +
			'<div class="">Minute: <%= minute %></div>' +
			'<div class="">Amount: <%= amount %> Seconds</div>' +
			'<button type="button" class="schedule-feed-edit btn btn-info">Edit</button>' +
			'<hr>'
//			'<button type="button" class="schedule-feed-remove btn btn-default">Remove</button>'
			),
			
	// trigger event to show this model in the edit view
	showContactEditView: function(){
		AF.events.trigger("showScheduleFeedEdit", this.model);
	},
	
	// function to render the view
	render: function(){
		var tempJSON = this.model.toJSON();
		if (tempJSON.hour<12){
			if (tempJSON.hour == 0){
				tempJSON.hour = "12 am";
			}else{
				tempJSON.hour = tempJSON.hour + " am";
			}
		}else{
			if (tempJSON.hour == 12){
				tempJSON.hour = "12 pm";
			}else{
				tempJSON.hour = (tempJSON.hour-12) + " pm";
			}
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
			'<div class="well"><div>'
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
		this.$('.well').append(scv.render().$el);
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
			'<div style="padding-left: 5%">' +
				'<div>Hour:</div>' +
				'<div class="hour-drop-down-container">' +
					'<select id="hour-select" style="max-width:150px;" class="form-control">' +
					'</select>' +
				'</div>' +
				
				'<div>Minute:</div>' +
				'<div class="minute-drop-down-container">' +
					'<select id="minute-select" style="max-width:150px;"  class="form-control">' +
					'</select>' +
				'</div>' +
				
				'<div>Amount:</div>' +
				'<div class="amount-drop-down-container">' +
					'<select id="amount-select"  style="max-width:150px;" class="form-control">' +
					'</select>' +
				'</div>' +
				'<br><button id="create_btn" type="button" class="reset_btn btn btn-primary">Create</button>' +
			'</div>' +
			'<h5>Scheduled Feeds:</h5>'
			),
	
	// function to render the view
	render: function(){
		this.$el.html(this.template());
		// populate the hour drop down list
		for (var i=0; i < 12; i++){
			if (i == 0){
				this.$el.find('#hour-select').append('<option value="'+i+'">12 AM</option>');				
			}else{
				this.$el.find('#hour-select').append('<option value="'+i+'">'+i+' AM</option>');				
			}
		};
		for (var i=12; i < 24; i++){
			if (i == 12){
				this.$el.find('#hour-select').append('<option value="'+i+'">12 PM</option>');
			}else{
				this.$el.find('#hour-select').append('<option value="'+i+'">'+(i-12)+' PM</option>');
			}
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
	},
	
	initialize: function(){
		AF.events.bind("showScheduleFeedEdit", this.showCurrentScheduleFeed, this);
	},
	
	template: _.template(
			'<div class="modal fade">\
			  <div class="modal-dialog">\
			    <div class="modal-content">\
			      <div class="modal-header">\
			        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\
			        <h4 class="modal-title">Edit Feed:</h4>\
			      </div>\
			      <div class="modal-body">\
					<div class="modal-body-container">\
						<div class="well">\
							<div>Hour: </div>\
							<div class="drop-down-container">\
								<select id="hour-select" class="form-control">\
								</select>\
							</div>\
							<div>Minute: </div>\
							<div class="drop-down-container">\
								<select id="minute-select" class="form-control">\
								</select>\
							</div>\
							<div>Amount: </div>\
							<div class="drop-down-container">\
								<select id="amount-select" class="form-control">\
								</select>\
							</div>\
						</div>\
					</div>\
			      </div>\
			      <div class="modal-footer">\
			        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>\
					<button type="button" class="schedule-feed-save btn btn-primary btn-default">Save</button>\
			      </div>\
			    </div><!-- /.modal-content -->\
			  </div><!-- /.modal-dialog -->\
			</div><!-- /.modal -->'
//			'<div class="schedule-feed-body">' +
//				'<div>Edit Feed:</div>' +
//				'<div>Hour: <%= hour %></div>' +
//				'<div class="hour-drop-down-container">' +
//					'<select id="hour-select" class="form-control">' +
//					'</select>' +
//				'</div>' +
//				
//				'<div>Minute: <%= minute %></div>' +
//				'<div class="minute-drop-down-container">' +
//					'<select id="minute-select" class="form-control">' +
//					'</select>' +
//				'</div>' +
//				
//				'<div>Amount: <%= amount %> Seconds</div>' +
//				'<div class="amount-drop-down-container">' +
//					'<select id="amount-select" class="form-control">' +
//					'</select>' +
//				'</div>' +
//			'</div>'
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
				if (res == 'time updated'){
					tempObj = {hour: tempObj.newHour, minute: tempObj.newMinute, amount: tempObj.newAmount};
					AF.controllerView.scheduleFeedView.scheduleFeedCollectionView.collection.add(tempObj);
					that.model.postDestroy();
					that.hideModal();
				}else if (res == 'amount updated'){
					that.model.set('amount', tempObj.newAmount);
					that.hideModal();
				}else{
					alert(res);
				}
			}
		);
	},
			
	hideModal: function(){
		this.$('.modal').modal('hide');
	},
			
	showCurrentScheduleFeed: function(model){
		this.model = model;
		this.render();
		this.$('.modal').modal('show');
	},
	
	// renders the view
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));

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
		
		// select the current time
		this.$('#hour-select').val(this.model.get('hour'));
		this.$('#minute-select').val(this.model.get('minute'));
		this.$('#amount-select').val(this.model.get('amount'));
		
		return this;
	},
});