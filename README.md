# bornfight-itunes

Show top albums from iTunes 

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

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
* Cannot load songs for all albums because the lookup API doesn't have CORS enabled
* If there is a search term written in the search bar, and you click 'All' or 'Featured' the albums are no longer filtered according to it

# Improvements
* Use Vuex to not pass properties around wildly (e.g. search)
* Lazy load higher resolution images
* TypeScript for that typed goodness
* Use some 3rd party API for more album info (or pay Apple $99)