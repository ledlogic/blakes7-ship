/* st-ship.js */

st.ship = {
	spec: {},
	init: function() {
		st.log("init ship");
	},
	loadShip: function(uri) {
		st.log("loading ship");
		st.ship.loadShipJson(uri);
	},
	loadShipJson: function(uri) {
		st.log("loading ship from json");
		
		$.ajax("js/ship/" + uri)
		.done(function(data, status, jqxhr) {
			st.log(data);
			st.ship.spec = data;
			setTimeout(st.render.render, 10);
		})
		.fail(function() {
			alert("Error: unable to load ship: bad json file uri[" + uri + "]");
		})
		.always(function() {
		});
	}
};