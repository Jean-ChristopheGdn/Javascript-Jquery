window.onload = function()
{
	$('.platypus').click (function ()
	{
		$(this).css('background-color', 'green');
		$(this).animate({marginLeft: "+=150px",marginTop: "+=200px"});
	});
}