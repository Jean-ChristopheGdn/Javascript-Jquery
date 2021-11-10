window.onload = function ()
{
    $("#valider").on('click', function()
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

    $('#filtrer').on('change', function() 
    {

        var filtrer = $(this).val();
        $('li').show();

        if (filtrer === "note") 
        {
            $('li').not('.note').hide();
        } 
        else if (filtrer === "email") 
        {
            $('li').not('.email').hide();
        } 
        else if (filtrer === "todo") 
        {
            $('li').not('.todo').hide();
        }

    });

 $("#Recherche").on("keyup", function() 
 {
    var recherche = $(this).val().toLowerCase();
    $("#list li").filter(function() 
    {
      $(this).toggle($(this).text().toLowerCase().indexOf(recherche) > -1)
    });
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
