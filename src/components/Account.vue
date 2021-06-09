<template>
  <div class="mt-4">
    <span class="title">Coming soon!</span>
  </div>
</template>

<script>
export default {
  name: "Account",
  data() {
    return {
      orderList: [
        { id: "1", title: "Order 1", status: "1" },
        {
          id: "2",
          title: "Order 2",
          description: "This is some more detail!",
          status: "2",
        },
        { id: "3", title: "Order 3", status: "2" },
        { id: "4", title: "Order 4", status: "2" },
      ],
      orderItem: {},
      notification: { show: false, multiLine: true, text: null },
      config: { ripple: false },
      errors: [],
      dialogConfig: {
        ticker: 100,
        open: false,
        title: null,
        actionContext: {
          createNewOrder: [
            {
              text: "Cancel",
              color: "grey darken-2",
              outlined: true,
              action: () => {
                this.dialogConfig.open = false;
              },
            },
            {
              text: "Ok",
              color: "success",
              action: () => {
                if (this.validateNewOrder()) {
                  //
                  //
                  // Save data to database!!!!!
                  //
                  //
                  //   this.$store
                  //     .dispatch("saveUserDetail", this.userData)
                  //     .then(() => {
                  //       this.$store.dispatch(
                  //         "notifySuccess",
                  //         `New member created!`
                  //       );
                  //       this.refreshListData();
                  //       this.dialogConfig.open = false;
                  //     });
                }
              },
            },
          ],
          viewOrder: [
            {
              text: "Cancel",
              color: "grey darken-2",
              outlined: true,
              action: () => {
                this.dialogConfig.open = false;
                this.notification.text = "Order has been created!";
                this.notification.show = true;
              },
            },
          ],
        },
        actions: [],
      },
    };
  },
  methods: {
    createNewOrder() {
      this.setDialogContext("Create new order", "createNewOrder");
    },

    openOrder(item) {
      this.orderItem = item;
      this.setDialogContext("Order detail", "viewOrder");
    },
    setDialogContext(title, ctx) {
      this.dialogConfig.title = title;
      this.dialogConfig.ticker++;
      this.dialogConfig.actions = this.dialogConfig.actionContext[ctx];

      this.errors.length = 0; // clear any previous errors.
      this.dialogConfig.open = true;
    },
    validateNewOrder() {
      // DO VALIDATION STUFF HERE!!!!!
      //   this.$store.dispatch("errorReset"); //always reset the errors.
      //   let errorFound = false;
      //   if (!this.userData.email || !isEmail(this.userData.email)) {
      //     this.$store.dispatch("errorAdd", "Email is a required field.");
      //     errorFound = true;
      //   }
      //   if (!this.userData.role) {
      //     this.$store.dispatch("errorAdd", "Role is a required field.");
      //     errorFound = true;
      //   }
      //   if (!this.userData.password || this.userData.password.length < 6) {
      //     this.$store.dispatch(
      //       "errorAdd",
      //       "Password is a required field and at least 6 characters."
      //     );
      //     errorFound = true;
      //   }
      //   if (errorFound) return false;
      //   return true;
    },
  },
  created() {
    // GET the data!
    // this.$store.dispatch("getInvoices").then((data) => {
    //   this.invoiceList = data.map((item) => {
    //     item.title = dayjs(item.created).format("DD MMMM YYYY");
    //     return item;
    //   });
    // });
  },
};
</script>

<style>
</style>