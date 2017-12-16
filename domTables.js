// JavaScript Document


/*
 The id of the TBODY element is a global variable
 We shouldn't duplicate strings like this in the code
*/
var strTBLBODYID = "dyntblbody";

//var sDataArray=new Array("dfdfd","fdfdfd","4dfdfd","fgfgf")



function buildTablev2(tblHeaderArray,sarrayofObjects) {
	
	  //idea of table header is to allow us to title each col
	  //since the nunmber of elements in this array gives the num cols
	  var nCols=tblHeaderArray.length+1;  
	  var nRows=sarrayofObjects.length;
	
	  var tbl = document.createElement("TABLE");
	  tbl.border = "1";
	  var tblbody = document.createElement("TBODY");
	  tblbody.id = strTBLBODYID;
	  
	  //add header over colums
	  var tr = document.createElement("TR");
	  for(x=0;x<tblHeaderArray.length;x++)  {
		  
		  var td = document.createElement("TD");
		  var strText = tblHeaderArray[x]; //data
		  var tn = document.createTextNode(strText); //add data	
		  
		  
		  //TESTING ADDING ELEMENTS
		  //https://developer.mozilla.org/en/DOM/element
		  
		  //********************************************************	  
		  //add an image
		  //var img=document.createElement("img");
		  //img.setAttribute("src","img.jpg");
		  //td.appendChild(img);
		  //********************************************************
		  
		  //********************************************************
		  //add a button
		  /*var btn=document.createElement("input");
		  btn.type="button";
		  btn.value="test but";
		  btn.name="test" + x;
		  btn.onclick=function(){test();};		   //wors in IE
		  td.appendChild(btn);*/
		  //********************************************************
		  
		  
		  
		  //add data to table
		  td.appendChild(tn);	
	
		  
		  tr.appendChild(td);
		  
	  }
	  tblbody.appendChild(tr);
  
 
	
  
  	   //now add the row
	  for (row = 1; row < nRows; row++) {
		createUserRow(row, tblbody,nCols,sarrayofObjects);
	  }
	  //addDomButton("test","test","test");
	  
	  tbl.appendChild(tblbody);
	  //document.body.appendChild(tbl);
	  document.getElementById("content").appendChild(tbl);
}


function createUserRow(row, tblbody,nCols,sObjArray) {
	
  var tr = document.createElement("TR");
  
  for (col = 0; col < nCols; col++) 
  {
    var td = document.createElement("TD");
	
	strText=sObjArray[col].m_name;
	
    //var strText = "(" + row + "," + col + ")"; //data
	
    var tn = document.createTextNode(strText); //add data
	
    td.appendChild(tn);	
    tr.appendChild(td);
	
  }
  tblbody.appendChild(tr);
}


function addRow() {
  // Get a pointer to the tblbody object
  var tblbody = document.getElementById(strTBLBODYID);
  /**
     We are going to add a row using the function above,
     but we need to know how many rows are already in the
     table so that our row contents contain sensible values.
     We could have maintained the row count in a global variable
     but the code below will query the tblbodys child nodes
     in order to figure out how many child elements it contains
  */
  var nExistingRows = tblbody.childNodes.length;
  var nHowManyNew = 1;//document.getElementById("howmany").value;
  nHowManyNew = eval(nHowManyNew);
  for (i = 0; i < nHowManyNew; i++)
    createRow(nExistingRows + i, tblbody);
}


function deletetable()
{
	/*for(i=document.getElementById(strTBLBODYID).rows.length-1; i>0 ;i--)
	{
		document.getElementById(strTBLBODYID).deleteRow(i);
	}*/
	document.getElementById("content").innerHTML = "";
}


function test()
{
	alert('testing 123s');
}

function addDomButton(sName,sCaption,sFunctionCall)
{
		  //********************************************************
		  //add a button
		  var btn=document.createElement("input");
		  btn.type="button";
		  btn.value=sCaption;
		  btn.name=sName;
		  btn.onclick="function(){" + sFunctionCall + "();}";		   //wors in IE
		  return btn;
		  //********************************************************
}



