# graphux
experiments on GraphQL &amp; React/Redux

Based on this tuto from James Childs-Maidment (https://medium.com/@thisbejim)
https://medium.com/@thisbejim/getting-started-with-redux-and-graphql-8384b3b25c56#.nktvfgn2l

## Installation

```bash
# Get the latest snapshot
$ git clone --depth=1 https://github.com/slecorvaisier/graphux myapp
$ cd myapp
$ git remote rm origin

# Install NPM dependencies
$ npm install

# start app in dev mode
$ node server.js
````

App: http://localhost:3000
GraphiQL: http://localhost:3000/graphql

the input takes a graphQL request as following:
```
{
  goldberg(id: 1) {
    id, character, actor, traits
  }
}
````

Please check ```server.js``` for available data.
