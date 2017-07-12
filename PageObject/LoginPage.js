this.LoginPage =  $page("Login Page", {
	usernameTextbox: "#username",
	passwordTextbox: "#password",
	loginButton: "input.button.fn_validate_submit[type='submit']",
	
	loginAsUser: loggedFunction("Login as ${_1}", function(username, password) {
		this.usernameTextbox.typeText(username);
		this.passwordTextbox.typeText(password);
		this.loginButton.click();
	})
});