<template>
  <div style="width: 100%">
    <div v-if="!large">
      <v-toolbar-title
        class="text-uppercase no-cursor"
        :class="`${color} text-${position}`"
      >
        <!-- <span class="font-weight-light" style="border-bottom: solid 1px"
          >Natal</span
        > -->
        <span style="border-bottom: solid 1px">Natal Comfort</span>
      </v-toolbar-title>
      <!-- <v-img
        src="@/assets/nc_logo.png"
        max-width="100px"
        max-height="800px"
        justify-end
      ></v-img> -->
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
      <span style="border-bottom: solid 3px">Natal Comfort</span>
      <div
        class="
          accent--text
          font-weight-light
          headline
          text-center text-uppercase
          no-cursor
          mt-2
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
</style>