/* eslint-disable */
<template>
  <div class="checkbox-input">
    Text
    <input type="checkbox" @input="funcChildren" />
    <label class="body-3">
      {{ label }}
    </label>
    <div>{{ model }}</div>
    <div>{{ message }}</div>
    <textarea
      v-model="message"
      placeholder="введите несколько строчек"
    ></textarea>
    <hr />
    <textarea
      v-model="modelFromParent"
      placeholder="введите несколько строчек"
    ></textarea>
    <button @click="buttonClick">TEXT</button>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  name: "CheckBoxInput",
  props: {
    value: {},
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    dark: {
      type: Boolean,
      default: false,
    },
    model: {
      type: String,
      required: false,
    },
    modelValue: {
      type: Object,
      required: false,
    },
  },
  emits: ["change-checkbox", "update:model-value"],
  setup(props, { emit }) {
    const message = ref("v-model Самого компонента.Добавляем через ref");
    const funcChildren = (e) => {
      emit("change-checkbox", e);
    };
    const buttonClick = () => {
      emit("update:model-value", "texteweewe");
    };

    const modelFromParent = computed({
      get: () => props.modelValue.title,
      set: (value) => {
        console.log(value);
        const obj = {};
        obj.field = props.modelValue.field;
        obj.title = value;
        return emit("update:model-value", obj);
      },
    });

    return {
      funcChildren,
      message,
      buttonClick,
      modelFromParent,
    };
  },
});
</script>

<style>
.checkbox-input {
  border: 1px solid red;
}
div {
  margin: 15px;
}
</style>
