window.onload = function ()
{
	$("body>button").click(function()
	{
		var str = $("#text").val();
		$("ul").append("<li>"+str+"</li>");
	});
}