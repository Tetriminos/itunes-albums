<template>
  <div id="app">
    <Header :search.sync="search"></Header>
    <AlbumList class="album-list" :number-of-albums="100" :search.sync="search"></AlbumList>
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

  #app {
    font-family: WorkSans-Regular, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: $muted-white;
  }

  .album-list {
    margin: 0 auto;
  }
</style>
