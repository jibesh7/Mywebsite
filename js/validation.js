
			function validateForm() {
				var fname = document.forms["messageForm"]["fname"].value;
				var email = document.forms["messageForm"]["mail"].value;
				var message = document.forms["messageForm"]["msg"].value;

				if (fname == "" || email == "" || message == ""){
					alert("Empty fields found. Please fill the form.");
				}
				else {
					alert("Thank you for the feedback.");
				}
			}