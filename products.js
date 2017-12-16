 var sProductTableHeader=new Array("Name","Image","Description","Price");
 	
	var ProductCats =new Array(
	"Hard_Drive",
	"CPU",
	"Laptop",
	"Graphics_Cards",
	"DVDs",
	"Music"); // 
 
  function getName() 
  {
   return this.m_name;
  }
  
  function getPrice() 
  {
   return this.m_price;
  }
  
  function Product(sname,sdesc,sprice,simage,sCat,id)//
  {
      this.m_name=sname;
	  this.m_desc=sdesc;
	  this.m_price=sprice;
	  this.m_image=simage;
	  //caregory
	  if(sCat!="undefined")
	  	this.m_category=sCat;
	  else
	   	this.m_category=-1;
		
	  this.m_id=id;
	  
	  Product.prototype.getName = getName;
	  Product.prototype.getPrice = getPrice;
	  
	  //Product.prototype.removeByIndex=removeByIndex;
  }
  
    //sorting	
    function sortbyPriceAsc(a,b)//works
    {
	 return a.m_price - b.m_price ;
    }
  
  
  	function sortbyProductName(a,b)//works
	{
	 var nameA=a.m_name.toLowerCase(), nameB=b.m_name.toLowerCase();
	 if (nameA < nameB) //sort string ascending
	  return -1
	 if (nameA > nameB)
	  return 1
	 return 0 //default return value (no sorting)
	}
  
  
  //by using a form
  function addProduct()
  {
	 //document.reg.productCategory.value gets the selected value of the combo box
	id=productArray.length;
	
    var objProduct = new Product(
	document.frmProductReg.txtName.value,
	document.frmProductReg.txtDesc.value,
	document.frmProductReg.txtPrice.value,
	document.frmProductReg.txtImage.value,
	document.frmProductReg.productCategory.value,id);
	
	productArray[productArray.length]=objProduct;
	
	alert("Added New Product " + document.frmProductReg.txtName.value);	
	
 }
 
 
 function deleteProducts()
 {
	//alert("products " + top.productArray.length);
	if(productArray.length>0)
		productArray=[];
}
 

  function testaddProduct(sname,sdesc,sprice,simage,scat)
  {
   	id=productArray.length;
	var objProduct = new Product(sname,sdesc,sprice,simage,scat,id);	
	productArray[productArray.length]=objProduct;
 }
 
  

 //print products ub a sta
 function printProducts()
 {
	str="";	 
	str=str +"<h2>";
	str=str +"Displaying all Products";
	str=str +"</h2>";
	
	str=str +"<br>";
	str=str +"There are " + productArray.length + " products, registered.";
	str=str +"<table border=1>";
	
	//table header col names
	str=str +"<tr>";		
		str=str +printTableData("Product Name ");
		str=str +printTableData("Product Description");
		str=str +printTableData("Product Price");
		str=str +printTableData("Product Image");		
		str=str +printTableData("Remove");
	str=str +"</tr>";
	
	
	for(i=0;i<productArray.length;i++)
	{
		str=str +"<tr>";				
			str=str +printTableData(productArray[i].m_name);
			str=str +printTableData(productArray[i].m_desc);	
			str=str +printTableData(productArray[i].m_price);
			str=str +printTableData(printImg(productArray[i].m_image));
			
			
			//buy button
			str=str +("<td>");	
				str=str +'<input type="button" name="addtoCart' + i +' " onclick="addtoCart(' + i + ')" value="Add to Cart"></input>';
			str=str +("</td>");			
			
			
		str=str + "</tr>";
	}	
	str=str +"</table>";	
	
	str=str +printButton("deleteCartItems","deleteCartItems()","Empty Cart");
	str=str +printButton("checkoutCartItems","checkoutCartItems()","Checkout");
	
	document.getElementById("content").innerHTML = str;	
	
 }
 
 //improved version for displaying products in a table
 function printProductsv2()
 {
	var str="";
	
	str=str +printButton("sortProductName","sortByProductName()","Sort Products");
	str=str +printButton("sortProductPrices","sortByProductPrice()","Sort by Price");
	
	str+="<table width=600 height=263 >";//add border
	//str+="<table >";
	for(i=0;i<productArray.length;i++)
	{
		str+="<tr>";
		str+="<td height=39 colspan=2 class='productNameStyle'>" + productArray[i].m_name  +"</td>";//+ " arrayindex ,i= " + i +  " , productid=" + productArray[i].m_id
		str+="</tr>";
		
		str+="<tr>";
		sCat=ProductCats[productArray[i].m_category];
		//<a href="javascript:printLoginForm()">Login</a>
		//printJSFunctionLink("alert('test')",'testaler')
		str+="<td colspan=2 class='productCategory'>Category: "+ printJSFunctionLink("searchForProduct('category','" +sCat+"')",sCat) +"</td>";
		str+="</tr>";
		
    		
		str+="<tr>";
		str+="<td width=200 height=166><img src=" + productArray[i].m_image + " width=200 height=150 /></td>";
		str+="<td width=462 valign=top>"+ productArray[i].m_desc +"</td>";
		str+="</tr>";
		str+="<tr>";
		str+="<td class='priceStyle'>  Item Price: € " +productArray[i].m_price+ "</td>";
	
		
		//buy button
		str+="<td align=right>";	
			str+='<input type="button" name="addtoCart' + i +' " onclick="addtoCart(' + i + ')" value="Add to Cart"></input>';
			//str+=addtoCartImg(i);			
		str+="</td>";		
		str+="</tr>";
		
		
		//Reviews
		str+="<tr>";
    	str+="<td colspan='2' align=left>";		
			//reviews
			str+=printButton("addReviews" + i,"printAddReviewForm("+ productArray[i].m_id  +")","Add Review");		
			
			/*alert(i);
			var n=getReviews(productArray[i].m_id);
			alert(n);*/
			var n=getProductReviewCount(productArray[i].m_id);
			str+=printButton("viewReviews" + i,"getReviews(" + productArray[i].m_id + ")","View Product Reviews (" +n + ")");		
			str+="<br><br>";
		str+="</td>";
  		str+="</tr>";
	
		
	}	
	str=str +"</table>";	
	
	document.getElementById("content").innerHTML = str;	
 }




function printAddProductForm()
{
	str="";
	
	str+="<p class='formTitle'> Add new Product:</p><br>";
	
	str=str + "<form name=frmProductReg>";
	str=str + "<table>";
	
	str=str + printTableTextFieldRow("Product Name","txtName");
	str=str + printTableTextFieldRow("Product Desc","txtDesc");
	str=str + printTableTextFieldRow("Product Price","txtPrice");
	str=str + printTableTextFieldRow("Product Image","txtImage");
	//str=str + printTableTextFieldRow("Product Category","txtCategory");
	
	str+="<tr><td>Product Category</td><td>";
	str+="<select name=productCategory>";
	for(i=0;i<ProductCats.length;i++)
	{
		str+="<option value="+i+">" + ProductCats[i]+ "</option>";
	}
	str+="</select></td></tr>";
	
	

	
	str=str + "<tr><td>";
	str=str + printButton("Add Product","addProduct()","addProduct");	
	str=str + "</td></tr>";
	
	str=str + "</table>";
	str=str + "</form>";

	document.getElementById("content").innerHTML = str;
	
}




function printSearchForProductForm()
{
	str="";
	
	str=str + "<form name=reg>";
	str=str + "<table>";
	
	str=str + printTableTextFieldRow("Product Name","txtName");
	str=str + printTableTextFieldRow("Product Desc","txtDesc");
	str=str + printTableTextFieldRow("Product Price","txtPrice");
	str=str + printTableTextFieldRow("Product Image","txtImage");
	
	str=str + "<tr><td>";
	str=str + printButton("Search","printSearchForProductResults()","Search For Product");	
	str=str + "</td></tr>";
	
	str=str + "</table>";
	str=str + "</form>";

	document.getElementById("content").innerHTML = str;
	
}


//print the results of our search
function printSearchForProductResults()
{
	
	str="";	 
	str=str +"<h2>";
	str=str +"Search Results";
	str=str +"</h2>";	
	
	str=str +"<table border=1>";
	
	str=str +"<tr>";		
		str=str +printTableData("Product Name ");
		str=str +printTableData("Product Description");
		str=str +printTableData("Product Price");
		str=str +printTableData("Product Image");		
	str=str +"</tr>";	
	
	
	
	for(i=0;i<searchResults.length;i++)
	{
		
			productId=searchResults[i];
			//str=str +"<tr>";				
				str=str +printTableData(productArray[productId].m_name);
			//str=str +"</tr>";
			
			str=str +printTableData(printImg( productArray[productId].m_image ));			
			str=str +printTableData(productArray[productId].m_desc);	
			str=str +printTableData(productArray[productId].m_price);
									
			//buy button
			str=str +("<td>");	
				str=str +'<input type="button" name="addtoCart' + i +' " onclick="addtoCart(' + productId + ')" value="Add to Cart"></input>';
				//str+=addtoCartImg(productId);
			str=str +("</td>");					
							
			str=str + "</tr>";				

	
	}
	str=str +"</table>";	
	str=str +"<br>";
	str=str +"Found " + i + " products.";			
	document.getElementById("content").innerHTML = str;	
}



//search for a product by field and value and store teh array index in the
//search results array
function searchForProduct(sField,sValue)
{

	//get the field value
	if(sField==null)
	{
		var selectionList = document.getElementById("category");
		var sField=selectionList.options[selectionList.selectedIndex].text;
	}
	//////////////////////////////////////////////////////////////
	
	//if the value param is null then get the text box value
	if(sValue==null)
		sValue=document.getElementById("quickProductSearch").value;
	
	var iCount=0;
	searchResults=[];	
	
	for(i=0;i<productArray.length;i++)
	{					
			if(sField=="category")
			{
				//convert entered value to lower case  
				var sCat=productArray[i].m_category;
				sCat=ProductCats[sCat];
				sCat=sCat.toLowerCase();
				if(sCat.match(sValue.toLowerCase())!=null)
				{										
					//store results in search results array
					searchResults[iCount]=i;
					iCount++;
					
				}
			}
			else if(sField=="productname")
			{
				var sProductName=productArray[i].m_name.toLowerCase();
				
				if(sProductName.match(sValue.toLowerCase())!=null) //if the product name contains the string
				{										
					//store results in search results array
					searchResults[iCount]=i;
					iCount++;
				}
			}
	}
	
	//print results
	
	if(iCount>0)
		printSearchForProductResults();
}

//search for purduct by id
function getProductNameByID(id)
{
	for(i=0;i<productArray.length;i++)
	{
		if(productArray[i].m_id==id)
			return productArray[i].m_name;
	}
}

function getProductByID(id)
{
	for(i=0;i<productArray.length;i++)
	{
		if(productArray[i].m_id==id)
			return i;
	}
	return -1;
}


//adds an image or the add to cart link
//not working unused
function addtoCartImg(productID)
{
	var str="";
	str+="<img src=./imgs/add_to_cart.gif  onclick=addtoCart('productID')>";
	return str;
}


//DOM
function printProductsDOM()
{
	clearDiv();
	var str="";
	str+="<p class='formTitle'> Displaying all Products</p>";
	str+= "There are " + productArray.length + " products.";
	
	document.getElementById("content").innerHTML = str;
	
	CreateTable("content",sProductTableHeader);
	AddProductArrayToTable();
}





