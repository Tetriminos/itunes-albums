<template>
  <!--we can also close the modal by pressing the escape key, we just need focus on the div-->
  <transition name="fade">
    <div class="modal-backdrop" @click.stop="close" v-focus tabindex="0" @keyup.esc="close">
      <!--dirty hack to make clicking outside the modal close it,
          but not inside the modal (except when the close button is clicked)-->
      <div class="modal" @click.stop="">
        <button
            type="button"
            class="btn-close"
            @click.stop="close"
        ></button>
        <div class="modal-content">
          <p class="artist" @click="openUrlInNewTab(album.artist.url)">{{ album.artist.name }}</p>
          <p class="title" @click="openUrlInNewTab(album.iTunesUrl)">{{ album.name }}</p>
          <div class="album-info">
            <div class="album-poster">
              <img :src="album.images.huge" alt="Album cover">
              <div class="featured-badge" v-if="featured">FEATURED</div>
            </div>
            <div class="description">
              <p class="desc-title">ALBUM DESCRIPTION:</p>
              <div v-if="!showFullSummary">
                <p class="desc-content">{{ albumDescription | readMore(400) }}</p>
                <a class="read-more" v-if="albumDescription.length > 400" @click="toggleSummary">Show more</a>
              </div>
              <div v-else>
                <p class="desc-content">{{ albumDescription }}</p>
                <a class="read-more" v-if="albumDescription.length > 400" @click="toggleSummary">Show less</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
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
        albumDescription: `With its sultry, throbbing bassline, genre-defying melodic turns and surprising guests, “Stylo” arguably represents Gorillaz' entire sonic approach in microcosm.

  But while this hypnotic blast of future-soul—propelled by guest vocals from Mos Def and Bobby Womack—is an undoubted high point, it’s by no means the only rich pleasure on this epic, dizzyingly collaborative third album. `,
        showFullSummary: false
      }
    },
    methods: {
      close() {
        this.$emit('close');
      },
      toggleSummary() {
        this.showFullSummary = !this.showFullSummary;
      },
      openUrlInNewTab(url) {
        if (!url) {
          return;
        }

        window.open(url);
      }
    },
    filters: {
      readMore(message, numberOfCharacters) {
        if (message.length > numberOfCharacters) {
          return message.slice(0, numberOfCharacters - 100) + '...';
        }

        return message;
      }
    },
    directives: {
      focus: {
        inserted: function (el) {
          el.focus()
        }
      }
    }
  };
</script>

<style scoped lang="scss">
  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s ease
  }

  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: $blackish-80-percent;
  }

  .modal {
    margin: 0 auto;
    position: relative;
    overflow: auto;
    top: 200px;
    max-width: 790px;
    max-height: 600px;
    background-color: white;
    border-radius: 4px;
    box-shadow: 0 1px 20px 0 $grayish-brown-60-percent;
  }

  .btn-close {
    position: absolute;
    top: 25px;
    right: 25px;
    width: 14px;
    height: 14px;
    background: url('../../assets/exit-icon.svg');
    border: 0;
    padding: 0;
  }

  .modal-content {
    margin: 30px 100px 58px 45px;
  }

  .artist {
    margin-bottom: 15px;
    font-family: WorkSans-Regular, sans-serif;
    font-size: 12px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
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
    font-style: normal;
    font-stretch: normal;
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
      font-style: normal;
      font-stretch: normal;
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
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: -0.4px;
        color: $grayish;
      }

      .desc-content {
        margin-bottom: 10px;
        white-space: pre-wrap;
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
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
</style>