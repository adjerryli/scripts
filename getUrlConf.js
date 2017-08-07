// conf.js
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['getUrlSpec.js'],

onPrepare: function () {
    //global.report = "******* MP E2E Daily Regression Run Results **********";
    global.report = "";
},

}

