//
//  ReactNativeViewManager.m
//  TrumpetFingering
//
//  Created by Ulrich Sinn on 12/13/17.
//  Copyright © 2017 Ulrich Sinn. All rights reserved.
//

#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(ReactNativeViewManager, NSObject)

RCT_EXTERN_METHOD(dismissPresentedViewController:(nonnull NSNumber *)reactTag)

RCT_EXTERN_METHOD(save:(nonnull NSNumber *)reactTag rating:(NSInteger *)rating forIdentifier:(NSInteger *)forIdentifier)
@end

