<template>
  <div>
    <h1 class="display-1 grey--text font-weight-light no-cursor mb-2">
      <slot></slot>
      <slot name="description"></slot>
    </h1>
    <!-- <v-divider class="mt-1"></v-divider> -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.no-cursor {
  cursor: default;
}
</style>