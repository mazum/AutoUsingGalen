this.LoginPage =  $page("Login Page", {
	username: "#username",
	password: "#password",
	loginButton: "input.button.fn_validate_submit[type='submit']"
});

var loginPage = new LoginPage(driver);
loginPage.waitForIt();

loginPage.username.typeText("petronella");
loginPage.password.typeText("MOLPassword!1");
loginPage.loginButton.click();