<template>
  <ComponentContainer>
    <template #outer>
      <div>disabled:
        <label style="cursor: pointer;">
          <input type="checkbox" v-model="disabled"> {{ disabled }}
        </label>
      </div>
      <div>loading:
        <label style="cursor: pointer;">
          <input type="checkbox" v-model="loading"> {{ loading }}
        </label>
      </div>
      <div>isActive: {{ isActive }}</div>
    </template>
    <template #default>
      <BaseSwitcher
          :is-active="isActive"
          :disabled="disabled"
          :loading="loading"
          @change="onChange"
      >
        Разрешаю собирать статистику об использовании приложения
      </BaseSwitcher>
    </template>
  </ComponentContainer>
</template>

<script>
  import ComponentContainer from "../component-container.vue";
  import BaseSwitcher from "./base-switcher.vue";

  export default {
    name: "base-switcher-container",
    components: { ComponentContainer, BaseSwitcher },
    data() {
      return {
        disabled: false,
        isActive: false,
        loading: false,
      }
    },
    methods: {
      onChange(v) {
        this.isActive = v;
        this.loading = true;

        setTimeout(() => {
          this.loading = false;
        }, 1000);
      }
    }
  }
</script>

<style scoped>

</style>
