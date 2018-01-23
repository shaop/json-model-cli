#import <JSONModel/JSONModel.h>

@protocol
Albums,
Artists,
ArtistsX,
Medias,
ArtistsXX
;

@class Album;

@interface jsonModel2 : JSONModel

@property (nonatomic, strong) NSNumber *albumOffset;
@property (nonatomic, strong) NSNumber *artistOffset;
@property (nonatomic, strong) NSNumber *dmError;
@property (nonatomic, copy) NSString *errorMsg;
@property (nonatomic, strong) NSNumber *recommend;
@property (nonatomic, strong) NSNumber *totalAlbums;
@property (nonatomic, strong) NSNumber *totalArtists;
@property (nonatomic, strong) NSNumber *totalTracks;
@property (nonatomic, strong) NSNumber *trackOffset;
@property (nonatomic, strong) NSArray<Albums> *albums;
@property (nonatomic, strong) NSArray<Artists> *artists;
@property (nonatomic, strong) NSArray<Tracks> *tracks;

@end

@interface Albums : JSONModel

@property (nonatomic, strong) NSArray<ArtistsX> *artists;
@property (nonatomic, assign) BOOL available;
@property (nonatomic, copy) NSString *company;
@property (nonatomic, copy) NSString *cover;
@property (nonatomic, strong) NSNumber *id;
@property (nonatomic, copy) NSString *name;
@property (nonatomic, strong) NSNumber *numTracks;
@property (nonatomic, copy) NSString *releaseDate;
@property (nonatomic, copy) NSString *type;

@end

@interface ArtistsX: JSONModel

@property (nonatomic, strong) NSNumber *id;
@property (nonatomic, copy) NSString *name;
@property (nonatomic, copy) NSString *portrait;
@property (nonatomic, assign) BOOL valid;

@end

@interface Artists: JSONModel

@property (nonatomic, strong) NSNumber *id;
@property (nonatomic, copy) NSString *name;
@property (nonatomic, strong) NSNumber *numAlbums;
@property (nonatomic, strong) NSNumber *numTracks;
@property (nonatomic, copy) NSString *portrait;
@property (nonatomic, assign) BOOL valid;

@end

@interface Tracks: JSONModel

@property (nonatomic, strong) Album *album;
@property (nonatomic, strong) NSArray<ArtistsXX> *artists;
@property (nonatomic, copy) NSString *availability;
@property (nonatomic, copy) NSString *dlyric;
@property (nonatomic, strong) NSNumber *id;
@property (nonatomic, strong) NSArray<Medias> *medias;
@property (nonatomic, strong) NSNumber *mv;
@property (nonatomic, copy) NSString *slyric;
@property (nonatomic, copy) NSString *title;
@property (nonatomic, copy) NSString *isdown;
@property (nonatomic, copy) NSString *isplay;

@end

@interface Album: JSONModel

@property (nonatomic, copy) NSString *cover;
@property (nonatomic, strong) NSNumber *id;
@property (nonatomic, copy) NSString *name;

@end

@interface ArtistsXX: JSONModel

@property (nonatomic, strong) NSNumber *id;
@property (nonatomic, copy) NSString *name;
@property (nonatomic, strong) NSNumber *numAlbums;
@property (nonatomic, strong) NSNumber *numTracks;
@property (nonatomic, copy) NSString *portrait;
@property (nonatomic, assign) BOOL valid;

@end

@interface Medias: JSONModel

@property (nonatomic, strong) NSNumber *bitrate;
@property (nonatomic, copy) NSString *p2purl;

@end
