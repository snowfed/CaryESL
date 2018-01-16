function open_nav() {
	$("#main_side_nav").css("width", "60vw");
}

function close_nav() {
	$("#main_side_nav").css("width", "0vw");
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
			main_section.load("static/material.html");
			break;
		case "timetable":
			main_section.load("static/timetable.html");
			break;
		case "contacts":
			main_section.load("static/contacts.html");
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
