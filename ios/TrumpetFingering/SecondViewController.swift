//
//  SecondViewController.swift
//  EmbedComponents
//
//  Created by Ulrich Sinn on 12/12/17.
//  Copyright © 2017 Ulrich Sinn. All rights reserved.
//

import UIKit
import React

class SecondViewController: UIViewController {
    var reactNativeView_2: RCTRootView!

    var stringForLabel_2:String = "This is the text for label 2";
    @IBOutlet weak var textLabelScreen_2: UILabel!
    override func viewDidLoad() {
        super.viewDidLoad()
        textLabelScreen_2.text = stringForLabel_2;

        // Do any additional setup after loading the view.
        
        reactNativeView_2 = ReactNativeViewFactory.sharedInstance.viewForModule("LandingScreen_1", initialProperties: ["midiNumber" : stringForLabel_2])

        self.view.addSubview(reactNativeView_2)
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    override func viewDidLayoutSubviews() {
        super.viewDidLayoutSubviews()
        reactNativeView_2.frame = self.view.bounds
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
