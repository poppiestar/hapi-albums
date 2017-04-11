
import TrackType from './TrackType';
import Tracks from './Tracks';

import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList
} from 'graphql';

const AlbumType = new GraphQLObjectType({
    name: 'Album',
    description: 'An Album',
    fields: () => ({
        id: {
            type: GraphQLID,
            description: "Unique identifier for the album"
        },
        name: {
            type: GraphQLString,
            description: "The name of the album"
        },
        date: {
            type: GraphQLString,
            description: "The release year of the album"
        },
        tracks: {
            type: new GraphQLList(TrackType),
            description: "The tracks on the album",
            resolve: ({ tracks }) => tracks.map(trackId => Tracks.find(track => track.id === trackId))
        }
    })
});

export default AlbumType;

