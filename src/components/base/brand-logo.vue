<template>
  <div style="width: 100%">
    <v-toolbar-title
      v-if="!large"
      class="text-uppercase no-cursor"
      :class="`${color} text-${position}`"
    >
      <span class="font-weight-light" style="border-bottom: solid 1px"
        >Natal</span
      >
      <span style="border-bottom: solid 1px">Comfort</span>
    </v-toolbar-title>
    <div
      v-if="large"
      class="text-uppercase display-1 no-cursor"
      style="text-align: center"
      :class="color"
    >
      <span class="font-weight-light" style="border-bottom: solid 3px"
        >Natal</span
      >
      <span style="border-bottom: solid 3px">Comfort</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Base.Brand.Logo",
  props: {
    large: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: "grey--text",
    },
    position: {
      type: String,
      default: "left",
    },
  },
};
</script>

<style scoped>
.no-cursor {
  cursor: default;
}
</style>