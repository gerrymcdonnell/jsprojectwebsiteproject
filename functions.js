function tableBegin() {
    return "<table>";
}
function tableEnd() {
    return "</table>";
}
function tableRowBegin() {
    return "<tr>";
}
function tableRowEnd() {
    return "</tr>";
}

function tableDataBegin() {
    return "<td>";
}
function tableDataEnd() {
    return "</td>";
}


function addFormTextField(sfieldname)
{
	document.write("<input type=text name=" + sfieldname + " />")
}

function getTodaysDate()
{
	var dToday=new Date();
	return dToday;
}



function addTableTextFieldRow(sLabel,sName)
{
		document.write("<tr>");
		document.write("<td>" + sLabel + ": </td>");
		document.write("<td><input type=text name='" + sName + "' /></td>");
		document.write("</tr>");
}

function printTableTextFieldRow(sLabel,sName)
{
		var str="";
		str=str + "<tr>";
		str=str + "<td>"+ sLabel + ": </td>";
		str=str + "<td><input type='text' name='" + sName + "' id='" + sName + "' size='60'/></td>";
		str=str + "</tr>";
		return str;
}


//<input type="hidden" name="hiddenField" id="hiddenField" />
function printHiddenTableTextFieldRow(sName,sValue)
{
	str="<input type=hidden name='" + sName + "' id='" + sName + "' value='" + sValue+ "' />";
	return str;
}


function printTableData(sData)
{
	var s="";
	s="<td>" +  sData  + "</td>";
	return s;	
}

function printpageLink(sPage,sLinkTitle)
{
	document.write ("<a href=" + sPage + " >" + sLinkTitle + "</a>");
}


function clearDiv()
{
	document.getElementById("content").innerHTML = "";
}

//general functions
function addButton(sName,sfunctionCall,sbuttonCaption)
{
	if(sfunctionCall=="")
		document.write("<input type=button name=" + sName + " value=" + sbuttonCaption + "></input>");
	else	
		document.write("<input type=button name=" + sName + " onclick=" + sfunctionCall + " value='" + sbuttonCaption + "' ></input>");
}


function printButton(sName,sfunctionCall,sbuttonCaption)
{
	var str="";
	if(sfunctionCall=="")
		str="<input type=button name=" + sName + " value='" + sbuttonCaption + "'></input>";
	else	
		str="<input type=button name=" + sName + " onclick='" + sfunctionCall + "' value='" + sbuttonCaption + "'></input>";
	//alert(str);
	return str;
}

//puts an img file in the img tags
function printImg(sImg)
{
	return "<img src=" + sImg + " alt = 'alt text'>";  //alt text not working
}

//eg<a href="javascript:printSearchForProductForm()">Search For Products</a></p>
//ex document.write(printJSFunctionLink("alert('test')",'testaler'));
function printJSFunctionLink(sFuncCall,sTextLink) 
{
	 //searchForProduct "('productcategory'," + sCat + ")>" 
	return "<a href=javascript:" +sFuncCall + ">"+ sTextLink + "</a>";
}


//build a table header string passin array
function CreateTableHeader(sheaderArray)
{
	var str="<thead>";
	for(i=0;i<sheaderArray.length;i++)
	{
		str+="<th>" + sheaderArray[i] + "</th>";
	}
	str+="</thead>";
	return str;
	//<th>Name</th><th>desc</th><th>price</th><th>cat</th><th>id</th><th>fire</th>
}

function test()
{
	alert("testing 123");
}