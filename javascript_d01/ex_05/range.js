
function range (start, end, step) 

{
    var array = [];
   

    step = step || 1;

    if (step > 0) 
    {
        while (start <= end) 
        {
            array.push(start);
            start += step;
        }
    } 

    else 
    {
        while (start >= end) 
        {
            array.push(start);
            start += step;
        }
    }

    return array;
}

console.log(range(1, 10, 2));
console.log(range(19, 22));
console.log(range(5, 2, -1));