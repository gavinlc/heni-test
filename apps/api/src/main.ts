import * as dotenv from 'dotenv'
import { createServer }  from '@graphql-yoga/node';
import fetch from 'node-fetch';
import { buildSchema } from 'graphql';

dotenv.config()

const baseURL = `https://api.harvardartmuseums.org`;
const apiKey = process.env.API_KEY;

// TODO: move this out to external file / files
// TODo: fill out scheme to fully match REST output
const schema = buildSchema(`
type Query {
  hello: String
  prints(page: Int): Prints
}

type Prints {
  info: Info
  records: [Object]
}

type Info {
  totalrecordsperquery: Int
  totalrecords: Int
  pages: Int
  page: Int
  next: String
  prev: String
}

type Object {
  id: ID!
  title: String
  images: [Image]
  url: String
  dated: String
}

type Image {
  imageid: ID!
  baseimageurl: String
  format: String
}
`);

const server = createServer({
  schema: {
    typeDefs: schema,
    resolvers: {
      Query: {
        prints: (parent, args) => {
          const { page } = args;
          return fetch(`${baseURL}/object?apikey=${apiKey}&size=10&page=${page}&classification=Prints&hasimage=1&q=verificationlevel:4`).then(res => res.json())
        }
      },
    },
  },
})


server.start()