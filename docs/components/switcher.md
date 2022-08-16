<script setup>
import BaseSwitcherContainer from "../../components/switcher/base-switcher-container.vue";
</script>

# Переключатель или switcher component

## Пример использования

<BaseSwitcherContainer/>

```vue

<template>
  <div>
    <h1>Настройки</h1>
    <form>
      <!-- some other inputs ... -->
      <BaseSwitcher
          :is-active="settings.launchOnSystemStart.value"
          :disabled="!settings.launchOnSystemStart.editable"
          @change="onChangeLaunchOnSystemStart"
      >
        Автоматически запускать приложение при старте системы
      </BaseSwitcher>
    </form>
  </div>
</template>
<script>
  import BaseSwitcher from "./base-switcher";

  export default {
    components: { BaseSwitcher },

    data() {
      return {
        settings: {

          // some settings ...

          launchOnSystemStart: {
            value: true, // значение
            editable: true // разрешено ли редактирование
          }
        }
      }
    },

    methods: {
      onChangeLaunchOnSystemStart(v) {
        this.settings.launchOnSystemStart.value = v;
      }
    }

  }
</script>
```

## Внутреннее состояние

Компонент не имеет внутреннего состояния (не хранит данные).

## Интерфейс

Компонент принимает 2 пропса:

```vue

<script>
  export default {

    // ...

    props: {

      /**
       * Находится ли переключатель в "активном" состоянии.
       */
      isActive: {
        type: Boolean,
        required: true
      },

      /**
       * Задизэйблен ли контрол.
       */
      disabled: {
        type: Boolean,
        default: false
      }
    }

    // ...

  }
</script>
```

И эмитит одно событие как реакцию на нажатие. В качестве данных используем значение, противоположное значению
пропса `isActive`.

```vue

<script>
  export default {

    // ...

    methods: {
      onClick() {
        if (this.disabled) return; // если свичер задизейблен, то ничего не делаем
        this.$emit('change', !this.isActive);
      }
    }

    // ...

  }
</script>
```

Подпись к переключателю передается через дефолтный `slot`.

```vue

<template>
  <BaseSwitcher>
    <!-- подпись к переключателю-->
  </BaseSwitcher>
</template>

<script>
  import BaseSwitcher from "./base-switcher";

  export default {
    components: { BaseSwitcher }
  }
</script>
```

## Нюансы UX

Зачастую переключение свичера не подразумевает дополнительных действий, например дополнительных сохранений. То есть сам
факт переключения свичера должен
вызывать действие, например, отправку запроса.

Если это не так, то возможно лучше подойдет single checkbox component.

## Результат

```vue

<template>
  <div class="base-switcher__container">
    <div class="base-switcher__button" @click="isActive = !isActive">
      <div class="base-switcher__circle" :class="isActive ? 'base-switcher__circle--active' : ''"></div>
    </div>
    <div class="base-switcher__text">
      <slot/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "base-switcher",
    data() {
      return {
        isActive: false,
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
  }

  .base-switcher__button:hover {
    cursor: pointer;
    opacity: .8;
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
    background-color: green;
  }

  .base-switcher__text {
    padding-left: 25px;
    color: #000000;
  }
</style>

```
