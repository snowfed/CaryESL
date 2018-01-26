function open_nav ()
{
	$("div.sidenav").addClass("open");
}

function close_nav ()
{
	$("div.sidenav").removeClass("open");
}

function switch_language ()
{
	var main_section = $("#main_section");
	main_section.toggleClass("Russian");
	$("button.language").text(main_section.hasClass("Russian") ? "ENG" : "RUS");
	$("div.Russian").toggle();
	$("div.English").toggle();
	var active_page = $("nav a.active").attr("id");
	if (active_page == undefined)
		return;
	open_particular_section(active_page);
}

function open_particular_section (item)
{
	var main_section = $("#main_section");
	var ending = (main_section.hasClass("Russian") ? "_rus.html" : ".html");
	main_section.load("static/" + item + ending);
}

$(function() {
	$("nav a").click(function() {
		$("nav a").removeClass("active");
		$(this).addClass("active");
		var nav_item = $(this).attr("id");
		open_particular_section(nav_item);
		close_nav();
	});
	$("a.closebtn").click(close_nav);
	$("div.header").click(function() {
		$("li a").removeClass("active");
		var main_section = $("#main_section");
		main_section.html("<img src='/static/caryesl.jpg'>");
	});
});
