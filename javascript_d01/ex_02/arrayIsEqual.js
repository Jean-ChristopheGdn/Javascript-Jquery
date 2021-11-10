function arrayIsEqual(arr1, arr2)
{
	
	if (Array.isArray(arr1) && Array.isArray(arr2))
	{
		if (arr1.length != arr2.length)
		{
			return false;
		}
		else 
		{
			for (let i = 0; i < arr1.length; i++ )
			{
				if (arr1[i] != arr2[i])
					{
						return false;
					}
			}
		}
		return true;
	}	

	else
	{
		return console.log("Please enter arrays.")
	}

}

var a = [1, 2];
var b = [1, 4];
console.log(arrayIsEqual(a,b));
