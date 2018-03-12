//see: https://github.com/facebook/react-native/issues/13198
//delete this file after the issue is resolved
"use strict";
let platform = require('os').platform();
var exec = require('child_process').exec;

if (platform === 'win32') {
    //do nothing
} else {
    exec("sed -i '' 's/#import <RCTAnimation\\/RCTValueAnimatedNode.h>/#import \"RCTValueAnimatedNode.h\"/' ./node_modules/react-native/Libraries/NativeAnimation/RCTNativeAnimatedNodesManager.h");
    exec("sed -i '' 's#<fishhook/fishhook.h>#\"fishhook.h\"#g' ./node_modules/react-native/Libraries/WebSocket/RCTReconnectingWebSocket.m");
}