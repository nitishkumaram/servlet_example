function validate()
{
	var name=document.RegisterForm.name;
	var email=document.RegisterForm.email;
	var mobile=document.RegisterForm.mob;
	var mgender=document.RegisterForm.msex;
	var fgender=document.RegisterForm.fsex;
	var country=document.RegisterForm.country.elements;
	
	if(name_validate(name,30))
	{
		if(email_validate(email))
		{
			if(mobile_validate(mobile))
			{

				if(gender_validate(mgender,fgender))
				{
					if(country_validate(country))
					{
						
						return true;
					}
					else
						return false;
				}
				else
					return false;
			}
			else
				return false;
		}
		else
			return false;
	}
	else
		return false;
}

function name_validate(name,num)
{
	if(name.value.length>0)
	{
		if(name.value.length<=num)
			return true;
		else
		{
			alert("Name can't be more than 30");
			return false;
		}
	}
	else
	{
		alert("Name can't be Empty");
		return false;
	}
}
function email_validate(email)
{
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(email.value.match(mailformat))
		return true;
	else
	{
		alert("You have entered an invalid email address!");
		return false;
	}
}
function mobile_validate(mobile)
{
	if(mobile.value.length>0)
	{
		if(mobile.value.length==10)
			return true;
		else if(mobile.value.length>=10)
		{
			alert(" Mobile can't be more than 10 digits ");
			return false;
		}
		else
		{
			alert(" Mobile can't be less than 10 digits ");
			return false;
		}

	}else
	{
		alert(" Mobile can't be Empty ");
		return false;
	}
}

function gender_validate(mgender,fgender)
{
	x=0;

	if(mgender.checked) 
	{
	x++;
	}
	if(fgender.checked)
	{
	x++; 
	}

	if (x==2)
	{
	alert('Both Male/Female are checked');
	mgender.checked=false;
	fgeder.checked=false;
	mgender.focus();
	return false;
	}

	if(x==0)
	{
	alert('Select Male/Female');
	mgender.focus();
	return false;
	}
	else
	{
	return true;
	}
}

function country_validate(country)
{
	if(country.value=="default")
		{
		alert(" Select the country Name");
		return false;
		}
	else
		{
		return ture;
		}
}