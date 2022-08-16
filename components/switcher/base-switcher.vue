<template>
  <div class="base-switcher__container">
    <div
        class="base-switcher__button"
        :class="{'base-switcher__button--disabled': disabled, 'base-switcher__button--loading' : loading}"
        @click="onClick">
      <div class="base-switcher__circle-wrapper"
           :class="{'base-switcher__circle-wrapper--active': isActive, 'base-switcher__circle-wrapper--loading' : loading}"
      >
        <div class="base-switcher__circle" v-show="loading"></div>
      </div>
    </div>
    <div class="base-switcher__text">
      <slot/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "base-switcher",
    props: {
      isActive: {
        type: Boolean,
        required: true
      },
      disabled: {
        type: Boolean,
        default: false
      },
      loading: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      onClick() {
        if (this.disabled || this.loading) return;
        this.$emit('change', !this.isActive)
      }
    }
  }
</script>

<style scoped>
  .base-switcher__container {
    display: flex;
    align-items: center;
  }

  .base-switcher__button {
    width: 60px;
    height: 30px;
    position: relative;
    background-color: white;
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

  .base-switcher__button--loading {
    cursor: progress;
  }

  .base-switcher__button--disabled:hover,
  .base-switcher__button--disabled:active,
  .base-switcher__button--loading:hover,
  .base-switcher__button--loading:active {
    opacity: .4;
  }

  .base-switcher__circle-wrapper {
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

  .base-switcher__circle-wrapper--active {
    left: 31px;
    background-color: green;
  }

  .base-switcher__circle {
    position: relative;
  }

  .base-switcher__circle::before {
    content: '';
    width: 2px;
    height: 20px;
    background-color: #ffffff;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);

    animation: 1.5s spin infinite;
  }

  .base-switcher__circle::after {
    content: '';
    width: 20px;
    height: 2px;
    background-color: #ffffff;
    position: absolute;
    left: 0;
    top: 10px;
    transform: translateY(-50%);

    animation: 1.5s spin2 infinite;
  }

  .base-switcher__text {
    padding-left: 25px;
    color: #000000;
  }

  @keyframes spin {
    100% {
      transform: translateX(-50%) rotate(360deg);
    }
  }

  @keyframes spin2 {
    100% {
      transform: translateY(-50%) rotate(360deg);
    }
  }

</style>
