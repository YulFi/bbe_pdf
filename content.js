// Globals

var table = document.getElementsByClassName("table table-hover table-striped");
var thead = table[0].children[0];
var theadChildren = table[0].children[0].children;
var tbody = table[0].children[1];
var tbodyChildren = tbody.children;

var id;
var reverse = -1;

// Functions

function sortById0(a, b)
{
	return reverse * (a.children[id].innerText.localeCompare(b.children[id].innerText));
}

function compareDates(a, b)
{
	let matchesA = a.children[id].innerText.match(/\d+/g);
	let matchesB = b.children[id].innerText.match(/\d+/g);
	
	let date1 = new Date(matchesA[2], matchesA[1], matchesA[0]);
	let date2 = new Date(matchesB[2], matchesB[1], matchesB[0]);

	var res;
	
	if (date1 < date2)
		res = -1;
	else if (date1 > date2)
		res = 1;
	else res = 0;

	return reverse * res;
}

function sortBy(idTmp)
{
	let tableArr = [];

	for (let i = 0; i < tbodyChildren.length; i++)
	{
	tableArr.push(tbodyChildren[i]);
	}

	while (tbody.lastElementChild)
	{
	  tbody.removeChild(tbody.lastElementChild);
	}

	id = idTmp;
	tableArr.sort(sortById0);
	reverse *= -1;

	for (let i = 0; i < tableArr.length; i++)
	{
		tbody.append(tableArr[i]);
	}

	return false;
}

function sortByDate(idTmp)
{
	let tableArr = [];

	for (let i = 0; i < tbodyChildren.length; i++)
	{
		tableArr.push(tbodyChildren[i]);
	}

	while (tbody.lastElementChild)
	{
		tbody.removeChild(tbody.lastElementChild);
	}
	
	id = idTmp;
	tableArr.sort(compareDates);
	reverse *= -1;

	for (let i = 0; i < tableArr.length; i++)
	{
		tbody.append(tableArr[i]);
	}

	return false;
}

// HTML modifications

// Name
{
	let column = theadChildren[0].cells[0];
	let text = column.innerText;
	column.innerText = "";
	let newElem = document.createElement("a");
	newElem.onclick=function(){sortBy(0);}
	newElem.innerText = text;
	column.appendChild(newElem);
}

// Date update
{
	let column = theadChildren[0].cells[2];
	let text = column.innerText;
	column.innerText = "";
	let newElem = document.createElement("a");
	newElem.onclick=function(){sortByDate(2);}
	newElem.innerText = text;
	column.appendChild(newElem);
}

// Downloads count
{
	let column = theadChildren[0].cells[4];
	let cloud = column.children[0];
	column.removeChild(column.lastElementChild);
	let newElem = document.createElement("a");
	newElem.onclick=function(){sortBy(4);}
	newElem.appendChild(cloud);
	column.appendChild(newElem);
}
