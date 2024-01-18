let data=[12,54,34,53,67,23,50,87,35,19,45,78,90,83,48,10];
// for (var i = 0; i < data.length; i++) 
// {
// 	document.write(data[i]+"<br>");
// }
function getElement()
{
	let el=document.getElementById('element').value;
	if(el<data.length)
	{
	alert(data[el]);
    }
    else
    {
    	alert('Please Enter Valid Input');
    }
}