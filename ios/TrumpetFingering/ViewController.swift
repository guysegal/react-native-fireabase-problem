//
//  ViewController.swift
//  TrumpetFingering
//
//  Created by Ulrich Sinn on 12/13/17.
//  Copyright © 2017 Ulrich Sinn. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    @IBOutlet weak var numberField: UITextField!
    @IBOutlet weak var nameField: UITextField!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    @IBAction func goToScreen_2(_ sender: UIButton) {
        performSegue(withIdentifier: "showScreen_2", sender: self)
    }
    
    @IBAction func goToScreen_3(_ sender: UIButton) {
        performSegue(withIdentifier: "showScreen_3", sender:self)
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        switch segue.identifier! {
        case "showScreen_2":
            let controller = segue.destination as! SecondViewController;
            if(numberField.text != nil){
                controller.stringForLabel_2 = numberField.text!;
            }
            break;
            
        case "showScreen_3":
            let controller = segue.destination as! ThirdViewController;
            if(nameField.text != nil){
                controller.stringForLabel_3 = nameField.text!;
            }
            break;
        default: break
            //
        }
    }
    
}

