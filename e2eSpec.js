// spec.js
describe('Protractor Demo App', function() {
  var appBuild = browser.params.build + "-SNAPSHOT";
  var runIds = browser.params.runIds;
  var username = browser.params.username;
  var password = browser.params.password;
  var regressionSuite  = 'mp/mp_storefront_regression';
  it('should have a title', function() {
    browser.get('https://e2e.appdirect.tools/');
    element(by.css("button[aria-label*='Open main menu']")).click();
    element(by.css("div[class*='md-button'] button[ng-click*='appController']")).click();
    browser.driver.findElement(by.id("username")).sendKeys(username);
    browser.driver.findElement(by.id("password")).sendKeys(password);
    browser.driver.findElement(by.css("button[name='signin'")).click();
    browser.driver.findElement(by.css("button[class='adb-toolbar--item']")).click();

    var helper = require('./helper.js');
    helper.triggerRun(appBuild,'mp/smoke',runIds);
    helper.triggerRun(appBuild,'api/mp_storefront',runIds);
    helper.triggerRun(appBuild,'api/mp_reseller',runIds);
    helper.triggerRun(appBuild,'mp/mp_storefront_regression',runIds);
    helper.triggerRun(appBuild,'mp/mp_reseller_regression',runIds);
    helper.triggerRun(appBuild,'mp/mp_core_regression',runIds);

  },120000);
})
