<template>
  <ComponentContainer>
    <template #outer>
      <div>value: {{ value }}</div>
      <div>disabled:
        <label style="cursor: pointer;">
          <input type="checkbox" v-model="disabled"> {{ disabled }}
        </label>
      </div>
    </template>
    <template #default>
      <BaseSwitch
          v-model="value"
          :disabled="disabled"
      >
        Это <code>slot</code> для подписи к переключателю. И так как это <code>slot</code>, то можем добавлять другие
        компоненты или разметку, например, <a href="/">ссылки</a>.
      </BaseSwitch>
    </template>
  </ComponentContainer>
</template>

<script>
  import ComponentContainer from "../component-container.vue";
  import BaseSwitch from "./base-switch.vue";

  export default {
    name: "base-switch-container",
    components: { ComponentContainer, BaseSwitch },
    data() {
      return {
        disabled: false,
        value: false,
      }
    },
  }
</script>
