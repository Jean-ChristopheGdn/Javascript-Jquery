
function drawTriangle(height)

{

	

	if (Number.isInteger(height) && height >= 0)
	{
		var x ="$";
		for (let i = 0; i < height; i++)
		{		
			console.log(x);
			var x = x +"$";
		}
	}

	else

	{
		return console.log("Vous devez entrer un entier positif.");
	}

}

drawTriangle(6);
