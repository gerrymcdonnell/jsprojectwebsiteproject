 var sReviewTableHeader=new Array("User Name","Review","Product Name");

function Review(sname,sreview,id)
  {
      this.m_username=sname;
	  this.m_review=sreview;
	  this.m_productid=id;   
  }


 function testaddReview(sname,sreview,id)
 {
	var objReview = new Review(sname,sreview,id);
	productReviewArray[productReviewArray.length]=objReview;	
 }
 
 
 //username,review,productid
 function testcreateReviews()
 {
	testaddReview("peter jones","this product is awesome",0);
	testaddReview("joe jones","this product is awesome",0);
	testaddReview("sue jones","this product is awesome",1);
	testaddReview("mary jones","this product is awesome",1);
 }
 
 
 //see if a product has a reviews
function getReviews(productid)
{

	clearDiv();
	var str="";
	str+="<p class='formTitle'> Displaying Reviews</p>";
	
	document.getElementById("content").innerHTML = str;	
	CreateTable("content",sReviewTableHeader);	
	
	for(i=0;i<productReviewArray.length;i++)
	{
		if(productReviewArray[i].m_productid==productid)
		{
			createReviewRow(i,productReviewArray);  
		}		
	}
	//print back button	
	document.getElementById("content").innerHTML+=printButton("back","printProductsv2()","<<Back");
	
}

 //see if a product has a reviews
function getProductReviewCount(productid)
{
	var x=0;
	for(z=0;z<productReviewArray.length;z++)
	{
		if(productReviewArray[z].m_productid==productid)
		{
			x++;
		}		
	}
	return x;
}


function printAddReviewForm(id)
{
	var str="";
	
	if(currentUser!=-1)
    {
		str+="<p class='formTitle'> Enter Your Review:</p><br>";
		
		str+=  "<form name=frmReview>";
		str+=  "<table>";
		
		str+=  printTableTextFieldRow("Product Name","txtProductName");	
		str+=  printTableTextFieldRow("User Name","txtUserName");
		str+=  printTableTextFieldRow("Review","txtReview");
		
		str+=  "<tr><td>";
		str+=printHiddenTableTextFieldRow("hiddenid",id);
		str+=  "</td></tr>";
		
		str+=  "<tr><td>";
		str+=  printButton("Add Review","addReview()","Submit Review");	
		str+=  "</td></tr>";
		
		str+=  "</table>";
		str+=  "</form>";
	
		document.getElementById("content").innerHTML = str;
		
		//document.FormName.FieldName.value = jsVariable;
		
		document.getElementById("txtProductName").value=getProductNameByID(id);
		document.getElementById("txtUserName").value=userArray[currentUser].m_name;
		
		document.getElementById("txtProductName").disabled=true;
		document.getElementById("txtUserName").disabled=true;
		
		//print back button
		document.getElementById("content").innerHTML+="<br>"+printButton("back","printProductsv2()","<<Back");
	}
else
{
	UserNotLoggedinMSG()
}
	
	
}


function addReview()
 {
	
	if(currentUser!=-1)
	{
		testaddReview(
		document.frmReview.txtUserName.value,
		document.frmReview.txtReview.value,
		document.frmReview.hiddenid.value);
		
		//alert(document.getElementById("hiddenid").value);
		//alert(document.frmReview.hiddenid.value);
		alert("Added Review For " + document.frmReview.txtProductName.value);
	}
	else
	{
		UserNotLoggedinMSG()
	}
 }
 
