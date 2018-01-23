#import "jsonModel2.h"

@implementation jsonModel2
+ (JSONKeyMapper *)keyMapper{
    return [[JSONKeyMapper alloc] initWithModelToJSONDictionary:
  @{
    @"albumOffset":@"album_offset",
    @"artistOffset":@"artist_offset",
    @"dmError": @"dm_error",
    @"errorMsg": @"error_msg",
    @"totalAlbums": @"total_albums",
    @"totalArtists": @"total_artists",
    @"totalTracks": @"total_tracks",
    @"trackOffset": @"track_offset"
    }];
}
@end

@implementation Albums
+ (JSONKeyMapper *)keyMapper{
    return [[JSONKeyMapper alloc] initWithModelToJSONDictionary:
  @{
    @"numTracks": @"num_tracks",
    @"releaseDate": @"release_date"
    }];
}
@end

@implementation ArtistsX

@end

@implementation Artists
+ (JSONKeyMapper *)keyMapper{
    return [[JSONKeyMapper alloc] initWithModelToJSONDictionary:
  @{
    @"numAlbums": @"num_albums",
    @"numTracks": @"num_tracks"
    }];
}
@end

@implementation Tracks

@end

@implementation Album

@end

@implementation ArtistsXX
+ (JSONKeyMapper *)keyMapper{
    return [[JSONKeyMapper alloc] initWithModelToJSONDictionary:
  @{
    @"numAlbums": @"num_albums",
    @"numTracks": @"num_tracks"
    }];
}
@end

@implementation Medias

@end