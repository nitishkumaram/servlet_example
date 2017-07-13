<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<script type="text/javascript"></script>
<script src="js/formValidation.js"></script>
<title>Form</title>
<style type="text/css">
label {
	width: 90px;
	float: left;
}

fieldset {
	width: 500px;
	background: lightblue;
	float: right;
	
}

legend {
	color: black;
	font-size: xx-large;
}


strong {
	color: red
}

</style>

</head>
<body>
<jsp:include page="header.html"></jsp:include>
<fieldset>
	<legend>Registration From</legend>
	<form onsubmit="return validate();" action="register" method="post" name="RegisterForm">
		
		<p><label>Name :<strong>*</strong></label><input type="text" name="name"></p>
		 
		<p><label>Email Id:<strong>*</strong></label><input	type="text" name="email"></p>
		
		<p><label>Mobile No.:<strong>*</strong></label><input type="text" name="mob"></p>
		
		<p><label>Gender :<strong>*</strong></label><input type="radio"	name="gender" value="male" id="msex">male &nbsp; &nbsp;
				<input type="radio"	name="gender" value="female" id="fsex">female</p>
				
		<p><label>Country: <strong>*</strong></label><select name="country">
						<option value="default">&lt; Select-Country &gt;</option>
						<option value="india">India</option>
						<option value="usa">USA</option>
						<option value="uk">UK</option>
				</select></p>
				
		<p><label>Hobbies: </label><input type="checkbox" name="hobbies" value="cricket">Cricket&nbsp; &nbsp;
					 <input type="checkbox" name="hobbies" value="football">Football&nbsp; &nbsp;
					 <input type="checkbox" name="hobbies" value="other">Other&nbsp; &nbsp;
					 </p>
		<p><label>Comments: </label><textarea rows="3" cols="40" name="comments"></textarea></p>
		
		<p align="center"><input type="submit" value="Register" name="Submit"></p>
		<p align="right"><strong>*</strong> Marked Filed are Required to be field</p>
	</form>
</fieldset>
<img alt="" src="images/User.png" width="200px" height="300px">	
</body>
</html>