<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col
        :xs="fieldSize.xlarge"
        :sm="fieldSize.xlarge"
        :md="fieldSize.xlarge"
        :lg="fieldSize.large"
      >
        <Account></Account>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Account-view",

  components: {
    Account: () => import("@/components/Account"),
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