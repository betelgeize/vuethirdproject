/* eslint-disable */
<template>
  <div>
    <hello-world></hello-world>
    <button v-on:click="addLike">Like</button>
    <button v-on:click="disLike">Dislike</button>
    <div>{{ likes }}</div>
    <div>{{ dislikes }}</div>
  </div>
  <hr />
  <check-box-input
    :label="label"
    model="mail.newsletterSub"
    id="contact-terms"
    @change-checkbox="func"
    v-model="parentModel"
  />
  <div>ModelName emit {{ modelName }}</div>
  <div>{{ parentModel.field }} {{ parentModel.title }}</div>
  <!--    :label="checkboxOptions.label"
    :dark="checkboxOptions.dark"-->
</template>

<script>
import { ref } from "vue";
import CheckBoxInput from "@/components/CheckBoxInput";
import { HelloWorld } from "@/components/HelloWorld";

export default {
  components: {
    CheckBoxInput,
    HelloWorld,
  },
  setup() {
    const label = ref("label");
    const mail = ref({ newsletterSub: "Модель из пропса" });
    let likes = ref(0);
    let dislikes = ref(5);
    let modelName = ref("Модель родительского компонента");
    let parentModel = ref({
      field: "Field",
      title: "Header",
    });

    const addLike = () => {
      likes.value += 1;
    };
    const disLike = () => {
      dislikes.value += 1;
    };
    const func = (e) => {
      console.log("Событие сработало", e.target.value, e.target.checked, e);
      modelName.value = e.target.checked;
    };

    return {
      likes,
      dislikes,
      label,
      modelName,
      mail,
      addLike,
      disLike,
      func,
      parentModel,
    };
  },
};
</script>

<style></style>
