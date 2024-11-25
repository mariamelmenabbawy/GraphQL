import { gql } from 'graphql-tag';

export const typeDefs = gql`
  #graphql
  # int, float, boolean, string, ID => scalar types

  type Game {
    id: ID!
    title: String!
    platform: [String!]!  # array of strings, not nullable
    # ! => platform can't be null (required)
    reviews:[Review!]
  }

  type Review {
    id: ID!
    rating: Int!
    content: String!
    game:Game!
    author:Author!
  }

  type Author {
    id: ID!
    name: String!
    verified: Boolean!
    reviews:[Review!]
  }

  type Query {
    reviews: [Review]
    review(id:ID!): Review
    games: [Game]
    game(id:ID!):Game
    authors: [Author]
    author(id:ID!):Author
  }

  type Mutation{
    deletegame(id:ID!):[Game]  #returns array of game object
    addgame(game:addgameinput!):Game              #returns single game object
    updategame(id:ID!,edits:editgameinput!):Game 
  }
  input addgameinput{
    title:String!,
    platform:[String!]!
  }
  input editgameinput{
    title:String!,
    platform:[String!]!
  }

`
