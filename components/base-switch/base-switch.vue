<template>
  <div class="base-switcher__container">
    <button
        class="base-switcher__button"
        :class="{'base-switcher__button--disabled': disabled}"
        :disabled="disabled"
        @click="onClick">
      <span
          class="base-switcher__circle"
          :class="{'base-switcher__circle--active': modelValue}"/>
    </button>
    <div class="base-switcher__text">
      <!-- @slot подпись к переключателю -->
      <slot/>
    </div>
  </div>
</template>

<script>
  /**
   * Переключатель (switch component)
   */
  export default {
    name: "base-switch",

    props: {

      /**
       * Значение переключателя.
       *
       * @model
       */
      modelValue: {
        type: Boolean,
        required: true
      },

      /**
       * Может ли пользователь взаимодействовать с переключателем.
       */
      disabled: {
        type: Boolean,
        default: false
      }

    },

    methods: {

      /**
       * Обработчик нажатия на переключатель.
       */
      onClick() {
        /**
         * @event update:modelValue
         * @property {boolean} новое значение переключателя
         */
        this.$emit('update:modelValue', !this.modelValue)
      }

    }

  }
</script>

<style scoped>
  .base-switcher__container {
    width: 100%;
    display: flex;
    align-items: center;
  }

  .base-switcher__button {
    flex-shrink: 0;
    width: 60px;
    height: 30px;
    position: relative;
    background-color: #ffffff;
    border-radius: 25px;
    border: 2px solid gray;
    transition: .4s;
    cursor: pointer;
  }

  .base-switcher__button:hover {
    opacity: .8;
  }

  .base-switcher__button:active {
    transition: 0s;
    opacity: .4;
  }

  .base-switcher__button--disabled {
    transition: 0s;
    opacity: .4;
    cursor: not-allowed;
  }

  .base-switcher__button--disabled:hover,
  .base-switcher__button--disabled:active {
    opacity: .4;
  }

  .base-switcher__circle {
    position: absolute;
    top: 50%;
    left: 5px;
    transform: translate(0, -50%);
    background-color: gray;

    width: 20px;
    height: 20px;
    border-radius: 50%;
    transition: .4s;
  }

  .base-switcher__circle--active {
    left: 31px;
    background-color: #00bc7e;
  }

  .base-switcher__text {
    padding-left: 25px;
    color: #000000;
  }

</style>
