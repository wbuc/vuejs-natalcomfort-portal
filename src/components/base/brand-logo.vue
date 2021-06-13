<template>
  <div style="width: 100%">
    <div v-if="!large">
      <v-toolbar-title
        class="text-uppercase no-cursor"
        :class="`${color} text-${position}`"
      >
        <!-- <span style="border-bottom: solid 1px">Natal Comfort</span> -->
      </v-toolbar-title>
      <v-img
        src="@/assets/nc_logo.png"
        :aspect-ratio="16 / 9"
        class="center"
        justify-end
      ></v-img>
      <div
        class="
          accent--text
          subtitle-1
          font-weight-light
          text-center text-uppercase
          no-cursor
        "
      >
        Portal
      </div>
    </div>

    <div
      v-if="large"
      class="text-uppercase display-1 no-cursor"
      style="text-align: center"
      :class="color"
    >
      <!-- <span class="font-weight-light" style="border-bottom: solid 3px"
        >Natal</span
      > -->
      <!-- <span style="border-bottom: solid 3px">Natal Comfort</span> -->
      <v-img src="@/assets/nc_logo.png" class="center" justify-end></v-img>
      <div
        class="
          accent--text
          font-weight-light
          headline
          text-center text-uppercase
          no-cursor
        "
      >
        Portal
      </div>
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
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}
</style>