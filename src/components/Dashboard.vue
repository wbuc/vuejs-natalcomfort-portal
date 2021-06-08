<template>
  <div>
    <v-fade-transition mode="out-in">
      <Base-Page-Card title="Order History">
        <template v-slot:actions>
          <v-btn
            @click="createNewOrder"
            :ripple="config.ripple"
            justify-end
            large
            min-width="100"
            color="accent"
            class="text-capitalize"
            >Create Order</v-btn
          ></template
        >
        <Base-Brand-Loader v-if="!orderList.length"></Base-Brand-Loader>
        <Base-List-Basic v-else-if="orderList.length" :listData="orderList">
          <template v-slot:title="{ item }">{{ item.title }}</template>
          <template v-slot:detail="{ item }">{{ item.description }}</template>
          <template v-slot:actions="{ item }">
            <v-btn
              small
              icon
              plain
              @click="openOrder(item)"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon small color="">mdi-open-in-new</v-icon>
            </v-btn>
            <!-- <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
               
              </template>
              <span>Open new tab</span>
            </v-tooltip> -->
          </template>
        </Base-List-Basic>
      </Base-Page-Card>
    </v-fade-transition>
    <Base-Dialog
      :show="dialogConfig.open"
      :actions="dialogConfig.actions"
      :key="dialogConfig.ticker"
    >
      <template v-slot:title>{{ dialogConfig.title }}</template>
      <template>
        <Base-Dialog-Card>
          <v-container>
            <v-row>
              <Base-Page-Input title="Email">
                <v-text-field
                  type="text"
                  v-model="orderItem.id"
                  autocomplete="off"
                  outlined
                  background-color="transparent"
                  flat
                  solo
                  dense
                  hide-details
                ></v-text-field>
              </Base-Page-Input>
            </v-row>
            <v-row>
              <v-col cols="6" class="py-0 pl-0"
                ><Base-Page-Input title="Name">
                  <v-text-field
                    type="text"
                    v-model="orderItem.title"
                    autocomplete="off"
                    outlined
                    background-color="transparent"
                    flat
                    solo
                    dense
                    hide-details
                    class=""
                  ></v-text-field> </Base-Page-Input></v-col
              ><v-col cols="6" class="py-0 pr-0"
                ><Base-Page-Input title="Surname">
                  <v-text-field
                    type="text"
                    v-model="orderItem.title"
                    autocomplete="off"
                    outlined
                    background-color="transparent"
                    flat
                    solo
                    dense
                    hide-details
                  ></v-text-field> </Base-Page-Input
              ></v-col>
            </v-row>

            <v-row v-if="errors.length > 0">
              <Base-Error-Message :errors="errors"></Base-Error-Message>
            </v-row>
          </v-container>
        </Base-Dialog-Card>
      </template>
    </Base-Dialog>
    <v-snackbar
      v-model="notification.show"
      color="success"
      :multi-line="notification.multiLine"
      top
    >
      <v-icon large left>mdi-information-outline</v-icon>
      {{ notification.text }}

      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="notification.show = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      orderList: [
        { id: "1", title: "Order 1" },
        { id: "2", title: "Order 2", description: "This is some more detail!" },
        { id: "3", title: "Order 3" },
        { id: "4", title: "Order 4" },
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