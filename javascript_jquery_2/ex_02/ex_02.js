window.onload = function ()
{
	$("body>button").on('click', function()
	{
		var str = $("#text").val();
		var select = $("select").val();
		if (select === 'email')
		{
			if (emailValide(str))
			{
				$("ul").append('<li class=" '+ select + '">'+str+'</li>');
			}
			else 
			{
				$('#Erreurs').html("<div>Merci d'entrer un email valide</div>");
			}
		}
		else if (select === 'note')
		{
			if ($.isNumeric(str))
			{
				$("ul").append('<li class=" '+ select + '">'+str+'</li>');
			}
			else
			{
				$('#Erreurs').html("<div>Merci d'entrer un entier numérique.</div>");
			}

		}		
		else 
		{
		$("ul").append('<li class=" '+ select + '">'+str+'</li>');
		}
	});

function emailValide(email)
{
    var checkEmail = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(checkEmail.test(email)) 
    {
       return true;
    }
    else
    {
       return false;
    }
}


}
