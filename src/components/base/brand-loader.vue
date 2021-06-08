<template>
  <div
    style="width: 100%"
    class="pt-10"
    :class="position === 'center' ? 'text-center' : ''"
  >
    <v-progress-circular
      :size="large ? 70 : 40"
      :width="large ? 5 : 3"
      :color="color"
      indeterminate
    ></v-progress-circular>
  </div>
</template>

<script>
export default {
  name: "Base.Brand.Loader",
  props: {
    large: {
      type: Boolean,
      default: true,
    },
    color: {
      type: String,
      default: "secondary",
    },
    position: {
      type: String,
      default: "center",
    },
  },
};
</script>

<style scoped>
.no-cursor {
  cursor: default;
}
</style>