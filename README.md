

# HeniTest

## Brief:

Using the api available at https://github.com/harvardartmuseums/api-docs please create a basic
api and front end app which does the following:
Delivers an API that is callable from a React built client and returns the following
unauthenticated information:
1. A feed of all public items classified as “Prints”, paged in pages of 10, ordered by rank,
descending, that have images and have been verified to the ‘Best’ standard.
2. Provide a basic react driven front end for the feed that displays the image.
3. Provide information on the detail of print you feel may be relevant (title etc).
4. Commit your code for the server and the client to GitHub and provide us with the url to the
repository.
5. Add any tests you feel are required, where necessary.

### Notes:
Design is not important here, we are more interested in coding style and practices.
You may use Express, Bootstrap, Redux, Apollo Client, Create-React-App or other 3rd party
libraries / npm modules etc
Please show the use of GraphQL.

This is your api key: xxx-xxxx-xxxx-xxxx

## Up and running

### Setup:
  - run `npm i`
  - create a `.env` file from the `.env.sample` and add api key
  - start api with `npm run start:api`
  - start web with `npm run start:web`

## Still to Do / Improvements
### API
- Find out why some Objects don't have an image, even though though the REST call has `hasimage=1`
- Fill out more of the schema to allow more date to be requested from client
- Add Unit Tests
- Move GQL schema out into it own file / files
- Move REST query string into something more manageable

### Web
- Add theme for styling
- Add a 'missing image' placeholder to handle missing images
- Add a carousel for objects with multiple images
- Add Loading state / animation
- Add Tests with mocking for data, etc