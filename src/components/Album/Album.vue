<template>
  <div>
    <div class="card" @click="showAlbumModal">
      <img :src="data['im:image'][2].label" alt="Album cover">
      <div class="container">
        <p class="title">{{ data['im:name'].label }}</p>
        <p class="artist">{{ data['im:artist'].label.toUpperCase() }}</p>
      </div>
      <div class="filler"></div>
      <div class="featured-badge">
        <p v-if="featured">FEATURED</p>
        <p v-if="!featured">Add to featured</p>
      </div>

      <AlbumModal
          v-if="isAlbumModalVisible"
          @close="closeAlbumModal"
          :data="data"
      />
    </div>
  </div>
</template>

<script>
  import AlbumModal from './AlbumModal';

  export default {
    name: "Album",
    components: {
      AlbumModal
    },
    props: {
      data: Object
    },
    data() {
      return {
        featured: true,
        isAlbumModalVisible: false
      }
    },
    methods: {
      showAlbumModal() {
        this.isAlbumModalVisible = true;
      },
      closeAlbumModal() {
        this.isAlbumModalVisible = false;
      }
    }
  }
</script>

<style scoped lang="scss">
  .card {
    max-width: 1080px;
    height: 90px;
    box-shadow: 0 1px 3px 0 $shadow;
    background-color: #ffffff;
    display: flex;
    align-items: left;
  }

  /* On mouse-over, add a deeper shadow */
  .card:hover {
    box-shadow: 0 3px 9px 0 $shadow;
  }

  img {
    height: 54px;
    width: 54px;
    border-radius: 5px;
    margin: 18px 20px;
  }

  /* Add some padding inside the card container */
  .container {
    padding: 22px 0 24px 4px;
    text-align: left;
  }

  .title {
    height: 24px;
    font-family: WorkSans-Medium, sans-serif;
    font-size: 18px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.33;
    letter-spacing: -0.7px;
    color: $blackish;
  }

  .artist {
    height: 14px;
    font-family: WorkSans-Regular, sans-serif;
    font-size: 12px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: -0.4px;
    color: $blackish-47-percent;
    padding-top: 6px;
  }

  .filler {
    flex-grow: 1
  }

  .featured-badge {
    width: 83px;
    height: 25px;
    border-radius: 3px;
    background-color: #13d6ea;
    margin: 32px 21px 33px 0;
  }

  .featured-badge > p {
    font-size: 10px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #ffffff;
    text-align: center;
    padding: 7px 0;
  }
</style>