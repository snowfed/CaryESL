function open_nav ()
{
	$("div.sidenav").addClass("open");
}

function close_nav ()
{
	$("div.sidenav").removeClass("open");
}

function open_section (item)
{
	$("nav a").removeClass("active");
	$("#"+item).addClass("active");
	var main_section = $("#main_section");
	var ending = (main_section.hasClass("Russian") ? "_rus.html" : ".html");
	main_section.removeClass("wallpaper");
	main_section.load("static/" + item + ending);
	close_nav();
}

function load_wallpaper ()
{
	$("nav a").removeClass("active");
	var main_section = $("#main_section");
	main_section.html("");
	main_section.addClass("wallpaper");
	history.replaceState({}, document.title, ".");
}

function hashchange_handler ()
{
	if (window.location.hash.length > 1)
		open_section(window.location.hash.substr(1));
	else
		load_wallpaper();
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
	hashchange_handler();
}

$(function() {
	hashchange_handler();
	$("a.closebtn").click(close_nav);
	$("a.home_icon").click(close_nav);
});
