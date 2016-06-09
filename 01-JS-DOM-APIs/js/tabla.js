var Table = function () {
	var table  = document.createElement("table");
	var tblBody = document.createElement("tbody");

	function createHeader(){
		//Create header row
		var headTable = document.createElement("tr");

	    //create cell
	    var cell1 = document.createElement("td");
	    var cell2 = document.createElement("td");
	    var cell3 = document.createElement("td");
	    var cell4 = document.createElement("td");

	    //create values for cell head
	    var textCell1 = document.createTextNode("Name");
	    var textCell2 = document.createTextNode("Twitter User");
	    var textCell3 = document.createTextNode("Facebook user")
	    var textCell4 = document.createTextNode("GitHub User");

	    //put values into cell head
	    cell1.appendChild(textCell1);
	    cell2.appendChild(textCell2);
	    cell3.appendChild(textCell3);
	    cell4.appendChild(textCell4);

	    //put cell with values into header row
	    headTable.appendChild(cell1);
	    headTable.appendChild(cell2);
	    headTable.appendChild(cell3);
	    headTable.appendChild(cell4);

	    headTable.setAttribute("class", "tblhead");

	    //reutrn head table with four values
	    return headTable;
	 
	 }

	 this.addValues = function ( name, twitterUser, facebookUser, githubUser ){
	 	var row = document.createElement("tr");
	 	var nameCell = document.createElement("td");
	 	var twitterCell = document.createElement("td");
	 	var facebookCell = document.createElement("td");
	 	var githubCell = document.createElement("td");
	 	
	 	row.appendChild(nameCell);
	 	row.appendChild(twitterCell);
	 	row.appendChild(facebookCell);
	 	row.appendChild(githubCell);

	 	nameCell.innerHTML=name;
	 	twitterCell.innerHTML=twitterUser;
	 	facebookCell.innerHTML=facebookUser;
	 	githubCell.innerHTML=githubUser;

	 	tblBody.appendChild(row);

	 }

	 this.create = function (){
	 	tblBody.appendChild(createHeader());
	 	table.appendChild(tblBody);
	 	table.setAttribute("class", "table")
	 	return table;
	 }
}

