function open_nav() {
	$("#main_side_nav").css("width", "250px");
}

function close_nav() {
	$("#main_side_nav").css("width", "0px");
}

function open_section (nav_item)
{
	var main_section = $("#main_section");
	var item = nav_item.replace("_mobile", "");
	switch (item) {
		case "about":
			main_section.load("static/about.html");
			break;
		case "material":
			main_section.html("<h1>George can teach you A LOT!</h1>");
			break;
		case "timetable":
			main_section.html("<h1>Contact George in order to find out the relevant timetable.</h1>");
			break;
		case "contacts":
			main_section.html("<h1>How can I reach George?</h1><a href=\"mailto:georgemartin11@hotmail.com?subject=Feedback\">georgemartin11@hotmail.com</a>");
			break;
		case "promo":
			main_section.html("<h1>No promotional offers at the moment...</h1>");
			break;
		case "test":
			main_section.html("<h1>Under construction...</h1>");
			break;
		default:
			console.log("Unexpected item in open_section():", item);
			item = null;
	}
	return item;
}

$(function() {
	$("li a").click(function() {
		$("li a").removeClass("active");
		$(this).addClass("active");
		var nav_item = $(this).attr("id");
		open_section(nav_item);
	});
	$("#main_side_nav a").click(function() {
		if ($(this).hasClass("closebtn")) {
			close_nav();
		} else {
			var item = open_section($(this).attr("id"));
			if (item != null) {
				$("li a").removeClass("active");
				$("#"+item).addClass("active");
				close_nav();
			}
		}
	});
	$("div.header").click(function() {
		$("li a").removeClass("active");
		var main_section = $("#main_section");
		main_section.html("<img src='/static/caryesl.jpg'>");
	});
});
