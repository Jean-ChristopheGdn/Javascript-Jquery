

function countGs(str)
{
 
	let count = str.match(/G/g).length;
	console.log(count);

}

countGs("abcgGggGeaGfdsGG");
