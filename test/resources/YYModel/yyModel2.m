#import "yyModel2.h"

@implementation yyModel2
+ (NSDictionary *)modelCustomPropertyMapper {
    return @{
        @"albumOffset":@"album_offset"
        ,
        @"artistOffset":@"artist_offset"
        ,
        @"dmError": @"dm_error"
        ,
        @"errorMsg": @"error_msg"
        ,
        @"totalAlbums": @"total_albums"
        ,
        @"totalArtists": @"total_artists"
        ,
        @"totalTracks": @"total_tracks"
        ,
        @"trackOffset": @"track_offset"
    };
}

+ (NSDictionary *)modelContainerPropertyGenericClass {
    return @{
        @"albums" : [Albums class]
        ,
        @"artists" : [Artists class]
        ,
        @"tracks" : [Tracks class]
    };
}

@end

@implementation Albums
+ (NSDictionary *)modelCustomPropertyMapper {
    return @{
        @"numTracks": @"num_tracks"
        ,
        @"releaseDate": @"release_date"
    };
}

+ (NSDictionary *)modelContainerPropertyGenericClass {
    return @{
        @"artists" : [ArtistsX class]
    };
}

@end

@implementation ArtistsX

@end

@implementation Artists
+ (NSDictionary *)modelCustomPropertyMapper {
    return @{
        @"numAlbums": @"num_albums"
        ,
        @"numTracks": @"num_tracks"
    };
}
@end

@implementation Tracks
+ (NSDictionary *)modelContainerPropertyGenericClass {
    return @{
        @"artists" : [ArtistsXX class]
        ,
        @"medias" : [Medias class]
    };
}
@end

@implementation Album

@end

@implementation ArtistsXX
+ (NSDictionary *)modelCustomPropertyMapper {
    return @{
        @"numAlbums": @"num_albums"
        ,
        @"numTracks": @"num_tracks"
    };
}
@end

@implementation Medias

@end