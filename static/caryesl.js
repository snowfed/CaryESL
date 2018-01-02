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
	console.log(item);
	switch (item) {
		case "about":
			main_section.html("<h1>Who is George?</h1><img src='/static/caryesl_students.jpg'>");
			break;
		case "material":
			main_section.html("<h1>George can teach you A LOT!</h1>");
			break;
		case "timetable":
			main_section.html("<h1>George has no time to teach you.</h1>");
			break;
		case "contacts":
			main_section.html("<h1>How can I reach George?</h1><a href=\"mailto:georgemartin11@hotmail.com?subject=Feedback\">georgemartin11@hotmail.com</a>");
			break;
		case "promo":
			main_section.html("<h1>No promotional offers at the moment...</h1>");
			break;
		case "test":
			main_section.html("<h1>I can see that your English is bad. Study with me!</h1>");
			break;
	}
}

$(function() {
	$("li a").click(function() {
		$("li a").removeClass("active");
		$(this).addClass("active");
		var nav_item = $(this).attr("id");
		open_section(nav_item);
	});
	$("#main_side_nav a").click(function() {
		var nav_item = $(this).attr("id");
		open_section(nav_item);
	});
	$("#main_header").click(function() {
		$("li a").removeClass("active");
		var main_section = $("#main_section");
		main_section.html("<img src='/static/caryesl.jpg'>");
	});
});
