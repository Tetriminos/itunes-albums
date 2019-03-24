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
  import {mapAlbumData} from './../utils/mapAlbumData';

  export default {
    name: "AlbumList",
    components: {
      Album
    },
    props: {
      numberOfAlbums: Number,
      search: String
    },
    data() {
      return {
        albums: [],
        filteredAlbums: [],
        filterFeatured: false
      }
    },
    watch: {
      search: function (search) {
        this.filteredAlbums = this.albums.filter(album => {
          return album.artist.name.toLowerCase().includes(search.toLowerCase())
            || album.name.toLowerCase().includes(search.toLowerCase());
        });
      },
      filterFeatured: function (filter) {
        if (filter === true) {
          this.filteredAlbums = this.filteredAlbums.filter(album => {
            return localStorage.getItem(album.id) === 'true';
          });
        } else if (filter === false) {
          this.filteredAlbums = JSON.parse(JSON.stringify(this.albums));
        }
      }
    },
    mounted() {
      this.fetchAlbums();
    },
    methods: {
      fetchAlbums() {
        this.albums = mapAlbumData(itunesdata);
        this.filteredAlbums = JSON.parse(JSON.stringify(this.albums))
      },
      toggleFilterFeatured() {
        this.filterFeatured = !this.filterFeatured;
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
      font-style: normal;
      font-stretch: normal;
      line-height: 1.25;
      letter-spacing: -0.6px;
      cursor: pointer;
    }
  }

  .filterFeatured {
    color: $turquoise-blue;
  }
</style>