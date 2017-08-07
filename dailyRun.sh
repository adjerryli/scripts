#!/bin/bash

#webdriver-manager start 2>&1 &
sleep 10
build=$1
username=$2
password=$3
runIds=`java -jar TestRailApi.jar $build <yourTestRailUsername> <TestRailPassword>`
protractor e2eConf.js --params.build=$build --params.runIds=$runIds --params.username=$username --params.password=$password
protractor getUrlConf.js --params.build=$build --params.username=$username --params.password=$password
node bot.js "Post Run links to Slack" 2>&1 &
sleep 5
killall node
