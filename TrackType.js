
import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID
} from 'graphql';

const TrackType = new GraphQLObjectType({
    name: "Track",
    description: "A Track",
    fields: () => ({
        id: {
            type: GraphQLID,
            description: "Unique identifier for the track"
        },
        name: {
            type: GraphQLString,
            description: "The name of the track"
        },
        duration: {
            type: GraphQLString,
            description: "The length of the track"
        }
    })
});

export default TrackType;

