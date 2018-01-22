//
//  ReactNativeViewFactory.swift
//  TrumpetFingering
//
//  Created by Ulrich Sinn on 12/13/17.
//  Copyright © 2017 Ulrich Sinn. All rights reserved.
//

import Foundation
import React

class ReactNativeViewFactory: NSObject {
    static let sharedInstance = ReactNativeViewFactory()
    
    var bridge: RCTBridge?
    
    func createBridgeIfNeeded() -> RCTBridge {
        if bridge == nil {
            bridge = RCTBridge.init(delegate: self as RCTBridgeDelegate, launchOptions: nil)
        }
        return bridge!
    }
    
    func viewForModule(_ moduleName: String, initialProperties: [String : Any]?) -> RCTRootView {
        let viewBridge = createBridgeIfNeeded()
        let rootView: RCTRootView = RCTRootView(
            bridge: viewBridge,
            moduleName: moduleName,
            initialProperties: initialProperties)
        return rootView
    }
}


extension ReactNativeViewFactory: RCTBridgeDelegate {
    func sourceURL(for bridge: RCTBridge!) -> URL! {
        return URL(string: "http://localhost:8081/index.ios.bundle?platform=ios")
    }
}
