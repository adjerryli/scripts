// spec.js
module.exports = {
  triggerRun: function (appBuild,suite,runIds) {    
    element(by.css("button[aria-label*='Trigger E2E run']")).click();
    //try to switch to the pop up window
    browser.driver.switchTo().activeElement();
    element(by.css("input[name='autocompleteField']")).click();
    //element(by.model('$mdAutocompleteCtrl.scope.searchText')).sendKeys(appBuild);
    element(by.css("input[type='search'][aria-label*='AppDirect version']")).sendKeys(appBuild);
    element(by.css("input[type='search'][aria-label*='AppDirect version']")).click();
   browser.debugger();
    //element(by.xpath("//span[contains(text(),'" + appBuild +"')]")).click();
    element(by.css("span[class*='highlight']")).click();
    element(by.css("input[name='suite'")).clear();
    element(by.model('trigger.run.suite')).sendKeys(suite);
    //element(by.css("div[class*='md-container md-ink-ripple']")).click();
    //goto TestRail tab
    element(by.css("md-next-button")).click();
    element(by.xpath("//span[contains(text(),'TestRail')]")).click();
    element(by.css("input[name='testRailRunId'")).sendKeys(runIds);
    //goto Advance tab
    element(by.xpath("//span[contains(text(),'Advanced')]")).click();
    //element(by.css("input[aria-label='Database version']")).click();
    //element(by.css("input[aria-label='Database version']")).sendKeys("288.0-SNAPSHOT");
    //element(by.css("input[aria-label='Database version']")).click();
    element(by.model("trigger.run.threadCount")).clear();
    element(by.model("trigger.run.threadCount")).sendKeys('10');
    element(by.css("button[ng-click*='trigger.trigger']")).click(); 
    }
}
