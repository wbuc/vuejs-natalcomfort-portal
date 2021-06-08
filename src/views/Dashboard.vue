<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col
        :xs="fieldSize.xlarge"
        :sm="fieldSize.xlarge"
        :md="fieldSize.xlarge"
        :lg="fieldSize.large"
      >
        <Dashboard></Dashboard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Dashboard-view",

  components: {
    Dashboard: () => import("@/components/Dashboard"),
  },
  data() {
    return {
      fieldSize: {
        xsmall: 3,
        small: 4,
        medium: 6,
        large: 8,
        xlarge: 12,
      },
    };
  },
};
</script>