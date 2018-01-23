#import "mjModel2.h"

@implementation mjModel2
+ (NSDictionary *)mj_replacedKeyFromPropertyName {
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

+ (NSDictionary *)mj_objectClassInArray {
    return @{
        @"albums" : @"Albums"
        ,
        @"artists" : @"Artists"
        ,
        @"tracks" : @"Tracks"
    };
}

@end

@implementation Albums
+ (NSDictionary *)mj_replacedKeyFromPropertyName {
    return @{
        @"numTracks": @"num_tracks"
        ,
        @"releaseDate": @"release_date"
    };
}

+ (NSDictionary *)mj_objectClassInArray {
    return @{
        @"artists" : @"ArtistsX"
    };
}

@end

@implementation ArtistsX

@end

@implementation Artists
+ (NSDictionary *)mj_replacedKeyFromPropertyName {
    return @{
        @"numAlbums": @"num_albums"
        ,
        @"numTracks": @"num_tracks"
    };
}
@end

@implementation Tracks
+ (NSDictionary *)mj_objectClassInArray {
    return @{
        @"artists" : @"ArtistsXX"
        ,
        @"medias" : @"Medias"
    };
}
@end

@implementation Album

@end

@implementation ArtistsXX
+ (NSDictionary *)mj_replacedKeyFromPropertyName {
    return @{
        @"numAlbums": @"num_albums"
        ,
        @"numTracks": @"num_tracks"
    };
}
@end

@implementation Medias

@end