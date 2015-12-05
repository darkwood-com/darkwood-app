#!/bin/sh

react-native bundle --minify --bundle-output ios/main.jsbundle --entry-file index.ios.js --dev false --platform ios
