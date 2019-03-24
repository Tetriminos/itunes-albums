<template>
  <div>
    <div class="card" @click="showAlbumModal">
      <img :src="album.images.big" alt="Album cover">
      <div class="container">
        <p class="title">{{ album.name }}</p>
        <p class="artist">{{ album.artist.name.toUpperCase() }}</p>
      </div>
      <div class="filler"></div>
      <div class="featured-badge">
        <p v-if="featured" class="is-featured" @click.stop="removeFromFeatured">FEATURED</p>
        <p v-if="!featured" class="not-featured" @click.stop="addToFeatured">Add to featured</p>
      </div>

      <AlbumModal
          v-if="isAlbumModalVisible"
          @close="closeAlbumModal"
          :album="album"
          :featured="featured"
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
      album: Object
    },
    data() {
      return {
        featured: this.isFeatured(),
        isAlbumModalVisible: false
      }
    },
    methods: {
      showAlbumModal() {
        this.isAlbumModalVisible = true;
      },
      closeAlbumModal() {
        this.isAlbumModalVisible = false;
      },
      isFeatured: function () {
        const isFeatured = localStorage.getItem(this.album.id);
        if (isFeatured === null || isFeatured === undefined) {
          localStorage.setItem(this.album.id, 'false');
          return false;
        }

        return isFeatured === 'true';
      },
      addToFeatured() {
        localStorage.setItem(this.album.id, 'true');
        this.featured = true;
      },
      removeFromFeatured() {
        localStorage.removeItem(this.album.id);
        this.featured = false;
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
    cursor: pointer;
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
    margin: 32px 21px 33px 0;
    /*padding: 7px 0;*/

    .is-featured {
      width: 83px;
      height: 13px;
      border-radius: 3px;
      background-color: $aqua;
      font-family: WorkSans-Bold, sans-serif;
      font-size: 10px;
      font-weight: bold;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      color: white;
      text-align: center;
      padding: 7px 0;
      cursor: pointer;

      &:hover {
        background-color: $grayish-brown;

        &:after {
          content: ' X';
        }
      }
    }

    .not-featured {
      font-family: WorkSans-Regular, sans-serif;
      font-size: 10px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      text-decoration: underline;
      letter-spacing: normal;
      color: $aqua;
      padding: 7px;
      cursor: pointer;

      &:hover{
        color: $grayish-brown;
      }
    }
  }
</style>