var DragItemView = Backbone.View.extend({
	model: FeedModel,
	className: "drag-item-container",
	
	events: {},
	
	initialize: function(){
	},
	
	template: _.template(
		'<div class="food-item-droppable">Bowl</div>' +
		'<div class="food-item-draggable" data-food-type="1">Treat<br>1</div>' +
		'<div class="food-item-draggable" data-food-type="3">Food1<br>3</div>' +
		'<div class="food-item-draggable" data-food-type="6">Food2<br>6</div>' +
		'<div class="food-item-draggable" data-food-type="9">Food3<br>9</div>'
	),
			
	render: function(){
		this.$el.html(this.template());
		
		var that = this;
		
		// Makes the options draggable
		this.$el.find('.food-item-draggable').draggable({
			// notify the table when drag start
			start: function(event, ui){
			},
			containment: ".mainContainer",
			helper: "clone",
			opacity: 0.90,
		    revert: function(valid){
		    	if (valid){
		    		return false;
		    	}else{
		    		return true;
		    	}
		    },
		});
		
		// Makes the bowl droppable
		this.$el.find('.food-item-droppable').droppable({
			accept: ".food-item-draggable",
			hoverClass: ".food-item-draggable",
			tolerance: "intersect",
			drop: function( event, ui ) {
				that.model.setServoSecond(ui.draggable.data('food-type'));
				$(this).text('bowl + '+ui.draggable.data('food-type'))
			},
			over: function( event, ui ) {
				console.log('over')
				$(this).text('in')
			},
			out: function( event, ui ) {
				console.log('out')
				$(this).text('bowl')
			},
		});
		
		return this;
	}
	
});