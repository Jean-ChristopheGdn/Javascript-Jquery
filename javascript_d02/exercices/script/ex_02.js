
window.onload = function()

{

	var compteur = 0;
	var footer = document.getElementsByTagName("footer")[0];

	footer.onclick = function count_click()

	{

	compteur++;
	document.getElementsByTagName("div")[2].textContent = compteur;

	}

}