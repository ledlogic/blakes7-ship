/* st-render.js */

st.render = {
	$pageft: null,
	init: function() {
		st.log("init render");
		st.render.$pageft = $(".st-page .st-page-ft");
	},
	render: function() {
		st.log("render");
		st.render.renderReset();		
		st.render.renderShip();	
		$(".st-page").removeClass("st-initial-state");
	},
	renderShip: function() {
		var shipName = st.ship.spec.name;
		var shipClass = st.ship.spec["class"];
		var s = [];
		s.push("<div class=\"st-ship\">");
		s.push("<label for=\"st-ship-name\">Name:</label>");
		s.push("<span id=\"st-ship-name\" class=\"st-ship-name\">" + shipName + "</span>");
		s.push("<label for=\"st-ship-class\">Class:</label>");
		s.push("<span id=\"st-ship-class\" class=\"st-ship-class\">" + shipClass + "</span>");
		s.push("</div>");
		st.render.$pageft.append($(s.join("")));	
	},
	renderReset: function() {
		st.render.$pageft.html("");
	}
};