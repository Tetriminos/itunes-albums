<template>
  <div class="albums">
    <div class="filters">
      <p :class="{ filterFeatured: filterFeatured }" @click="toggleFilterFeatured">All</p>
      <p :class="{ filterFeatured: !filterFeatured }" @click="toggleFilterFeatured">Featured</p>
    </div>
    <div v-if="filteredAlbums.length === 0">
      <p>No albums matching the criteria.</p>
    </div>
    <div v-else>
      <Album class="album" v-for="album in filteredAlbums" v-bind:key="album.id" :album="album"/>
    </div>
  </div>
</template>

<script>
  import Album from './Album/Album.vue';

  import itunesdata from './../assets/itunesdata.json';
  import { mapAlbumData, EventBus } from './../utils';

  export default {
    name: "AlbumList",
    components: {
      Album
    },
    props: {
      numberOfAlbums: Number
    },
    data() {
      return {
        albums: [],
        filteredAlbums: [],
        filterFeatured: false,
        search: ''
      }
    },
    watch: {
      search: function (search) {
        this.filteredAlbums = this.albums
          .filter(this.matchesSearchTerm(search))
          .filter(this.isFeatured);
      },
      filterFeatured: function () {
        this.filteredAlbums = this.filteredAlbums.filter(this.isFeatured);
      }
    },
    mounted() {
      this.fetchAlbums();
      EventBus.$on('search', search => {
        this.search = search;
      });
      EventBus.$on('removedFromFavorites', id => {
        // remove the item from filtered albums shown in the view if it
        // gets removed.
        this.filteredAlbums = this.filteredAlbums.filter(album => {
          if (album.id === id && this.filterFeatured === true) {
            return false;
          }

          return true;
        });
      });
    },
    methods: {
      fetchAlbums() {
        this.albums = mapAlbumData(itunesdata);
        this.filteredAlbums = JSON.parse(JSON.stringify(this.albums))
      },
      toggleFilterFeatured() {
        this.filterFeatured = !this.filterFeatured;
      },
      matchesSearchTerm(search) {
        return function(album) {
          return album.artist.name.toLowerCase().includes(search.toLowerCase())
              || album.name.toLowerCase().includes(search.toLowerCase());
        }
      },
      isFeatured(album) {
        if (this.filterFeatured === true) {
          return localStorage.getItem(album.id) === 'true';
        } else {
          return true;
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .albums {
    max-width: $max-content-width;
  }

  .album {
    margin: 10px auto;
  }

  .filters {
    margin: 52px auto 30px auto;
    display: flex;
    flex-direction: row;

    p {
      margin-right: 48px;
      font-size: 16px;
      font-weight: normal;
      line-height: 1.25;
      letter-spacing: -0.6px;
      cursor: pointer;
    }
  }

  .filterFeatured {
    color: $turquoise-blue;
  }

  @media (max-width: 1150px) {
    .albums {
      margin: 0 30px;
    }
  }
</style>