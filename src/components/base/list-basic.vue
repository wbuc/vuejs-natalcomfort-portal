<template>
  <div>
    <template v-for="(item, index) in listData">
      <v-list-item
        two-line
        :key="index"
        :link="config.link"
        :dense="config.dense"
        :ripple="config.ripple"
      >
        <v-list-item-content>
          <v-list-item-title>
            <slot name="title" v-bind:item="item">{{ `${item.name}` }}</slot>
          </v-list-item-title>
          <v-list-item-subtitle>
            <slot name="detail" v-bind:item="item"></slot>
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action class="content-row">
          <slot name="actions" v-bind:item="item"></slot>
        </v-list-item-action>
      </v-list-item>
      <v-divider
        v-if="index + 1 < listData.length && config.divider"
        :key="`divider${index}`"
      ></v-divider>
    </template>
  </div>
</template>

<script>
export default {
  name: "Base.List.Basic",
  props: {
    listData: { type: Array, default: () => [] },
    config: {
      Type: Object,
      default: () => {
        return {
          link: false,
          dense: true,
          ripple: false,
          divider: true,
        };
      },
    },
  },
  data() {
    return { searchText: null };
  },
};
</script>
<style scoped>
.no-cursor {
  cursor: default;
}
.content-row {
  flex-direction: row !important;
}
.-column {
  flex-direction: column !important;
}
.v-list-item__action {
  align-self: center !important;
}
</style>
