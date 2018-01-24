function open_nav ()
{
	$("#main_side_nav").css("width", "60vw");
}

function close_nav ()
{
	$("#main_side_nav").css("width", "0vw");
}

function switch_language ()
{
	var main_section = $("#main_section");
	main_section.toggleClass("Russian");
	$("button.language").text(main_section.hasClass("Russian") ? "ENG" : "RUS");
	var active_page = $("li a.active").attr("id");
	if (active_page == undefined)
		return;
	open_section(active_page);
}

function open_particular_section (item, page_name, main_section = null)
{
	if (main_section == null)
		main_section = $("#main_section");
	var ending = (main_section.hasClass("Russian") ? "_rus.html" : ".html");
	main_section.load("static/" + page_name + ending);
}

function open_section (nav_item)
{
	var item = nav_item.replace("_mobile", "");
	switch (item) {
		case "about":
			open_particular_section(item, "about");
			break;
		case "material":
			open_particular_section(item, "material");
			break;
		case "timetable":
			open_particular_section(item, "timetable");
			break;
		case "contacts":
			open_particular_section(item, "contacts");
			break;
		case "promo":
			$("#main_section").html("<h1>No promotional offers at the moment...</h1>");
			break;
		case "test":
			open_particular_section(item, "test");
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
