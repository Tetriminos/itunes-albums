<template>
  <div class="albums">
    <div class="filters">
      <p class="all">All</p>
      <p class="featured">Featured</p>
    </div>
    <Album class="album" v-for="album in filteredAlbums" v-bind:key="album.id.attributes['im:id']" :data="album"/>
  </div>
</template>

<script>
  import Album from './Album/Album.vue';

  import itunesdata from './../assets/itunesdata.json';

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
        filteredAlbums: []
      }
    },
    watch: {
      search: function(search) {
          this.filteredAlbums = this.albums.filter(album => {
            return album["im:artist"].label.toLowerCase().includes(search.toLowerCase())
              || album["im:name"].label.toLowerCase().includes(search.toLowerCase());
          });
      }
    },
    mounted() {
      this.fetchAlbums();
    },
    methods: {
      fetchAlbums() {
        this.albums = itunesdata.feed.entry;
        this.filteredAlbums = JSON.parse(JSON.stringify(this.albums))
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
  }

  .filters > p {
    margin-right: 48px;
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.25;
    letter-spacing: -0.6px;
  }

  // TODO
  .all {
    color: $pinkish-gray;
  }

  .featured {
    color: $turquoise-blue;
  }
</style>