//
//  PdfModule.m
//  GraphRNSample
//
//  Created by TCC Admin on 03/07/24.
//

#import <Foundation/Foundation.h>
#import "React/RCTBridgeModule.h"
#import "UIKit/UIKit.h"

@interface RCT_EXTERN_MODULE(PdfController , UIViewController)

RCT_EXTERN_METHOD(openPDF:(NSString *)filePath)

@end
