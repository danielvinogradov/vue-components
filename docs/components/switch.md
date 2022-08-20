<script setup>
import BaseSwitchContainer from "../../components/base-switch/base-switch-container.vue";
</script>

# Переключатель или switch component

## Пример использования / UI

<BaseSwitchContainer/>

## Пример использования / Code

Допустим, что есть страница с настройками, и один из переключателей отвечает за переключение темной темы. Как примерно
это могло бы выглядеть:

```vue

<template>
  <div>
    <h1>Настройки</h1>
    <form>
      <!-- some other inputs ... -->

      <!-- start -->
      <BaseSwitch
          v-model="settings.darkTheme.on"
          :disabled="settings.darkTheme.editable"
      >
        Темная тема
      </BaseSwitch>
      <!-- end -->

    </form>
  </div>
</template>
<script>
  import BaseSwitch from "./base-switch";

  export default {
    components: { BaseSwitch },

    data() {
      return {
        settings: {

          // some settings ...

          darkTheme: {
            on: false,
            editable: true
          }
        }
      }
    },

  }
</script>
```

## Внутреннее состояние

Компонент не имеет внутреннего состояния (не хранит данные).

## Интерфейс

Для работы со значением переключателя удобно использовать `v-model`. Для этого добавляем `props` `modelValue`
и эмитим событие `update:modelValue`.

Также необходимо добавить `props` `disabled` для возможности запрета взаимодействия с переключателем.

Таким образом, компонент принимает 2 пропса:

```vue

<script>
  export default {

    // ...

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

    // ..

  }
</script>

```

И эмитит одно событие как реакцию на нажатие, если кнопка не `disabled`. В качестве данных используем значение,
противоположное значению пропса `modelValue`.

```vue

<script>
  export default {

    // ...

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

    },

    // ...

  }
</script>
```

Подпись к переключателю передается через дефолтный `slot`.

```vue

<template>
  <BaseSwitch>
    <!-- подпись к переключателю-->
  </BaseSwitch>
</template>

<script>
  import BaseSwitch from "./base-switch";

  export default {
    components: { BaseSwitch }
  }
</script>
```

## Нюансы UX

Зачастую переключение свича не подразумевает дополнительных действий, например нажатий на кнопку "сохранить". То есть
сам
факт переключения свича должен вызывать действие, например, переключение темы с темной на светлую или наоборот.

Если действие асинхронное, например, требует отправку запроса на сервер, то рекомендуется добавить визуальное состояние
загрузки. Передавать данные о новом состоянии можно через `props` `loading`.

Если нажатие на переключатель не изменяет состояние без дополнительных действий, то возможно лучше подойдет
single checkbox component.

## Результат

```vue

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
```
