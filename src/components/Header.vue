<template>
  <header>
    <div class="header-content">
      <div class="title">
        <h1 @click="reloadPage">Album list</h1>
        <p>Top 100</p>
      </div>
      <input class="search" type="text" placeholder="Search" v-model="search" @input="emitSearch">
    </div>
  </header>
</template>

<script>
  import { EventBus } from './../utils';

  export default {
    name: "Header",
    data() {
      return {
        search: ''
      }
    },
    methods: {
      reloadPage() {
        window.location.reload()
      },
      emitSearch() {
        EventBus.$emit('search', this.search);
      }
    }
  }
</script>

<style scoped lang="scss">
  header {
    height: $header-height;
    box-shadow: 0 1px 4px 0 $shadow;
    background-color: white;
  }

  .header-content {
    max-width: $max-content-width;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  .search {
    width: 370px;
    height: 16px;
    border: 0;
    border-radius: 4px;
    box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.1);
    margin: 40px 0 20px 0;
    padding: 11px 20px 13px 30px;
    color: $warm-gray;
    background: url('../assets/search.svg') no-repeat right;
    background-origin: content-box;
  }

  .title {
    padding-top: 35px;
    text-align: left;
    display: flex;
    flex-direction: column;

    h1 {
      font-family: WorkSans-Medium, sans-serif;
      font-size: 24px;
      font-weight: 500;
      line-height: normal;
      letter-spacing: -0.9px;
      color: $blackish;
      cursor: pointer;
    }

    p {
      font-family: WorkSans-Regular, sans-serif;
      font-size: 11px;
      font-weight: normal;
      line-height: normal;
      letter-spacing: -0.4px;
      color: $warm-gray;
    }
  }

  @media (max-width: 1150px) {
    .header-content {
      margin: 0 30px;
    }
  }

  @media (max-width: 640px) {
    .header-content {
      margin: 0 10px;
    }
    .search {
      width: 220px;
    }
  }

  @media (max-width: 600px) {
    .title {
      padding-top: 5px;
    }

    .search {
      width: 70%;
      margin-top: 30px;
    }
  }
</style>