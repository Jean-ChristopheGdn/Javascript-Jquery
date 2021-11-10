window.onload = function()
{

    var select = document.querySelector("footer div");


    document.onkeypress = function(str)
    {
        if(str.key != "Enter")
        {

            select.textContent = (select.textContent + str.key).slice(-42);
        }
    }

}