window.onload = function()
{
  $("p").on(
  {
    mouseenter: function()
    {
      $(this).css('background-color', 'LightGray');
    },
    mouseleave: function()
    {
      $(this).css('background-color', 'white');
    },
    click: function()
    {
      $(this).hide();
    }
  });
}
