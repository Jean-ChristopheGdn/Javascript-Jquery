function fizzBuzz()
{

	var str = "";

	for(let i = 1; i <= 20; i++)

	{
		if(i % 5 == 0 && i % 3 == 0)
		{
			str += "FizzBuzz";
		}

		else if(i % 3 == 0)
		{
			str += "Fizz";
		}

		else if(i % 5 == 0)
		{
			str +="Buzz";
		}        
		
		else
		{
			str += i;
		}

		if (i < 20)
		{   
			str += ", ";
		}

	}

	return console.log(str);
}

fizzBuzz();

