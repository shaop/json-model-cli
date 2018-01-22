import HandyJSON

class Json2: HandyJSON {
    var albumOffset: Int?
    var artistOffset: Int?
    var dmError: Int?
    var errorMsg: String?
    var recommend: Int?
    var totalAlbums: Int?
    var totalArtists: Int?
    var totalTracks: Int?
    var trackOffset: Int?
    var albums: Array<Albums>?
    var artists: Array<Artists>?
    var tracks: Array<Tracks>?
    
    required init() {}
    func mapping(mapper: HelpingMapper) {
        mapper <<<
            self.albumOffset <-- "album_offset"
        mapper <<<
            self.artistOffset <-- "artist_offset"
        mapper <<<
            self.dmError <-- "dm_error"
        mapper <<<
            self.errorMsg <-- "error_msg"
        mapper <<<
            self.totalAlbums <-- "total_albums"
        mapper <<<
            self.totalArtists <-- "total_artists"
        mapper <<<
            self.totalTracks <-- "total_tracks"
        mapper <<<
            self.trackOffset <-- "track_offset"
    }
}

class Albums: HandyJSON {
    var artists: Array<ArtistsX>?
    var available: Bool?
    var company: String?
    var cover: String?
    var id: Int?
    var name: String?
    var numTracks: Int?
    var releaseDate: String?
    var type: String?
    
    required init () {}
    
    func mapping(mapper: HelpingMapper) {
        mapper <<<
            self.numTracks <-- "num_tracks"
        mapper <<<
            self.releaseDate <-- "release_date"
    }
}

class ArtistsX: HandyJSON {
    var id: Int?
    var name: String?
    var portrait: String?
    var valid: Bool?
    
    required init () {}
}

class Artists: HandyJSON {
    var id: Int?
    var name: String?
    var numAlbums: Int?
    var numTracks: Int?
    var portrait: String?
    var valid: Bool?
    
    required init () {}
    
    func mapping(mapper: HelpingMapper) {
        mapper <<<
            self.numAlbums <-- "num_albums"
        mapper <<<
        self.numTracks <-- "num_tracks"
    }
}

class Tracks: HandyJSON {
    var album: Album?
    var artists: Array<ArtistsXX>?
    var availability: String?
    var dlyric: String?
    var id: Int?
    var medias: Array<Medias>?
    var mv: Int?
    var slyric: String?
    var title: String?
    var isdown: String?
    var isplay: String?
    
    required init () {}
}

class Album: HandyJSON {
    var cover: String?
    var id: Int?
    var name: String?
    
    required init () {}
}

class ArtistsXX: HandyJSON {
    var id: Int?
    var name: String?
    var numAlbums: Int?
    var numTracks: Int?
    var portrait: String?
    var valid: Bool?
    
    required init () {}
    
    func mapping(mapper: HelpingMapper) {
        mapper <<<
            self.numAlbums <-- "num_albums"
        mapper <<<
            self.numTracks <-- "num_tracks"
    }
    }

class Medias: HandyJSON {
    var bitrate: Int?
    var p2purl: String?
    
    required init () {}
}