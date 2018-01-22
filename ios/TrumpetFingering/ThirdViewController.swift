//
//  ThirdViewController.swift
//  EmbedComponents
//
//  Created by Ulrich Sinn on 12/12/17.
//  Copyright © 2017 Ulrich Sinn. All rights reserved.
//

import UIKit
import React

class ThirdViewController: UIViewController {
    var reactNativeView_3: RCTRootView!
    var stringForLabel_3:String = "This is the text for label 3";

    @IBOutlet weak var textLabelScreen_3: UILabel!
    override func viewDidLoad() {
        super.viewDidLoad()
        textLabelScreen_3.text = stringForLabel_3;
        // Do any additional setup after loading the view.
        
        reactNativeView_3 = ReactNativeViewFactory.sharedInstance.viewForModule("LandingScreen_2", initialProperties: ["simpleString" : stringForLabel_3])
        
        self.view.addSubview(reactNativeView_3)
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    override func viewDidLayoutSubviews() {
        super.viewDidLayoutSubviews()
        reactNativeView_3.frame = self.view.bounds
    }

    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destinationViewController.
        // Pass the selected object to the new view controller.
    }
    */

}
