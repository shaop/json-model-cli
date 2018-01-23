#import <JSONModel/JSONModel.h>

@class Badge, Privacy, Extend, User, Visible;
@protocol Icons, Annotations;

@interface test : JSONModel 

@property (nonatomic, assign) BOOL favorited;
@property (nonatomic, strong) NSNumber *attitudesStatus;
@property (nonatomic, copy) NSString *createdAt;
@property (nonatomic, strong) NSNumber *id;
@property (nonatomic, assign) BOOL truncated;
@property (nonatomic, copy) NSString *inReplyToScreenName;
@property (nonatomic, copy) NSString *mblogid;
@property (nonatomic, copy) NSString *text;
@property (nonatomic, copy) NSString *idstr;
@property (nonatomic, strong) NSNumber *sourceType;
@property (nonatomic, copy) NSString *geo;
@property (nonatomic, strong) User *user;
@property (nonatomic, strong) NSNumber *commentsCount;
@property (nonatomic, copy) NSString *thumbnailPic;
@property (nonatomic, copy) NSString *source;
@property (nonatomic, strong) NSNumber *recomState;
@property (nonatomic, strong) NSNumber *sourceAllowclick;
@property (nonatomic, strong) NSNumber *bizFeature;
@property (nonatomic, copy) NSString *mblogtypename;
@property (nonatomic, strong) NSArray<Annotations> *annotations;
@property (nonatomic, copy) NSString *filterID;
@property (nonatomic, copy) NSString *bmiddlePic;
@property (nonatomic, copy) NSString *scheme;
@property (nonatomic, strong) Visible *visible;
@property (nonatomic, copy) NSString *inReplyToStatusId;
@property (nonatomic, copy) NSString *mid;
@property (nonatomic, strong) NSArray *picIds;
@property (nonatomic, strong) NSNumber *repostsCount;
@property (nonatomic, strong) NSNumber *mlevel;
@property (nonatomic, strong) NSNumber *attitudesCount;
@property (nonatomic, strong) NSArray *darwinTags;
@property (nonatomic, strong) NSNumber *userType;
@property (nonatomic, copy) NSString *inReplyToUserId;
@property (nonatomic, copy) NSString *originalPic;

@end

@interface Visible : JSONModel 

@property (nonatomic, strong) NSNumber *type;
@property (nonatomic, strong) NSNumber *listId;

@end

@interface Annotations : JSONModel 

@property (nonatomic, copy) NSString *clientMblogid;

@end

@interface User : JSONModel 

@property (nonatomic, copy) NSString *coverImagePhone;
@property (nonatomic, strong) NSNumber *id;
@property (nonatomic, strong) NSNumber *biFollowersCount;
@property (nonatomic, strong) NSNumber *urank;
@property (nonatomic, copy) NSString *profileImageUrl;
@property (nonatomic, strong) NSArray<Icons> *icons;
@property (nonatomic, strong) NSNumber *class;
@property (nonatomic, copy) NSString *verifiedContactEmail;
@property (nonatomic, copy) NSString *province;
@property (nonatomic, assign) BOOL verified;
@property (nonatomic, copy) NSString *url;
@property (nonatomic, strong) NSNumber *statusesCount;
@property (nonatomic, assign) BOOL geoEnabled;
@property (nonatomic, assign) BOOL followMe;
@property (nonatomic, copy) NSString *description;
@property (nonatomic, strong) NSNumber *type;
@property (nonatomic, strong) NSNumber *followersCount;
@property (nonatomic, copy) NSString *verifiedContactMobile;
@property (nonatomic, copy) NSString *location;
@property (nonatomic, strong) NSNumber *mbrank;
@property (nonatomic, copy) NSString *avatarLarge;
@property (nonatomic, strong) NSNumber *star;
@property (nonatomic, copy) NSString *verifiedTrade;
@property (nonatomic, copy) NSString *profileUrl;
@property (nonatomic, copy) NSString *weihao;
@property (nonatomic, strong) NSNumber *onlineStatus;
@property (nonatomic, copy) NSString *badgeTop;
@property (nonatomic, copy) NSString *verifiedContactName;
@property (nonatomic, copy) NSString *screenName;
@property (nonatomic, copy) NSString *verifiedSourceUrl;
@property (nonatomic, strong) NSNumber *pagefriendsCount;
@property (nonatomic, copy) NSString *name;
@property (nonatomic, copy) NSString *verifiedReason;
@property (nonatomic, strong) NSNumber *friendsCount;
@property (nonatomic, strong) NSNumber *mbtype;
@property (nonatomic, strong) NSNumber *blockApp;
@property (nonatomic, strong) NSNumber *hasAbilityTag;
@property (nonatomic, copy) NSString *avatarHd;
@property (nonatomic, strong) NSNumber *creditScore;
@property (nonatomic, copy) NSString *remark;
@property (nonatomic, copy) NSString *createdAt;
@property (nonatomic, strong) NSNumber *blockWord;
@property (nonatomic, strong) NSNumber *ulevel;
@property (nonatomic, assign) BOOL allowAllActMsg;
@property (nonatomic, strong) NSNumber *verifiedState;
@property (nonatomic, copy) NSString *domain;
@property (nonatomic, copy) NSString *verifiedReasonModified;
@property (nonatomic, strong) NSNumber *level;
@property (nonatomic, assign) BOOL allowAllComment;
@property (nonatomic, strong) NSNumber *verifiedLevel;
@property (nonatomic, copy) NSString *verifiedReasonUrl;
@property (nonatomic, copy) NSString *gender;
@property (nonatomic, strong) NSNumber *favouritesCount;
@property (nonatomic, copy) NSString *idstr;
@property (nonatomic, strong) NSNumber *verifiedType;
@property (nonatomic, copy) NSString *city;
@property (nonatomic, copy) NSString *verifiedSource;
@property (nonatomic, strong) Badge *badge;
@property (nonatomic, strong) NSNumber *userAbility;
@property (nonatomic, strong) Extend *extend;
@property (nonatomic, copy) NSString *lang;
@property (nonatomic, strong) NSNumber *ptype;
@property (nonatomic, assign) BOOL following;

@end

@interface Extend : JSONModel 

@property (nonatomic, strong) Privacy *privacy;
@property (nonatomic, copy) NSString *mbprivilege;

@end

@interface Privacy : JSONModel 

@property (nonatomic, strong) NSNumber *mobile;

@end

@interface Badge : JSONModel 

@property (nonatomic, strong) NSNumber *gongyi;
@property (nonatomic, strong) NSNumber *gongyiLevel;
@property (nonatomic, strong) NSNumber *enterprise;
@property (nonatomic, strong) NSNumber *zongyiji;
@property (nonatomic, strong) NSNumber *suishoupai2014;
@property (nonatomic, strong) NSNumber *travel2013;
@property (nonatomic, strong) NSNumber *anniversary;
@property (nonatomic, strong) NSNumber *taobao;
@property (nonatomic, strong) NSNumber *hongbao2014;
@property (nonatomic, strong) NSNumber *dzwbqlv2015;
@property (nonatomic, strong) NSNumber *ucDomain;
@property (nonatomic, strong) NSNumber *bindTaobao;
@property (nonatomic, strong) NSNumber *dailv;
@property (nonatomic, strong) NSNumber *pzsd2015;

@end

@interface Icons : JSONModel 

@property (nonatomic, copy) NSString *url;

@end

