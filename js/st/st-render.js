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
		st.render.renderSystems();	
		$(".st-page").removeClass("st-initial-state");
	},
	renderShip: function() {
		st.log("render ship");
		
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
	renderSystems: function() {
		st.log("render systems");
		
		var systems = st.ship.spec.systems;
		var s = [];
		s.push("<div class=\"st-systems\">");
		s.push("<table class=\"st-systems-table\">");
		
		// thead
		s.push("<thead>");
		s.push("<tr>");
		
		s.push("<th>");
		s.push("System");
		s.push("</th>");
		s.push("<th>");
		s.push("Hit Range");
		s.push("</th>");
		s.push("<th>");
		s.push("Current<br/>Damage");
		s.push("</th>");
		s.push("<th>");
		s.push("Max<br/>Damage");
		s.push("</th>");
		s.push("<th>");
		s.push("Absorbs<br/>Damage");
		s.push("</th>");
		s.push("<th>");
		s.push("Energy<br/>Cost");
		s.push("</th>");
		s.push("<th>");
		s.push("Energy<br/>Spent");
		s.push("</th>");
		s.push("<th>");
		s.push("Energy<br/>Max");
		s.push("</th>");
		s.push("<th>");
		s.push("Range");
		s.push("</th>");
		s.push("<th>");
		s.push("Effectiveness");
		s.push("</th>");
		s.push("<th>");
		s.push("Skill");
		s.push("</th>");
		s.push("<th>");
		s.push("Weapon<br/>Damage");
		s.push("</th>");
		s.push("<th>");
		s.push("Weapon<br/>ROF");
		s.push("</th>");
		s.push("<th>");
		s.push("Weapon<br/>Arc");
		s.push("</th>");
		s.push("<th>");
		s.push("Weapon<br/>Endurance");
		s.push("</th>");
		
		s.push("</tr>");
		s.push("</thead>");
				
		// tbody
		s.push("<tbody>");
		_.each(systems, function(system) {
			var systemClass = "st-system-general";
			if (system["energy.max"]) {
				systemClass = "st-system-energy";
			}
			if (system["damage.absorbs"]) {
				systemClass = "st-system-shield";
			}
			if (system["weapon.damage"]) {
				systemClass = "st-system-weapon";
			}
			if (system["effectiveness"]) {
				systemClass = "st-system-sensors";
			}
			s.push("<tr class=\"" + systemClass + "\">");
			s.push("<td nowrap=\"nowrap\">");
			s.push(system["system.name"]);
			s.push("</td>");
			s.push("<td>");
			s.push(system["hit.start"] + " - " + system["hit.end"]);
			s.push("</td>");
			s.push("<td>");
			s.push(st.render.emptyIfZero(system["damage.current"]));
			s.push("</td>");
			s.push("<td>");
			s.push(system["damage.max"]);
			s.push("</td>");
			s.push("<td>");
			s.push(st.render.naIfZero(system["damage.absorbs"]));
			s.push("</td>");
			s.push("<td>");
			s.push(st.render.naIfZero(system["energy.cost"]));
			s.push("</td>");
			s.push("<td>");
			s.push(st.render.emptyIfZero(system["energy.spent"]));
			s.push("</td>");
			s.push("<td>");
			s.push(st.render.emptyIfZero(system["energy.max"]));
			s.push("</td>");
			s.push("<td>");
			s.push(st.render.naIfZero(system["range"]));
			s.push("</td>");
			s.push("<td>");
			s.push(st.render.naIfZero(system["effectiveness"]));
			s.push("</td>");
			s.push("<td>");
			s.push(st.render.naIfZero(system["skill"]));
			s.push("</td>");
			s.push("<td>");
			s.push(st.render.naIfZero(system["weapon.damage"]));
			s.push("</td>");
			s.push("<td>");
			s.push(st.render.naIfZero(system["weapon.rof"]));
			s.push("</td>");
			s.push("<td>");
			s.push(st.render.naIfZero(system["weapon.arc"]));
			s.push("</td>");
			s.push("<td>");
			s.push(st.render.naIfZero(system["weapon.endurance"]));
			s.push("</td>");

			s.push("</tr>");
		});
		
		s.push("</tbody>");
		s.push("</table>");
		
		s.push("</div>");
		st.render.$pageft.append($(s.join("")));	
	},
	emptyIfZero: function(val) {
		return val === 0 ? "" : val;
	},
	naIfZero: function(val) {
		return val === 0 ? "NA" : val;
	},
	renderReset: function() {
		st.render.$pageft.html("");
	}
};