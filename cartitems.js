// JavaScript Document

//cart functions
//************************************************************************

function ShoppingCartItem(p, q) 
{
   this.m_prod = p;
   this.m_qty = q;
}
  
 //add an item to our cart
function addtoCart(i)
{
	//check to see if user has logged in
	if(currentUser!=-1)
	{
		var lenCart = cartArray.length;		  
		var sc = new ShoppingCartItem(productArray[i], 1);
	
		cartArray[lenCart] = sc;	  
	
		//print cart on right hand side
		displayCart("mycart");	 
		alert("Added Item to your cart.");
	}
	else
	{
		UserNotLoggedinMSG();
	}
}



function displayCart(sDivName)
{
	var total=0;	
	var str = "Cart contains: " + cartArray.length + " items";
	str+="<img src=imgs/cart_icon.jpg align=right>";
	
		//get user data first		
		var suser="";		
		if(currentUser>-1)
		{
			suser+="<br>";
			suser+="<br><b>Name:</b><br>";
			suser+=userArray[currentUser].m_name;
			suser+="<br><br><b>Address:</b><br>";
			suser+=userArray[currentUser].m_address;
			suser+="<br><br><b>Telephone Number:</b><br>";
			suser+=userArray[currentUser].m_telephone;
						
			//alert(suser);
			str+=suser;
		}
	
	str+="<table border=1>";
	
		str+="<tr>";		
			str+= printTableData("Product Name");
			str+= printTableData("Price");		
			str+= printTableData("Remove");		
		str+="</tr>";
	
		if(cartArray.length>0)
		{
		   for (x = 0; x < cartArray.length; x++) 
		   {
			  
			  str+="<tr>";	
				  str += printTableData(cartArray[x].m_prod.getName());
				  str += printTableData(cartArray[x].m_prod.getPrice());
				  
				   //remove from cart button
				  str +="<td>";	
					  str +=printButton("deleteCartItem","removeCartItem(" + x + ")","Remove");
				  str +="</td>"				  
			  str+="</tr>";	
			  
			  //calc total
			  total=total + cartArray[x].m_prod.getPrice();
		   }
		}
		else
		{
			//no items in cart
		}
		str+="</table>";
		str+=  "Total Amount: € " + total;
		str+="<br><br>";
		str=str +printButton("continueShopping","continueShopping()","Continue Shopping");	
		str=str +printButton("deleteCartItems","deleteCartItems()","Empty Cart");		
		str=str +printButton("checkoutCartItems","checkoutCartItems()","Checkout");
		
		document.getElementById(sDivName).innerHTML = str;	//name of div elemement goes here
}


function checkoutCartItems()
{
	if(cartArray.length>0)
	{
		displayCart("content");
	}
	else
	{
		alert ("There are no items in your Shopping cart");
	}
}


function deleteCartItems()
{
	cartArray=[];
	alert("Your Cart is now Empty.");
	//redisplay cart
	displayCart("mycart");
}



//remove an item in the cart
function removeCartItem(n)
{
	removeByIndex(cartArray,n);
	//test 
	alert("cart total items " + cartArray.length);
	//refresh cart
	displayCart("mycart");
}

//function ro remove an item from an array
function removeByIndex(arr, index) 
{
	    arr.splice(index, 1);
}


//test version remove wehnd oen
function displayCartItems()
{
	var str = "Cart contains: " + cartArray.length + " items";
	alert(str);
	
	if(cartArray.length>0)
	{
	   for (x = 0; x < cartArray.length; x++) 
	   {
		  str += cartArray[x].m_prod.getName();
		  str += " ";
	   }
	   alert(str);
	}
	
}


function getCartTotal()
{
	var total=0;
	if(cartArray.length>0)
	{
	   for (x = 0; x < cartArray.length; x++) 
	   {
			total=total + cartArray[x].m_prod.getPrice();
	   }
	   alert("Total Amount : € " + total);
	}
	return total;
}
//************************************************************************