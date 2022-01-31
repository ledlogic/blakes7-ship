/* st-nav.js */

st.nav = {
	ships: [],
	init: function() {
		st.log("init nav");

		$(".st-nav-link").click(st.nav.click);
		$("#st-select-ship").bind("change", st.nav.selectShip);
		st.nav.loadShips();
	},
	click: function() {
		st.log("clicked nav");

		var $that = $(this);
		var href = $that.attr("href").substring(1);
		$(".st-nav-link").removeClass("st-nav-link-active")
		$that.addClass("st-nav-link-active");
		$(".st-page").hide();
		$("." + href).show();
	},
	loadShips: function() {
		st.log("loading ships");

		var d = (new Date()).getTime();
		var url ="js/ship/st-ship-list.json" + "?d=" + d;
		$.ajax(url)
		.done(function(data, status, jqxhr) {
			st.nav.ships = data.ships;
			setTimeout(st.nav.renderShips, 10);
		})
		.fail(function() {
			alert("Error: unable to load ship list.");
		})
		.always(function() {
		});
	},
	renderShips: function() {
		st.log("rendering ships");

		var $sel = $("#st-select-ship");
		for (var i=0;i<st.nav.ships.length;i++) {
			var ship = st.nav.ships[i];
			var option = new Option();
			option.value = ship.uri;
			option.text = ship.allegiance + ": " + ship.name;
			$sel.append(option);
		}
	},
	selectShip: function() {
		st.log("selected ship");

		var $sel = $(this);
		var uri = $sel.find("option:selected").attr("value");
		if (uri) {
			st.ship.loadShip(uri);
		} else {
			st.ship.hideShip();
		}
	},
	showLinks: function() {
		$(".st-nav-links").show();
	},
	hideLinks: function() {
		$(".st-nav-links").hide();
	}
};