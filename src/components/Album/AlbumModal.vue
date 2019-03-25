<template>
  <div class="modal-content">
    <p class="artist" @click="openUrlInNewTab(album.artist.url)">{{ album.artist.name }}</p>
    <p class="title" @click="openUrlInNewTab(album.iTunesUrl)">{{ album.name }}</p>
    <div class="album-info">
      <div class="album-poster">
        <img :src="album.images.huge" alt="Album cover">
        <div class="featured-badge" v-if="featured">FEATURED</div>
      </div>
      <div class="description">
        <p class="desc-title">SONG LIST:</p>
        <div v-for="song in songList" v-bind:key="song.id">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AlbumModal',
    props: {
      album: Object,
      featured: Boolean
    },
    data() {
      return {
        songList: []
      }
    },
    methods: {
      openUrlInNewTab(url) {
        if (!url) {
          return;
        }

        window.open(url);
      }
    }
  };
</script>

<style scoped lang="scss">
  .modal-content {
    margin: 30px 100px 58px 45px;
  }

  .artist {
    margin-bottom: 15px;
    font-family: WorkSans-Regular, sans-serif;
    font-size: 12px;
    font-weight: normal;
    line-height: normal;
    letter-spacing: -0.4px;
    color: $aqua;
    cursor: pointer;

    &:hover {
      color: $grayish-brown;
    }
  }

  .title {
    margin-bottom: 32px;
    font-family: WorkSans-Medium, sans-serif;
    font-size: 33px;
    font-weight: 500;
    line-height: 0.73;
    letter-spacing: -0.7px;
    color: $blackish;
    cursor: pointer;

    &:hover {
      color: $warm-gray;
    }
  }

  .album-poster {
    position: relative;
  }

  .album-info {
    display: flex;
    flex-direction: row;
    align-items: flex-start;

    img {
      margin-right: 35px;
      flex-shrink: 0;
      height: 249px;
      width: 249px;
      object-fit: contain;
      border-radius: 5px;
    }

    .featured-badge {
      position: absolute;
      top: 210px;
      left: -7px;
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
    }

    .description {
      font-family: WorkSans-Regular, sans-serif;

      .desc-title {
        margin-bottom: 10px;
        font-size: 12px;
        font-weight: normal;
        line-height: normal;
        letter-spacing: -0.4px;
        color: $grayish;
      }

      .desc-content {
        margin-bottom: 10px;
        white-space: pre-wrap;
        font-size: 16px;
        font-weight: normal;
        line-height: 1.5;
        letter-spacing: -0.6px;
        color: $grayish-brown;
      }

      .read-more {
        color: $aqua;
        cursor: pointer;

        &:hover {
          color: $grayish-brown;
        }
      }
    }
  }

  @media (max-width: 800px) {
    .album-info {
      img {
        height: 150px;
        width: 150px;
      }

      .featured-badge {
        top: 140px;
      }
    }
  }
</style>