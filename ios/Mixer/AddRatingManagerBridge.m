#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(AddRatingManager, NSObject)

RCT_EXTERN_METHOD(dismissPresentedViewController:(nonnull NSNumber *)reactTag)

RCT_EXTERN_METHOD(save:(nonnull NSNumber *)reactTag rating:(NSInteger *)rating forIdentifier:(NSInteger *)forIdentifier)
@end
