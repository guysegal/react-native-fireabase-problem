//
//  ReactNativeViewManager.swift
//  TrumpetFingering
//
//  Created by Ulrich Sinn on 12/13/17.
//  Copyright © 2017 Ulrich Sinn. All rights reserved.
//
import Foundation
import React

@objc(ReactNativeViewManager)
class ReactNativeViewManager: RCTEventEmitter {
    
    override func supportedEvents() -> [String]! {
        return ["AddRatingManagerEvent"]
    }
    
    @objc func dismissPresentedViewController(_ reactTag: NSNumber) {
        DispatchQueue.main.async {
            if let view = self.bridge.uiManager.view(forReactTag: reactTag) {
                let presentedViewController: UIViewController! = view.reactViewController()
                presentedViewController.dismiss(animated: true, completion: nil)
            }
        }
    }
    
    /*
    @objc func save(_ reactTag: NSNumber, rating: Int, forIdentifier identifier: Int) -> Void {
        // Save rating
        UserDefaults.standard.set(rating, forKey: "currentRating-\(identifier)")
        dismissPresentedViewController(reactTag)
        
        self.sendEvent(
            withName: "ReactNativeViewManagerEvent",
            body: ["name": "saveRating", "message": rating, "extra": identifier])
    }
 */
}
