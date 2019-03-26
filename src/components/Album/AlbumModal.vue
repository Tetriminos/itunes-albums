<template>
  <div class="modal-content">
    <p class="artist" @click="openUrlInNewTab(album.artist.url)">{{ album.artist.name }}</p>
    <p class="title" @click="openUrlInNewTab(album.iTunesUrl)">{{ album.name }}</p>
    <div class="album-info">
      <div class="album-poster">
        <img :src="album.images.huge" alt="Album cover">
        <div class="featured-badge" v-if="featured">FEATURED</div>
      </div>
      <div class="song-list">
        <p class="song-list-title">SONG LIST:</p>
        <div v-for="song in songList" v-bind:key="song.id">
          <div class="song">
            <p class="song-name" @click="openUrlInNewTab(song.url)">{{ song.name }}</p>
            <p class="song-time">{{ song.time }}</p>
            <!--<button class="song-play" @click="playSong(song.previewUrl)">></button>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapSongData } from './../../utils';

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
      },
      async fetchSongs() {
        // we use our own CORS handling proxy over the Apple lookup API
        let currentURL = window.location.href;
        // if we're developing, we want the app to use the proxy hosted at port 3000
        if (currentURL.includes(':8080')) {
          currentURL = 'http://localhost:3000/';
        }
        const songResponse = await fetch(`${currentURL}proxy/songs/${this.album.id}`);
        const songData = await songResponse.json();
        this.songList = mapSongData(songData);
      }
    },
    mounted() {
      this.fetchSongs();
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

    .song-list {
      font-family: WorkSans-Regular, sans-serif;

      .song-list-title {
        margin-bottom: 10px;
        font-size: 12px;
        font-weight: normal;
        line-height: normal;
        letter-spacing: -0.4px;
        color: $grayish;
      }

      .song {
        margin: 4px auto;
        display: flex;
        flex-direction: row;
        width: 400px;
        color: $grayish-brown;

        .song-name {
          flex-grow: 1;
          max-width: 360px;
          text-wrap: none;
          overflow: hidden;
          text-overflow: ellipsis;
          cursor: pointer;

          &:hover {
            color: $turquoise-blue;
          }
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

  @media (max-width: 690px) {
    .album-info {
      .song-list {
        .song {
          width: 350px;
        }
        .song-name {
          max-width: 220px;
          text-wrap: none;
          overflow: hidden;
          text-overflow: ellipsis;
          cursor: pointer;
        }
      }
    }
  }
  @media (max-width: 600px) {
    .album-info {
      .song-list {
        .song {
          max-width: 250px;
        }
        .song-name {
          max-width: 220px;
          text-wrap: none;
          overflow: hidden;
          text-overflow: ellipsis;
          cursor: pointer;
        }
      }
    }
  }

  @media (max-width: 530px) {
    .modal-content {
      width: 80%;
      margin-left: 20px;
      margin-right: 20px;
    }

    .album-info {
      flex-direction: column;
      align-items: center;
      /*width: 80%;*/
      img {
        height: 249px;
        width: 249px;
        margin-right: 0;
        margin-bottom: 7px;
      }
      .featured-badge {
        top: 210px;
      }
    }
  }
</style>