
var table = document.getElementsByClassName("table table-hover table-striped");

var tableArr = [];

for (var i = 0; i < table[0].children[1].children.length; i++)
{
	tableArr.push(table[0].children[1].children[i]);
}

//table[0].children[1].children[0].remove();

while (table[0].children[1].lastElementChild) 
{
    table[0].children[1].removeChild(table[0].children[1].lastElementChild);
}

for (var i = 0; i < tableArr.length; i++)
{
	console.log(tableArr[i].children[4].innerText);
	
	if (tableArr[i].children[4].innerText == "0")
	{
		table[0].children[1].append(tableArr[i]);
	}
}



//console.log(table.length);
//console.log(table[0].children[1].children);

//var list = table[0].children[1].children;
//
//var sort_by_number_of_downloads = function(a, b) 
//{
//	if (a != null && a.children[4] != null && b != null && b.children[4] != null)
//		return a.children[4].innerText.localeCompare(b.children[4].innerText);
//	else
//		return 0;
//}
//
//var itemsArr = [];
//
//for (var i in list) {
//	itemsArr.push(i);
//	
//	if (i.children != null && i.children.length > 3)
//		console.log(i.children[4].innerText);
//}
//
////itemsArr.sort(sort_by_number_of_downloads);
//
//for (i = 0; i < itemsArr.length; ++i) {
//  table[0].children[1].appendChild(itemsArr[i]);
//}
