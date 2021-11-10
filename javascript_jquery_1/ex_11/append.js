window.onload = function ()
{
	$("body>button").click(function()
	{
		var str = $("#listItem").val();
		$("body").append("<div>"+str+"</div>");
	});
}