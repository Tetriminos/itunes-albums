<template>
  <!--we can also close the modal by pressing the escape key, we just need focus on the div-->
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
        <p class="artist">{{ data['im:artist'].label }}</p>
        <!--<p class="title">{{ data['im:name'].label }}</p>-->
        <p class="title">Plastic Beach (Deluxe Version)</p>
        <div class="album-info">
          <img :src="data['im:image'][2].label" alt="Album cover">
          <div class="description">
            <p class="desc-title">ALBUM DESCRIPTION:</p>
            <div v-if="!showFullSummary">
              <p class="desc-content">{{ albumDescription | readMore(300) }}</p>
              <a v-if="albumDescription.length > 300" @click="toggleSummary">Read more</a>
            </div>
            <div v-else>
              <p class="desc-content">{{ albumDescription }}</p>
              <a v-if="albumDescription.length > 300" @click="toggleSummary">Show less</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AlbumModal',
    props: {
      data: Object
    },
    data() {
      return {
        albumDescription: `With its sultry, throbbing bassline, genre-defying melodic turns and surprising guests, “Stylo” arguably represents Gorillaz' entire sonic approach in microcosm.

              With its sultry, throbbing bassline, genre-defying melodic turns and surprising guests, “Stylo” arguably represents Gorillaz' entire sonic approach in microcosm.
              With its sultry, throbbing bassline, genre-defying melodic turns and surprising guests, “Stylo” arguably represents Gorillaz' entire sonic approach in microcosm.

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
      }
    },
    filters: {
      readMore(message, numberOfCharacters) {
        if (message.length > numberOfCharacters) {
          return message.slice(0, 300) + '...';
        }

        return message;
      }
    },
    directives: {
      focus: {
        // directive definition
        inserted: function (el) {
          el.focus()
        }
      }
    }
  };
</script>

<style scoped lang="scss">
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
    width: 790px;
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
        white-space: pre-wrap;
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.5;
        letter-spacing: -0.6px;
        color: $grayish-brown;
      }
    }
  }
</style>