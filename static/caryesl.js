$(function() {
	$("li a").click(function() {
		$("li a").removeClass("active");
		$(this).addClass("active");
		var nav_item = $(this).attr("id");
		var main_section = $("#main_section");
		switch (nav_item) {
			case "London":
				main_section.html("<h1>London</h1>")
				break;
			case "Paris":
				main_section.html("<h1>Paris</h1>")
				break;
			case "Tokyo":
				main_section.html("<h1>Tokyo</h1>")
				break;
			case "Washington":
				main_section.html("<img src='/static/caryesl_students.jpg'>");
				break;
			case "Moscow":
				main_section.html("<h1>Moscow</h1>")
				break;
			case "Canberra":
				main_section.html("<h1>Canberra</h1>")
				break;
		}
	});
	$("#main_header").click(function() {
		$("li a").removeClass("active");
		var main_section = $("#main_section");
		main_section.html("<img src='/static/caryesl.jpg'>");
	});
});
