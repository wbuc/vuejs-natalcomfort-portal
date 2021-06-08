<template>
  <div class="mb-5">
    <div class="subtitle-1 font-weight-bold mx-1 no-cursor d-flex">
      <div :class="{ 'min-height': !denseTitle }">{{ title }}</div>
      <div class="ml-auto">
        <slot name="actions"></slot>
      </div>
    </div>
    <v-sheet
      rounded="lg"
      class="mx-1 mt-2 pa-1 elevation-0"
      flat
      :class="{ 'elevation-3': !flat, 'mt-2': !dense }"
    >
      <div :class="{ 'py-0': dense }">
        <slot></slot>
      </div>
    </v-sheet>
  </div>
</template>

<script>
export default {
  name: "component.layout.form.section",
  props: {
    title: { type: String, required: false },
    flat: { type: Boolean, default: true },
    dense: { type: Boolean, default: false },
    denseTitle: { type: Boolean, default: false },
  },
};
</script>

<style scoped>
.no-cursor {
  cursor: default;
}
.min-height {
  min-height: 44px;
}
</style>