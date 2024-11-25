import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

//db
import db from './db.js'

//types
import {typeDefs} from './schema.js'

const resolvers={
  Query:{
    games(){
      return db.games
    },
    authors(){
      return db.authors
    },
    reviews(){
      return db.reviews
    },
    review (_ , args){           //(parent ,args ,context)
      return db.reviews.find((review)=> review.id === args.id)
    },
    game (_ ,args){
      return db.games.find((game)=> game.id === args.id) 
    },
    author (_ ,args){
      return db.authors.find((author)=> author.id === args.id) 
    }}
    ,
    Game: {
      reviews(parent){   
        return db.reviews.filter((rev) => rev.games_id === parent.id)
      }
    },
    Author: {
      reviews(parent){   
        return db.reviews.filter((rev) => rev.author_id === parent.id)
    }
  },
    Review:{    //single review
      author(parent){
        return db.authors.find((auth) => auth.id === parent.author_id)
      },
      game(parent){
        return db.games.find((ga) => ga.id === parent.games_id)
    }
  },
  Mutation:{
    deletegame(_,args){
      db.games=db.games.filter((ga)=>ga.id!== args.id)
      return db.games
    },
    addgame(_,args){
      let game={
        ...args.game,
        id:Math.floor(Math.random()*10000).toString()
      }
      db.games.push(game)
      return game
    },
    updategame(_,args){
      db.games=db.games.map((ga)=>{
        if(ga.id === args.id){
          return {...ga, ...args.edits}  // ... => spread syntax
        }
        return ga

      })
      return db.games.find((ga)=>ga.id === args.id)
    }
  
  }
}
  


//server startup
const server=new ApolloServer({
// typeDefs  ==>>> definitions of types of Data ,, schema => describes the shape of the graph
// resolvers
typeDefs,resolvers

})
const url =await startStandaloneServer(server,{
  listen:{port:4000}
})
console.log('Server Ready at PORT ' , 4000 )