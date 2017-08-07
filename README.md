### Automation scripts for running E2E and updating TestRail

The scripts uses Protractor to run daily E2E regression, a TestRail client is used for fetching run ids for each milestone.

### Prerequisites

http://www.protractortest.org/#/

### Running the tests

sh dailyRun.sh <build_number> <user_name> <pass_word>

### Notes

To auto post to slack channel work, you need to create a slack bot user and update it on bot.js. See https://api.slack.com/bot-users for how to create a new bot user.
