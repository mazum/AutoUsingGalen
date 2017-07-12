load("../PageObject/LoginPage.js");

var devices = {
	mobile: {
		deviceName: "mobile",
		tags: ["mobile"],
		size: "500x800"
	},
	desktop: {
		deviceName: "desktop",
		tags: ["desktop"],
		size: "1920x1080"
	}
};

beforeTest(function () {
	/*var driver = createGridDriver("http://http://localhost:4444/wd/hub", {
		browser: "chrome",
		platform: "WINDOWS"
	});*/
	var driver = createDriver();
	session.put("driver",driver);
});

afterTest(function () {
	var driver =session.get("driver");
	driver.quit();
});

forAll(devices,function() {
	test("Overview page on ${deviceName}",function (device){
		var driver = session.get("driver");
		//session.report().info("This is info");
		//session.report().warn("This is warning");
		//session.report().error("This is error");
		resize(	driver, device.size);
		driver.get("https://mol-preprod.usmnpz.com.au/");
		var loginPage = new LoginPage(driver);
		loginPage.waitForIt();

		loginPage.loginAsUser("petronella","MOLPassword!1");
		
		checkLayout(driver,"gspecs/overview.gspec",device.tags);
	});
});

forAll(devices,function() {
	test("Login page on ${deviceName}",function (device){
		var driver = session.get("driver");
		resize(	driver, device.size);
		driver.get("https://mol-preprod.usmnpz.com.au/");
		checkLayout(driver,"gspecs/home.gspec",device.tags);
	});
});