window.onload = function()

{

    var select = document.querySelector("footer div");

    select.onclick = function()
    {

        var nom = "";

        while(nom == "")
        {
            nom = prompt("Quel est votre nom ?");
        
        }

        if(confirm("Etes vous sûr que " + nom + " est votre nom?"))
        {
            select.textContent = "Bonjour " + nom + " !";
        }
    }

}