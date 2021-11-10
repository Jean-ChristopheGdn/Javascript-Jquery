window.onload = function()
{
  $("p").on(
  {
    mouseover: function()
    {
      $(this).addClass("blue");
    },

    click: function()
    {
      $(this).toggleClass("highlighted");
    }
  });
}
