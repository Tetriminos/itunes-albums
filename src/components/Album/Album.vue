<template>
  <div>
    <div class="card" @click="showAlbumModal">
      <img :src="album.images.big" alt="Album cover">
      <div class="container">
        <p class="title">{{ album.name }}</p>
        <p class="artist">{{ album.artist.name.toUpperCase() }}</p>
      </div>
      <div class="featured-badge">
        <p :class="{ 'is-featured': featured, 'not-featured': !featured }" @click.stop="toggleFeatured">{{ featured ? 'FEATURED' : 'Add to featured' }}</p>
      </div>

      <Modal
          v-if="isAlbumModalVisible"
          @close="closeAlbumModal">
          <AlbumModal
            :album="album"
            :featured="featured"
          />
      </Modal>
    </div>
  </div>
</template>

<script>
  import Modal from './../Modal/Modal';
  import AlbumModal from './AlbumModal';

  import { EventBus } from './../../utils';

  export default {
    name: "Album",
    components: {
      Modal,
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
      /**
       * Checks if current album is on the featured list.
       * Uses local storage
       * albums are stored as key value pairs of id's and stringified booleans
       * @returns {boolean} - true if album is on the featured list
       */
      isFeatured: function () {
        const isFeatured = localStorage.getItem(this.album.id);
        if (isFeatured === null || isFeatured === undefined) {
          localStorage.setItem(this.album.id, 'false');
          return false;
        }

        return isFeatured === 'true';
      },
      toggleFeatured() {
        if (this.featured === true) {
          this.removeFromFeatured();
        } else {
          this.addToFeatured();
        }
      },
      addToFeatured() {
        localStorage.setItem(this.album.id, 'true');
        this.featured = true;
      },
      removeFromFeatured() {
        localStorage.removeItem(this.album.id);
        this.featured = false;
        EventBus.$emit('removedFromFavorites', this.album.id);
      }
    }
  }
</script>

<style scoped lang="scss">
  .card {
    width: 100%;
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
    flex-grow: 1;
  }

  .title {
    height: 24px;
    max-width: 700px;
    font-family: WorkSans-Medium, sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.33;
    letter-spacing: -0.7px;
    color: $blackish;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .artist {
    height: 14px;
    font-family: WorkSans-Regular, sans-serif;
    font-size: 12px;
    font-weight: normal;
    line-height: normal;
    letter-spacing: -0.4px;
    color: $blackish-47-percent;
    padding-top: 6px;
  }

  .featured-badge {
    margin: 32px 21px 33px 0;
    flex-shrink: 0;

    .is-featured {
      width: 83px;
      height: 13px;
      border-radius: 3px;
      background-color: $aqua;
      font-family: WorkSans-Bold, sans-serif;
      font-size: 10px;
      font-weight: bold;
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

  @media (max-width: 1000px) {
    .title {
      max-width: 600px;
    }
  }

  @media (max-width: 900px) {
    .title {
      max-width: 500px;
    }
  }

  @media (max-width: 800px) {
    .title {
      max-width: 400px;
    }
  }

  @media (max-width: 700px) {
    .title {
      max-width: 300px;
    }
  }
</style>