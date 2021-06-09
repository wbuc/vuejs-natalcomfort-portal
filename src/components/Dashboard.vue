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
        <!-- <Base-Brand-Loader
          v-if="!orderList.length"
          class="mb-6"
        ></Base-Brand-Loader>
        v-else-if="orderList.length
        "v-else-if="orderList.length"
         -->

        <v-row v-if="!orderList.length" no-gutters
          ><v-col align="center" class="my-4"
            ><v-list-item-title>No orders found. </v-list-item-title>
          </v-col></v-row
        >
        <Base-List-Basic v-else-if="orderList.length" :listData="orderList">
          <template v-slot:title="{ item }">{{ item.title }}</template>
          <template v-slot:detail="{ item }">{{ item.clientName }}</template>
          <template v-slot:actions="{ item }">
            <v-chip v-if="item.status == 1" color="info" small label outlined>
              Submitted
            </v-chip>
            <v-chip v-if="item.status == 2" color="success" small label>
              Complete
            </v-chip>
            <v-btn class="ml-3" small icon plain @click="openOrder(item)">
              <v-icon small color="">mdi-open-in-new</v-icon>
            </v-btn>
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
              <Base-Page-Input title="Order Number">
                <v-text-field
                  type="text"
                  v-model="orderItem.orderNumber"
                  autocomplete="off"
                  outlined
                  background-color="transparent"
                  flat
                  solo
                  dense
                  readonly
                  hide-details
                ></v-text-field>
              </Base-Page-Input>
            </v-row>
            <v-row>
              <v-col cols="6" class="py-0 pl-0"
                ><Base-Page-Input title="Product">
                  <v-select
                    :items="lookupProducts"
                    v-model="orderItem.product"
                    item-text="name"
                    item-value="id"
                    label="Select..."
                    flat
                    solo
                    dense
                    hide-details
                    outlined
                  ></v-select> </Base-Page-Input></v-col
              ><v-col cols="6" class="py-0 pr-0"
                ><Base-Page-Input title="Quantity">
                  <v-text-field
                    type="number"
                    v-model="orderItem.quantity"
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
            <template v-if="orderItem.status == '2'">
              <v-row>
                <div
                  class="title mt-5 mb-3 grey--text text--darken-3"
                  style="width: 100%"
                >
                  Supplier Detail
                  <v-divider></v-divider>
                </div>
              </v-row>

              <v-row>
                <v-col cols="6" class="py-0 pl-0">
                  <Base-Page-Input title="Tracking Number">
                    <v-text-field
                      type="text"
                      v-model="orderItem.trackingNumber"
                      autocomplete="off"
                      outlined
                      background-color="transparent"
                      flat
                      solo
                      dense
                      readonly
                      hide-details
                      class=""
                    ></v-text-field> </Base-Page-Input></v-col
                ><v-col cols="6" class="py-0 pr-0"
                  ><Base-Page-Input title="Delivery ETA">
                    <v-text-field
                      type="text"
                      v-model="orderItem.deliveryEta"
                      autocomplete="off"
                      outlined
                      background-color="transparent"
                      flat
                      solo
                      readonly
                      dense
                      hide-details
                    ></v-text-field> </Base-Page-Input
                ></v-col>
              </v-row>
              <v-row>
                <Base-Page-Input title="Tracking URL">
                  <v-text-field
                    type="text"
                    v-model="orderItem.trackingUrl"
                    autocomplete="off"
                    outlined
                    background-color="transparent"
                    flat
                    readonly
                    solo
                    dense
                    hide-details
                  ></v-text-field>
                </Base-Page-Input>
              </v-row>
              <v-row>
                <Base-Page-Input title="Supplier Notes">
                  <v-textarea
                    type="text"
                    v-model="orderItem.supplierNote"
                    autocomplete="off"
                    outlined
                    background-color="transparent"
                    flat
                    readonly
                    rows="3"
                    solo
                    dense
                    hide-details
                  ></v-textarea>
                </Base-Page-Input>
              </v-row>
            </template>

            <v-row>
              <div
                class="title mt-5 mb-3 grey--text text--darken-3"
                style="width: 100%"
              >
                Customer Detail
                <v-divider></v-divider>
              </div>

              <Base-Page-Input title="Full name">
                <v-text-field
                  type="text"
                  v-model="orderItem.clientName"
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
                ><Base-Page-Input title="Email">
                  <v-text-field
                    type="text"
                    v-model="orderItem.clientEmail"
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
                ><Base-Page-Input title="Phone">
                  <v-text-field
                    type="text"
                    v-model="orderItem.clientPhone"
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
            <v-row>
              <Base-Page-Input title="Delivery Address">
                <v-textarea
                  type="text"
                  v-model="orderItem.clientAddress"
                  autocomplete="off"
                  outlined
                  background-color="transparent"
                  flat
                  rows="5"
                  solo
                  dense
                  hide-details
                ></v-textarea>
              </Base-Page-Input>
            </v-row>
            <v-row>
              <Base-Page-Input title="Notes">
                <v-textarea
                  type="text"
                  v-model="orderItem.note"
                  autocomplete="off"
                  outlined
                  background-color="transparent"
                  flat
                  rows="3"
                  solo
                  dense
                  hide-details
                ></v-textarea>
              </Base-Page-Input>
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
import dayjs from "dayjs";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
//import { query, orderBy } from "firebase/firestore";

const db = firebase.firestore();

export default {
  name: "Dashboard",
  data() {
    return {
      orderList: [],
      orderItem: {
        orderNumber: "",
        product: "",
        quantity: 1,
        clientName: "",
        clientEmail: "",
        clientPhone: "",
        clientAddress: "",
        note: "",
        createdDate: "",
        created: 0,
        supplierNote: "",
        trackingUrl: "",
        trackingNumber: "",
        deliveryEta: "",
        status: "1",
      },
      lookupProducts: [],
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
              action: async () => {
                if (this.validateNewOrder()) {
                  const { uid } = firebase.auth().currentUser;
                  // Set outstanding values.
                  this.orderItem.user = uid;
                  let now = new Date();
                  this.orderItem.createdDate = now.toString();
                  this.orderItem.created = Date.now();

                  //save the order!
                  await db
                    .collection("orders")
                    .doc(this.orderItem.orderNumber)
                    .set(this.orderItem);
                  this.dialogConfig.open = false;
                  this.notification.text = "Your order has been created!";
                  this.notification.show = true;
                  this.refreshOrderList();
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
      this.orderItem = this.getEmptyOrder();
      this.setDialogContext("Create new order", "createNewOrder");
    },
    generateOrderNumber() {
      const d = new Date();
      const t = d.getTime().toString();
      const sub = t.substring(8, 20);
      const rnd = Math.floor(Math.random() * 1000 + 1);
      return `AM${sub}${rnd}`;
    },
    getEmptyOrder() {
      return {
        orderNumber: this.generateOrderNumber(),
        product: "",
        quantity: 1,
        clientName: "",
        clientEmail: "",
        clientPhone: "",
        clientAddress: "",
        note: "",
        createdDate: "",
        supplierNote: "",
        trackingUrl: "",
        trackingNumber: "",
        deliveryEta: "",
        status: "1",
      };
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
      return true;
    },
    sortOrderList(field) {
      this.orderList.sort((a, b) => (a[field] > b[field] ? -1 : 1));
    },
    async refreshOrderList() {
      this.orderList = [];
      const { uid } = firebase.auth().currentUser;
      const orderRef = db.collection("orders");
      // Get orders for current user.
      const userOrders = await orderRef
        .where("user", "==", uid)
        .orderBy("created", "desc")
        .get();
      userOrders.forEach((doc) => {
        let instance = doc.data();

        instance.title = `${dayjs(instance.createdDate).format(
          "DD MMMM YYYY"
        )} - ${instance.orderNumber}`;
        this.orderList.push(instance);

        //console.log(doc.id, "=>", instance);
      });

      this.sortOrderList("created");
      //this.orderList.sort((a, b) => (a["created"] < b["created"] ? -1 : 1));
    },
    async getLookupData() {
      this.lookupProducts = [];
      const productsRef = db.collection("products");
      // Get orders for current user.
      const products = await productsRef.get();
      products.forEach((doc) => {
        let instance = doc.data();
        instance.id = doc.id;
        this.lookupProducts.push(instance);
        //console.log(doc);
        //console.log(doc.id, "=>", instance);
      });

      this.sortOrderList("created");
      //this.orderList.sort((a, b) => (a["created"] < b["created"] ? -1 : 1));
    },
  },
  async created() {
    this.refreshOrderList();
    this.getLookupData();
  },
};
</script>

<style>
</style>