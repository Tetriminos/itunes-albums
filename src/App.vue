<template>
  <div id="app">
    <Header></Header>
    <AlbumList class="album-list"></AlbumList>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import AlbumList from './components/AlbumList.vue';

export default {
  name: 'app',
  components: {
    Header: Header,
    AlbumList: AlbumList
  },
  data() {
    return {
      search: ''
    }
  }
}
</script>

<style lang="scss">
  * {
    margin: 0;
  }

  body, html {
    height: 100%;
  }

  #app {
    font-family: WorkSans-Regular, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: $muted-white;
    min-height: 100%;
  }

  .album-list {
    margin: 0 auto;
  }
</style>
