/* st.js */

var st = {
	log: function(s) {
		if (typeof(window.console) != "undefined") {
			console.log(s);
		}
	},

	init: function() {
		st.render.init();
		st.ship.init();
		st.nav.init();
	}
};

$(document).ready(st.init);
