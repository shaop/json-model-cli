#import "test.h"

@implementation test

+ (NSDictionary *)modelCustomPropertyMapper {
    return @{@"attitudesStatus" : @"attitudes_status",
             @"createdAt" : @"created_at",
             @"inReplyToScreenName" : @"in_reply_to_screen_name",
             @"sourceType" : @"source_type",
             @"commentsCount" : @"comments_count",
             @"thumbnailPic" : @"thumbnail_pic",
             @"recomState" : @"recom_state",
             @"sourceAllowclick" : @"source_allowclick",
             @"bizFeature" : @"biz_feature",
             @"bmiddlePic" : @"bmiddle_pic",
             @"inReplyToStatusId" : @"in_reply_to_status_id",
             @"picIds" : @"pic_ids",
             @"repostsCount" : @"reposts_count",
             @"attitudesCount" : @"attitudes_count",
             @"darwinTags" : @"darwin_tags",
             @"inReplyToUserId" : @"in_reply_to_user_id",
             @"originalPic" : @"original_pic",
             @"undefined" : @"undefined"
      }];
}

+ (NSDictionary *)modelContainerPropertyGenericClass {
    return @{@"Annotations" : [annotations class],
             @"undefined" : [undefined class]
      }];
}

@end

@implementation HLTVisible

+ (NSDictionary *)modelCustomPropertyMapper {
    return @{@"listId" : @"list_id",
             @"undefined" : @"undefined"
      }];
}

@end

@implementation HLTAnnotations

+ (NSDictionary *)modelCustomPropertyMapper {
    return @{@"clientMblogid" : @"client_mblogid",
             @"undefined" : @"undefined"
      }];
}

@end

@implementation HLTUser

+ (NSDictionary *)modelCustomPropertyMapper {
    return @{@"coverImagePhone" : @"cover_image_phone",
             @"biFollowersCount" : @"bi_followers_count",
             @"profileImageUrl" : @"profile_image_url",
             @"verifiedContactEmail" : @"verified_contact_email",
             @"statusesCount" : @"statuses_count",
             @"geoEnabled" : @"geo_enabled",
             @"followMe" : @"follow_me",
             @"followersCount" : @"followers_count",
             @"verifiedContactMobile" : @"verified_contact_mobile",
             @"avatarLarge" : @"avatar_large",
             @"verifiedTrade" : @"verified_trade",
             @"profileUrl" : @"profile_url",
             @"onlineStatus" : @"online_status",
             @"badgeTop" : @"badge_top",
             @"verifiedContactName" : @"verified_contact_name",
             @"screenName" : @"screen_name",
             @"verifiedSourceUrl" : @"verified_source_url",
             @"pagefriendsCount" : @"pagefriends_count",
             @"verifiedReason" : @"verified_reason",
             @"friendsCount" : @"friends_count",
             @"blockApp" : @"block_app",
             @"hasAbilityTag" : @"has_ability_tag",
             @"avatarHd" : @"avatar_hd",
             @"creditScore" : @"credit_score",
             @"createdAt" : @"created_at",
             @"blockWord" : @"block_word",
             @"allowAllActMsg" : @"allow_all_act_msg",
             @"verifiedState" : @"verified_state",
             @"verifiedReasonModified" : @"verified_reason_modified",
             @"allowAllComment" : @"allow_all_comment",
             @"verifiedLevel" : @"verified_level",
             @"verifiedReasonUrl" : @"verified_reason_url",
             @"favouritesCount" : @"favourites_count",
             @"verifiedType" : @"verified_type",
             @"verifiedSource" : @"verified_source",
             @"userAbility" : @"user_ability",
             @"undefined" : @"undefined"
      }];
}

+ (NSDictionary *)modelContainerPropertyGenericClass {
    return @{@"Icons" : [icons class],
             @"undefined" : [undefined class]
      }];
}

@end

@implementation HLTExtend

@end

@implementation HLTPrivacy

@end

@implementation HLTBadge

+ (NSDictionary *)modelCustomPropertyMapper {
    return @{@"gongyiLevel" : @"gongyi_level",
             @"suishoupai2014" : @"suishoupai_2014",
             @"hongbao2014" : @"hongbao_2014",
             @"dzwbqlv2015" : @"dzwbqlv_2015",
             @"ucDomain" : @"uc_domain",
             @"bindTaobao" : @"bind_taobao",
             @"pzsd2015" : @"pzsd_2015",
             @"undefined" : @"undefined"
      }];
}

@end

@implementation HLTIcons

@end

