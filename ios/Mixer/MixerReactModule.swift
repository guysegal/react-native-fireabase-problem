//
//  MixerReactModule.swift
//  Mixer
//
//  Created by Ulrich Sinn on 12/10/17.
//  Copyright © 2017 Razeware LLC. All rights reserved.
//

import Foundation
import React

class MixerReactModule: NSObject {
    static let sharedInstance = MixerReactModule()
    var bridge: RCTBridge?
    
    func createBridgeIfNeeded() -> RCTBridge {
        if bridge == nil {
            bridge = RCTBridge.init(delegate: self, launchOptions: nil)
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

extension MixerReactModule: RCTBridgeDelegate {
    func sourceURL(for bridge: RCTBridge!) -> URL! {
        return URL(string: "http://localhost:8081/index.ios.bundle?platform=ios")
    }
}
