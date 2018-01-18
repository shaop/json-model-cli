#import "MJExtension.h"

@interface test : NSObject 

@property (nonatomic, assign) BOOL favorited;
@property (nonatomic, assign) int attitudesStatus;
@property (nonatomic, strong) NSString *createdAt;
@property (nonatomic, assign) int id;
@property (nonatomic, assign) BOOL truncated;
@property (nonatomic, strong) NSString *inReplyToScreenName;
@property (nonatomic, strong) NSString *mblogid;
@property (nonatomic, strong) NSString *text;
@property (nonatomic, strong) NSString *idstr;
@property (nonatomic, assign) int sourceType;
@property (nonatomic, strong) NSString *geo;
@property (nonatomic, strong) User *user;
@property (nonatomic, assign) int commentsCount;
@property (nonatomic, strong) NSString *thumbnailPic;
@property (nonatomic, strong) NSString *source;
@property (nonatomic, assign) int recomState;
@property (nonatomic, assign) int sourceAllowclick;
@property (nonatomic, assign) int bizFeature;
@property (nonatomic, strong) NSString *mblogtypename;
@property (nonatomic, strong) NSArray *annotations;
@property (nonatomic, strong) NSString *filterID;
@property (nonatomic, strong) NSString *bmiddlePic;
@property (nonatomic, strong) NSString *scheme;
@property (nonatomic, strong) Visible *visible;
@property (nonatomic, strong) NSString *inReplyToStatusId;
@property (nonatomic, strong) NSString *mid;
@property (nonatomic, strong) NSArray *picIds;
@property (nonatomic, assign) int repostsCount;
@property (nonatomic, assign) int mlevel;
@property (nonatomic, assign) int attitudesCount;
@property (nonatomic, strong) NSArray *darwinTags;
@property (nonatomic, assign) int userType;
@property (nonatomic, strong) NSString *inReplyToUserId;
@property (nonatomic, strong) NSString *originalPic;

@end

@interface Visible : NSObject 

@property (nonatomic, assign) int type;
@property (nonatomic, assign) int listId;

@end

@interface Annotations : NSObject 

@property (nonatomic, strong) NSString *clientMblogid;

@end

@interface User : NSObject 

@property (nonatomic, strong) NSString *coverImagePhone;
@property (nonatomic, assign) int id;
@property (nonatomic, assign) int biFollowersCount;
@property (nonatomic, assign) int urank;
@property (nonatomic, strong) NSString *profileImageUrl;
@property (nonatomic, strong) NSArray *icons;
@property (nonatomic, assign) int class;
@property (nonatomic, strong) NSString *verifiedContactEmail;
@property (nonatomic, strong) NSString *province;
@property (nonatomic, assign) BOOL verified;
@property (nonatomic, strong) NSString *url;
@property (nonatomic, assign) int statusesCount;
@property (nonatomic, assign) BOOL geoEnabled;
@property (nonatomic, assign) BOOL followMe;
@property (nonatomic, strong) NSString *description;
@property (nonatomic, assign) int type;
@property (nonatomic, assign) int followersCount;
@property (nonatomic, strong) NSString *verifiedContactMobile;
@property (nonatomic, strong) NSString *location;
@property (nonatomic, assign) int mbrank;
@property (nonatomic, strong) NSString *avatarLarge;
@property (nonatomic, assign) int star;
@property (nonatomic, strong) NSString *verifiedTrade;
@property (nonatomic, strong) NSString *profileUrl;
@property (nonatomic, strong) NSString *weihao;
@property (nonatomic, assign) int onlineStatus;
@property (nonatomic, strong) NSString *badgeTop;
@property (nonatomic, strong) NSString *verifiedContactName;
@property (nonatomic, strong) NSString *screenName;
@property (nonatomic, strong) NSString *verifiedSourceUrl;
@property (nonatomic, assign) int pagefriendsCount;
@property (nonatomic, strong) NSString *name;
@property (nonatomic, strong) NSString *verifiedReason;
@property (nonatomic, assign) int friendsCount;
@property (nonatomic, assign) int mbtype;
@property (nonatomic, assign) int blockApp;
@property (nonatomic, assign) int hasAbilityTag;
@property (nonatomic, strong) NSString *avatarHd;
@property (nonatomic, assign) int creditScore;
@property (nonatomic, strong) NSString *remark;
@property (nonatomic, strong) NSString *createdAt;
@property (nonatomic, assign) int blockWord;
@property (nonatomic, assign) int ulevel;
@property (nonatomic, assign) BOOL allowAllActMsg;
@property (nonatomic, assign) int verifiedState;
@property (nonatomic, strong) NSString *domain;
@property (nonatomic, strong) NSString *verifiedReasonModified;
@property (nonatomic, assign) int level;
@property (nonatomic, assign) BOOL allowAllComment;
@property (nonatomic, assign) int verifiedLevel;
@property (nonatomic, strong) NSString *verifiedReasonUrl;
@property (nonatomic, strong) NSString *gender;
@property (nonatomic, assign) int favouritesCount;
@property (nonatomic, strong) NSString *idstr;
@property (nonatomic, assign) int verifiedType;
@property (nonatomic, strong) NSString *city;
@property (nonatomic, strong) NSString *verifiedSource;
@property (nonatomic, strong) Badge *badge;
@property (nonatomic, assign) int userAbility;
@property (nonatomic, strong) Extend *extend;
@property (nonatomic, strong) NSString *lang;
@property (nonatomic, assign) int ptype;
@property (nonatomic, assign) BOOL following;

@end

@interface Extend : NSObject 

@property (nonatomic, strong) Privacy *privacy;
@property (nonatomic, strong) NSString *mbprivilege;

@end

@interface Privacy : NSObject 

@property (nonatomic, assign) int mobile;

@end

@interface Badge : NSObject 

@property (nonatomic, assign) int gongyi;
@property (nonatomic, assign) int gongyiLevel;
@property (nonatomic, assign) int enterprise;
@property (nonatomic, assign) int zongyiji;
@property (nonatomic, assign) int suishoupai2014;
@property (nonatomic, assign) int travel2013;
@property (nonatomic, assign) int anniversary;
@property (nonatomic, assign) int taobao;
@property (nonatomic, assign) int hongbao2014;
@property (nonatomic, assign) int dzwbqlv2015;
@property (nonatomic, assign) int ucDomain;
@property (nonatomic, assign) int bindTaobao;
@property (nonatomic, assign) int dailv;
@property (nonatomic, assign) int pzsd2015;

@end

@interface Icons : NSObject 

@property (nonatomic, strong) NSString *url;

@end

