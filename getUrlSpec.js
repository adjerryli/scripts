// spec.js
describe('Protractor Demo App', function() {
  var appBuild = browser.params.build + "-SNAPSHOT";
  var regressionSuite  = browser.params.suite;
  var prNumber  = browser.params.pr;
  var username = browser.params.username;
  var password = browser.params.password;
  var cache = require('node-shared-cache');
  var obj = new cache.Cache("jerrycache2", 557056);


  it('should have a title', function() {
    browser.get('https://e2e.appdirect.tools/');
    element(by.css("button[aria-label*='Open main menu']")).click();
    element(by.css("div[class*='md-button'] button[ng-click*='appController']")).click();
    browser.driver.findElement(by.id("username")).sendKeys(username);
    browser.driver.findElement(by.id("password")).sendKeys(password);
    browser.driver.findElement(by.css("button[name='signin'")).click();
    browser.driver.findElement(by.css("button[class='adb-toolbar--item']")).click();
    console.log(browser.getCurrentUrl());

    element.all(by.css("button[aria-label*='" + appBuild + "'][aria-label*='mp/smoke']")).first().click();
    browser.getCurrentUrl().then( function( url ) {
    report = report.concat ("******* MP E2E Daily Regression Run Results - Build " + browser.params.build + " *******");
	  report = report.concat("\nmp/smoke\n");
	  report = report.concat(url);
        console.log('mp/smoke')
	//console.log(url);
	//console.log(report);
	});
    browser.navigate().back();

    element.all(by.css("button[aria-label*='" + appBuild + "'][aria-label*='api/mp_storefront']")).first().click();
    browser.getCurrentUrl().then( function( url ) {
        report = report.concat("\napi/mp_storefront\n");
        report = report.concat(url);
        console.log('mp/smoke')
        //console.log(url);
        //console.log(report);
        });
    browser.navigate().back();

    element.all(by.css("button[aria-label*='" + appBuild + "'][aria-label*='api/mp_reseller']")).first().click();
    browser.getCurrentUrl().then( function( url ) {
        report = report.concat("\napi/mp_reseller\n");
        report = report.concat(url);
        console.log('mp/smoke')
        //console.log(url);
        //console.log(report);
        });
    browser.navigate().back();

    element.all(by.css("button[aria-label*='" + appBuild + "'][aria-label*='mp/mp_storefront_regression']")).first().click();
    browser.getCurrentUrl().then( function( url ) {
	report = report.concat("\nmp/mp_storefront_regression\n");
	report = report.concat(url);
        console.log('mp/mp_storefront_regression');
	//console.log(url);
	//console.log(report);
	});
    browser.navigate().back();

    element.all(by.css("button[aria-label*='" + appBuild + "'][aria-label*='mp/mp_core_regression']")).first().click();
    browser.getCurrentUrl().then( function( url ) {
	report = report.concat("\nmp/mp_core_regression\n");
	report = report.concat(url);
        console.log('mp/mp_core_regression');
	//console.log(url);
	//console.log(report);
	});
    browser.navigate().back();

    element.all(by.css("button[aria-label*='" + appBuild + "'][aria-label*='mp/mp_reseller_regression']")).first().click();
    browser.getCurrentUrl().then( function( url ) {
	report = report.concat("\nmp/mp_reseller_regression\n");
	report = report.concat(url);
        console.log('mp/mp_reseller_regression');
	//console.log(url);
        obj.report = report;
	console.log(report);
	});
    //console.log(report);

  },120000);
})
