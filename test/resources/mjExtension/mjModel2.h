#import "MJExtension.h"

@interface mjModel2 : NSObject

@property (nonatomic, assign) int albumOffset;
@property (nonatomic, assign) int artistOffset;
@property (nonatomic, assign) int dmError;
@property (nonatomic, copy) NSString *errorMsg;
@property (nonatomic, assign) int recommend;
@property (nonatomic, assign) int totalAlbums;
@property (nonatomic, assign) int totalArtists;
@property (nonatomic, assign) int totalTracks;
@property (nonatomic, assign) int trackOffset;
@property (nonatomic, strong) NSArray<Albums *> *albums;
@property (nonatomic, strong) NSArray<Artists *> *artists;
@property (nonatomic, strong) NSArray<Tracks *> *tracks;

@end

@interface Albums : NSObject

@property (nonatomic, strong) NSArray<ArtistsX *> *artists;
@property (nonatomic, assign) BOOL available;
@property (nonatomic, copy) NSString *company;
@property (nonatomic, copy) NSString *cover;
@property (nonatomic, assign) int id;
@property (nonatomic, copy) NSString *name;
@property (nonatomic, assign) int numTracks;
@property (nonatomic, copy) NSString *releaseDate;
@property (nonatomic, copy) NSString *type;

@end

@interface ArtistsX: NSObject

@property (nonatomic, assign) int id;
@property (nonatomic, copy) NSString *name;
@property (nonatomic, copy) NSString *portrait;
@property (nonatomic, assign) BOOL valid;

@end

@interface Artists: NSObject

@property (nonatomic, assign) int id;
@property (nonatomic, copy) NSString *name;
@property (nonatomic, assign) int numAlbums;
@property (nonatomic, assign) int numTracks;
@property (nonatomic, copy) NSString *portrait;
@property (nonatomic, assign) BOOL valid;

@end

@interface Tracks: NSObject

@property (nonatomic, strong) Album *album;
@property (nonatomic, strong) NSArray<ArtistsXX *> *artists;
@property (nonatomic, copy) NSString *availability;
@property (nonatomic, copy) NSString *dlyric;
@property (nonatomic, assign) int id;
@property (nonatomic, strong) NSArray<Medias *> *medias;
@property (nonatomic, assign) int mv;
@property (nonatomic, copy) NSString *slyric;
@property (nonatomic, copy) NSString *title;
@property (nonatomic, copy) NSString *isdown;
@property (nonatomic, copy) NSString *isplay;

@end

@interface Album: NSObject

@property (nonatomic, copy) NSString *cover;
@property (nonatomic, assign) int id;
@property (nonatomic, copy) NSString *name;

@end

@interface ArtistsXX: NSObject

@property (nonatomic, assign) int id;
@property (nonatomic, copy) NSString *name;
@property (nonatomic, assign) int numAlbums;
@property (nonatomic, assign) int numTracks;
@property (nonatomic, copy) NSString *portrait;
@property (nonatomic, assign) BOOL valid;

@end

@interface Medias: NSObject

@property (nonatomic, assign) int bitrate;
@property (nonatomic, copy) NSString *p2purl;

@end
