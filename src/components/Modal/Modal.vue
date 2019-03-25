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
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "Modal",
    methods: {
      close() {
        this.$emit('close');
      }
    },
    directives: {
      focus: {
        inserted: function (el) {
          el.focus()
        }
      }
    }
  }
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
    top: 150px;
    max-width: 790px;
    max-height: 800px;
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
    cursor: pointer;
  }

  @media (max-width: 800px) {
    .modal {
      top: 100px;
    }
  }
</style>