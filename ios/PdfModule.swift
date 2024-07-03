//
//  PdfModule.swift
//  GraphRNSample
//
//  Created by TCC Admin on 03/07/24.
//

import Foundation
import UIKit

@objc(PdfController)
class PdfController: UIViewController, UIDocumentInteractionControllerDelegate {
  var uiInteractionController: UIDocumentInteractionController?
  
  @objc func openPDF(_ filePath: String) {
    DispatchQueue.main.async {
      let url = URL(fileURLWithPath: filePath)
      self.uiInteractionController = UIDocumentInteractionController(url: url)
      self.uiInteractionController?.delegate = self
      self.uiInteractionController?.presentOptionsMenu(from: self.view.frame, in: self.view, animated: true)
    }
  }
}
