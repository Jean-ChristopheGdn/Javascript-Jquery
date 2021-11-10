window.onload = function()
{
    var button = document.querySelectorAll("footer div button");
    var select = document.querySelector("footer div select");

    button.forEach (function(button)
    {
        button.onclick = function(size)
        {
            if(size.target.textContent.trim() === "+")
            {
               document.body.style.fontSize = (parseInt(getComputedStyle(document.body).fontSize) + 1) + "px";
            }
            else if (size.target.textContent.trim() === "-")
            {
                document.body.style.fontSize = (parseInt(getComputedStyle(document.body).fontSize) - 1) + "px";
            }
        }
    });



        select.onchange = function(background) 
        {
            var color = background.target.value;
            if(color.trim() !== "")
            {
                document.body.style.backgroundColor = color;
            }
        }

}