	//array for names of user table colums
	var sUserTableHeader=new Array("Name","Address","Telephone","UserName","Password");

  function User(sname,saddress,stel,susername,spassword)
  {
      this.m_name=sname;
	  this.m_address=saddress;
	  this.m_telephone=stel;
	  
	  this.m_username=susername;
	  this.m_password=spassword;      
  }


 function registerUser()
 {

	var objUser = new User(document.reg.txtName.value,	document.reg.txtAddress.value,	document.reg.txtTelephone.value,	document.reg.txtUserName.value,	document.reg.txtPassword.value);
	userArray[top.userArray.length]=objUser;	
	alert("Added User " + document.reg.txtName.value);	
 }

 
 function testaddUser(sname,saddress,stel,susername,spassword)
 {

	var objUser = new User(sname,saddress,stel,susername,spassword);
	userArray[userArray.length]=objUser;	

 }
 
 function findUser(sUsername)
 {
	if(userArray.length>0)
	{		
		for(x=0;x<userArray.length;x++)
		{
			if(userArray[x].m_username==sUsername)//find user first	
			{	
				return x;
			}		
		}
	}
	else
	{
		alert("System has no registered Users.");
	}
	 
 }
 

function loginUser()
{
	var sUsername;
	var sPassword;	
	
	sUsername=document.reg.txtUserName.value;
	sPassword=document.reg.txtPassword.value;
	
	if(sUsername=="" || sPassword=="")
	{
		alert("Please enter a Username and Password");
		return;
	}
	
	var x=findUser(sUsername);	
	
	if(x!=null)
	{
		//check password		
		if(userArray[x].m_password==sPassword)
		{
			alert ("Loggin you in: " + userArray[x].m_name);
			//set current user
			currentUser=x;
			document.getElementById("DivCurrentUser").innerHTML="Welcome " + userArray[x].m_name;
			//load site
			printProductsv2();
		}
		else
		{	
			alert("Invalid password");
		}		
	}
	
}




 function showUsers()
 {
	document.write("<h2>");
	document.write("Displaying all Registered Users");
	document.write("</h2>");
	
	document.write("<br>");
	document.write("There are " + userArray.length + " users, registered.");
	document.write("<table border=1>");
	
	document.write("<tr>");	
	
	printTableData("Name");
	printTableData("Address");
	printTableData("Tel No");
	printTableData("UserName");	
	printTableData("Password");	
	
	document.write("</tr>");

	
	for(i=0;i<userArray.length;i++)
	{
		document.write("<tr>");		
		printTableData (userArray[i].m_name  );	
		printTableData (userArray[i].m_address );	
		printTableData (userArray[i].m_telephone );	
		printTableData (userArray[i].m_username );	
		printTableData (userArray[i].m_password );	
		document.write("</tr>");

	}
	
	document.write("</table>");
	
 }



//print out stuff
//print out login form
function printLoginForm()
{
	str="";
	
	str+="<p class='formTitle'> Enter Your Login Details</p><br>";
	
	str=str + "<form name=reg>";
	str=str + "<table>";
	
	str=str + printTableTextFieldRow("UserName","txtUserName");
	str=str + printTableTextFieldRow("Enter Password","txtPassword");
	
	str=str + "<tr><td>";
	str=str + printButton("Login","loginUser()","Login");	
	str=str + "</td></tr>";
	
	str=str + "</table>";
	str=str + "</form>";

	document.getElementById("content").innerHTML = str;

	
}


//return the user registerration form as a string
function printRegisterUserForm()
{
	str="";
	str+="<p class='formTitle'> Enter Registration Details:</p><br>";
	
	str=str + "<form name=reg>";
	str=str + "<table>";
	
	str=str + printTableTextFieldRow("Name","txtName");
	str=str + printTableTextFieldRow("Address","txtAddress");
	str=str + printTableTextFieldRow("Telephone","txtTelephone");
	str=str + printTableTextFieldRow("User Name","txtUserName");
	str=str + printTableTextFieldRow("Enter Password","txtPassword");	
	
	str=str + "<tr><td>";
	str=str + printButton("Register","registerUser()","Register");	
	str=str + "</td></tr>";
	
	str=str + "</table>";
	str=str + "</form>";

	document.getElementById("content").innerHTML = str;
	
}

//not used old way
 function printShowUsers()
 {
	
	str="";
	str=str +"<h2>Displaying all Registered Users</h2>";	
	str=str + "<br>";
	str=str + "There are " + userArray.length + " users, registered.";
	
	str=str + "<table border=1>";
	
	str=str + "<tr>";		
		str=str + printTableData("Name");
		str=str + printTableData("Address");
		str=str + printTableData("Tel No");
		str=str + printTableData("UserName");	
		str=str + printTableData("Password");
	str=str + "</tr>";

	
	for(i=0;i<userArray.length;i++)
	{
		str=str + "<tr>";		
			str=str + printTableData (userArray[i].m_name  );	
			str=str + printTableData (userArray[i].m_address );	
			str=str + printTableData (userArray[i].m_telephone );	
			str=str + printTableData (userArray[i].m_username );	
			str=str + printTableData (userArray[i].m_password );	
		str=str + "</tr>";
	}	
	
	str=str + "</table>";
	
	
	document.getElementById("content").innerHTML = str;
	
 }


//add some users
function addUsers()
{
		testaddUser(
		"joe soap",
		"21 ted Street",
		"042 343433",
		"ted",
		"ted");
		
		testaddUser("peter parker","ted Street","343433","joe","ted")
		testaddUser("mary byrne","ted Street","343433","adam","ted")
		testaddUser("roofus jones","ted Street","343433","sarah","ted")
		testaddUser("moses dolan","ted Street","343433","ted","ted")
}


//dom version
function printShowUsersDOM()
{
	clearDiv();
	var str="";
	str+="<p class='formTitle'> Displaying all Registered Users</p>";
	str+= "There are " + userArray.length + " users, registered.";
	
	document.getElementById("content").innerHTML = str;
	
	CreateTable("content",sUserTableHeader);
	AddUserArrayToTable();
}


function UserNotLoggedinMSG()
{
	alert("You are not logged into the website.");
}


