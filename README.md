# bornfight-itunes

Show top albums from iTunes

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
1st terminal: $ npm run serve
2nd terminal: $ nodemon server
```
so we have access to the Apple lookup API proxy hosted in the server.js

### Compiles and minifies for production
```
npm run build
```

# User Stories
* Show top N albums received from the [iTunes API](https://itunes.apple.com/us/rss/topalbums/limit=10/json).
* Responsive design
* Search and filter received albums
* More info about album modal
* "Featured" functionality - _optional_
* ES6 - _optional_
* Animations - _optional_
* JS Framework (e.g. Vue, React, etc.) - _optional_
* Commit history - _optional_

# Known bugs
* If there is a search term written in the search bar, and you click 'All' or 'Featured'
the albums are no longer filtered according to it

# Improvements
* Use Vuex to not pass properties around wildly (e.g. search)
* Lazy load higher resolution images
* TypeScript for that typed goodness
* Use some 3rd party API for more album info (or pay Apple $99 for a developer account)

# Notes
* The nasty proxy related hacky stuff in the AlbumModal (for the song list) and the server.js
that circumvents the Apple lookup API not handling CORS is something I would never do in a
professional setting. I would either ask the API provider to handle CORS, or if that is not
an option, I would host a proxy elsewhere (not coupled to the client for frick's sake).
I just wanted song info :c