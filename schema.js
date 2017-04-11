
import AlbumType from './AlbumType';
import Albums from './Albums';

import TrackType from './TrackType';
import Tracks from './Tracks';

import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLList,
  GraphQLNonNull,
  GraphQLID
} from 'graphql';

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
           albums: {
                type: new GraphQLList(AlbumType),
                resolve: () => Albums
            },
            album: {
                type: AlbumType,
                args: {
                    id: {
                        description: "Unique ID of the album",
                        type: new GraphQLNonNull(GraphQLID)
                    }
                },
                resolve: (_, { id }) => Albums.find(item => item.id == id)
            },
          tracks: {
            type: new GraphQLList(TrackType),
            resolve: () => Tracks
          },
          track: {
            type: TrackType,
            args: {
              id: {
                description: "Unique ID of the track",
                type: new GraphQLNonNull(GraphQLID)
              }
            },
            resolve: (_, { id }) => Tracks.find(item => item.id == id)
          }
        }
    }) 
});

export default schema;

