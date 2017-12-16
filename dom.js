var strTBLBODYID = "dyntblbody";

//creates a table with column headers
function CreateTable(sDivName,sHeaderArray)
{
	  
	  var tbl = document.createElement("TABLE");
	  tbl.border = "1";
	  var tblbody = document.createElement("TBODY");
	  tblbody.id = strTBLBODYID;  	  
  	  
	  var oTHead = document.createElement("THEAD");
	  tbl.appendChild(oTHead);
	  
	  
	  // Insert a row into the header and set its background color.
	  oRow = document.createElement("TR");
	  oTHead.appendChild(oRow);
	  
	  // Create and insert cells into the header row.
	  for (i=0; i<sHeaderArray.length; i++)
	  {
		oCell = document.createElement("TH");
		oCell.innerHTML = sHeaderArray[i];
		oRow.appendChild(oCell);
	  }
 	  
	  tbl.appendChild(tblbody);	  
	  document.getElementById(sDivName).appendChild(tbl);
}


/**
  Creates a TD element and appends the supplied paramater "leaf" as
  a child. leaf can be a an image, button, text node, whatever
  Appends the new TD element to the supplied table row, "tr"
  Returns the new TD.
*/
function createCell(tr, leaf) {
  var td = document.createElement("TD");
  td.appendChild(leaf);
  tr.appendChild(td);
  return td;
}
/**
  Appends a cell to the supplied table row consisting of the supplied string 
  as a text node. Resulting hierarchy tr->td->textnode
  Returns the new TD.
*/
function createTextCell(tr, str) {
  var tn = document.createTextNode(str);
  return createCell(tr, tn);
}
/**
  Appends a cell to the supplied table row consisting a new button. 
  Sets up the buttons onclick handler and text value.
  Resulting hierarchy tr->td->button
  Returns the new TD.
*/
function createButtonCell(tr, str, handler) {
  var butn = document.createElement("INPUT");
  butn.type = "button";
  butn.onclick = handler;
  //butn.onclick=function(){test();};
  butn.value = str;
  return createCell(tr, butn);
}

//create image
function createImageCell(tr, sImg) {
	  //add an image
	  var img=document.createElement("img");
	  img.setAttribute("src",sImg);
	  return createCell(tr, img);
}
		  
		

/**
  Returns a nodes parent. While it is inefficient to call 
  this (you are better to use the "parentNode" property directly)
  it is provided for informational purposes
*/
function getParent(n) {
  return n.parentNode;
}
/**
  Given a td element, assumes it contains a single child (a text node) and
  returns the value of the text within that text node
*/
function getTextValueFromTD(td) {
  return td.childNodes[0].nodeValue;
}
/**
  Given a td element, assumes it contains a single child (a text node) and
  replaces the text within it
*/
function replaceTextValueInTD(td, str) {
  td.childNodes[0].nodeValue = str;
}


//added from webpage
function getValue(id) {
  return document.getElementById(id).value;
}

function getNameValue() {
  return getValue("idNameField");
}

function getTblBody() {
  return document.getElementById("dyntblbody");

}


function AddToTable() {
  var p = new Product("blah","sdesc","sprice","simage","sCat","id");
  productArray[productArray.length] = p;
  createRow(productArray.length - 1);
}


//add user array to table
function AddUserArrayToTable() {
  
  for(i=0;i<userArray.length;i++)
  {
  		createUserRow(i,userArray);  
  }
}



function createUserRow(i,objArray) {
  var tr = document.createElement("TR");
  tr.id = formRowId(i);
	  
  //the items to be added to the table
  createTextCell(tr,objArray[i].m_name);
  createTextCell(tr, objArray[i].m_address);
  createTextCell(tr, objArray[i].m_telephone);
  createTextCell(tr, objArray[i].m_username);
  createTextCell(tr, objArray[i].m_password);  

  createButtonCell(tr, "Delete", onDelete);  
  
  getTblBody().appendChild(tr);

}

//product DOM METHODS
//loads the array of product objects into table
function AddProductArrayToTable() {
  
  for(i=0;i<productArray.length;i++)
  {
  		createProductRow(i,productArray);  
  }
}



//reviews
//=====================================================================
function AddReviewArrayToTable() {
  
  for(i=0;i<productReviewArray.length;i++)
  {
  		createReviewRow(i,productReviewArray);  
  }
}



function createReviewRow(i,objArray) {
  var tr = document.createElement("TR");
  
  tr.id = formRowId(i);

      /*this.m_username=sname;
	  this.m_review=sreview;
	  this.m_productid=id;  */
	  
  //the items to be added to the table
  createTextCell(tr, objArray[i].m_username);
  createTextCell(tr,objArray[i].m_review);  
  createTextCell(tr, productArray[objArray[i].m_productid].m_name);
  
  getTblBody().appendChild(tr);

}
//=====================================================================

function createProductRow(i,objArray) {
  var tr = document.createElement("TR");
  tr.id = formRowId(i);
	  
  //the items to be added to the table
  createTextCell(tr, objArray[i].m_name);
  createImageCell(tr,objArray[i].m_image);
  
  createTextCell(tr, objArray[i].m_desc);
  createTextCell(tr, objArray[i].m_price);
  
  //createTextCell(tr, objArray[i].m_scat);  
  //createTextCell(tr, objArray[i].m_id);
  //createButtonCell(tr, "Add To Cart", addtoCart(i));  
  
  getTblBody().appendChild(tr);
}

var strROW_ID_PREFIX = "row_";

function formRowId(i) {
  return strROW_ID_PREFIX + i;
}

function extractRowNoFromId(strId) {
  var posRowNo = strROW_ID_PREFIX.length
  return eval(strId.substring(posRowNo, strId.length));
}


function onDelete() 
{
  getTblBody().removeChild(this.parentNode.parentNode);
}



function showProduct(id)
{
	clearDiv("content");
	//print one product by its id
	CreateTable("content",sProductTableHeader);
	
	//search array for the product id
	i=getProductByID(id);
	
	if(i!=-1)
	{	
		var tr = document.createElement("TR");
		tr.id = formRowId(i);	  
		//the items to be added to the table
		createTextCell(tr, productArray[i].m_name);
		createImageCell(tr,productArray[i].m_image);
	  
		createTextCell(tr, productArray[i].m_desc);
		createTextCell(tr, productArray[i].m_price);
		
		//createButtonCell(tr, "Add To Cart", addtoCart());  //test works
	}
	getTblBody().appendChild(tr);
	
}

