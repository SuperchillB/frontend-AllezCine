let barbieClick = 0;
let keychainClick = 0;
let parfumClick = 0;
let gunClick = 0
let popClick = 0
let watchesClick = 0
let chopperClick = 0
let legoClick = 0

Vue.component("item", {
  template: "#product-box",
  props: [
    "item_data", "buyitems"
  ],
  methods: {
    addItem: function(item_data) {
      if (item_data.id == "barbie") {
        barbieClick += 1;
        if (barbieClick <= 1) {
          this.pushData();
        } else {
          let i = this.findIndex(this.$parent.buyitems, "id", "barbie");
          this.$parent.buyitems[i].qty += 1;
          this.$parent.buyitems[i].total = this.$parent.buyitems[i].qty * this.$parent.buyitems[i].price;
          console.log(i);
        }
      } else if (item_data.id == "keychain") {
        keychainClick += 1;
        if (keychainClick <= 1) {
          this.pushData();
        } else {
          let i = this.findIndex(this.$parent.buyitems, "id", "keychain");
          this.$parent.buyitems[i].qty += 1;
          this.$parent.buyitems[i].total = this.$parent.buyitems[i].qty * this.$parent.buyitems[i].price;
        }
      } else if (item_data.id == "parfum") {
        parfumClick += 1;
        if (parfumClick <= 1) {
          this.pushData();
        } else {
          let i = this.findIndex(this.$parent.buyitems, "id", "parfum");
          this.$parent.buyitems[i].qty += 1;
          this.$parent.buyitems[i].total = this.$parent.buyitems[i].qty * this.$parent.buyitems[i].price;
        }
      } else if (item_data.id == "gun") {
        gunClick += 1;
        if (gunClick <= 1) {
          this.pushData();
        } else {
          let i = this.findIndex(this.$parent.buyitems, "id", "gun");
          this.$parent.buyitems[i].qty += 1;
          this.$parent.buyitems[i].total = this.$parent.buyitems[i].qty * this.$parent.buyitems[i].price;
        }
      } else if (item_data.id == "watches") {
        watchesClick += 1;
        if (watchesClick <= 1) {
          this.pushData();
        } else {
          let i = this.findIndex(this.$parent.buyitems, "id", "watches");
          this.$parent.buyitems[i].qty += 1;
          this.$parent.buyitems[i].total = this.$parent.buyitems[i].qty * this.$parent.buyitems[i].price;
        }
      } else if (item_data.id == "pop") {
        popClick += 1;
        if (popClick <= 1) {
          this.pushData();
        } else {
          let i = this.findIndex(this.$parent.buyitems, "id", "pop");
          this.$parent.buyitems[i].qty += 1;
          this.$parent.buyitems[i].total = this.$parent.buyitems[i].qty * this.$parent.buyitems[i].price;
        }
      } else if (item_data.id == "chopper") {
        chopperClick += 1;
        if (chopperClick <= 1) {
          this.pushData();
        } else {
          let i = this.findIndex(this.$parent.buyitems, "id", "chopper");
          this.$parent.buyitems[i].qty += 1;
          this.$parent.buyitems[i].total = this.$parent.buyitems[i].qty * this.$parent.buyitems[i].price;
        }
      } else if (item_data.id == "lego") {
        legoClick += 1;
        if (legoClick <= 1) {
          this.pushData();
        } else {
          let i = this.findIndex(this.$parent.buyitems, "id", "lego");
          this.$parent.buyitems[i].qty += 1;
          this.$parent.buyitems[i].total = this.$parent.buyitems[i].qty * this.$parent.buyitems[i].price;
        }
      } else {
        paperClick += 1;
        if (paperClick <= 1) {
          this.pushData();
        } else {
          let i = this.findIndex(this.$parent.buyitems, "id", "paper-bag");
          this.$parent.buyitems[i].qty += 1;
          this.$parent.buyitems[i].total = this.$parent.buyitems[i].qty * this.$parent.buyitems[i].price;
        }
      }
      console.log(barbieClick, keychainClick, parfumClick,gunClick, popClick, watchesClick, chopperClick, legoClick);


    },
    pushData: function() {
      this.$parent.buyitems.push({
        img: this.item_data.img,
        title: this.item_data.title,
        price: this.item_data.price,
        qty: 1,
        total: this.item_data.price,
        id: this.item_data.id
      });
    },
    findIndex: function(array, attr, value) {
      for (let i = 0; i < array.length; i += 1) {
        if (array[i][attr] === value) {
          return i;
        }
      }
      return -1;
    }
  }
});
Vue.component("buyitem", {
  template: "#buy-box",
  props: [
    "buy_data", "buyitems"
  ],
  methods: {
    removeItem: function(buy_data) {
      let index = this.$parent.buyitems.indexOf(buy_data);
      this.$parent.buyitems.splice(index, 1);
      if (buy_data.id == "barbie") {
        barbieClick = 0;
      } else if (buy_data.id == "keychain") {
        keychainClick = 0;
      } else if (buy_data.id == "parfum") {
        parfumClick = 0;
      } else if (buy_data.id == "gun") {
        gunClick = 0;
      } else if (buy_data.id == "watches") {
        watchesClick = 0;
      } else if (buy_data.id == "pop") {
        popClick = 0;
      } else if (buy_data.id == "chopper") {
        chopperClick = 0;
      } else if (buy_data.id == "lego") {
        legoClick = 0;
      } else {
        paperClick = 0;

      }
                  console.log(barbieClick, keychainClick, parfumClick,gunClick, popClick, watchesClick, chopperClick, legoClick);
    },
    plusQty: function(buy_data) {
      buy_data.qty += 1;
      buy_data.total = buy_data.qty * buy_data.price;
    },
    minusQty: function(buy_data) {
      buy_data.qty -= 1;
      if (buy_data.qty < 0) {
        buy_data.qty = 0;
      }
      buy_data.total = buy_data.qty * buy_data.price;
    }

  }
});

let app = new Vue({
  el: "#app",
  data: {
    items: [
      {
        img: "http://4.bp.blogspot.com/-g8GxP7P7KqM/VjjIPOD_FnI/AAAAAAAAK0Y/vteB3iHf_8w/s1600/04%2Bjames-bond-007-thunderball-action-figure-gilbert-1965.jpg",
        title: "Barbie Bond",
        price: "250",
        id: "barbie"
      }, {
        img: "https://cdn.nwtv.nl/wp-content/uploads/James-Bond-Sleutelhanger1.jpg",
        title: "keychain",
        price: "24",
        id: "keychain"
      }, {
        img: "http://3.bp.blogspot.com/-Rj0koVzszuo/VjjQAnrvYgI/AAAAAAAAK1o/UXyHZsxGJLI/s1600/23%2Bjames-bond-fragrance-2012-01.jpg",
        title: "Bond's Parfum",
        price: "89",
        id: "parfum"
      }, {
        img: "https://i.pinimg.com/originals/49/24/d8/4924d88c80ac377f739ff8123ca1c853.jpg",
        title: "Golden Gun",
        price: "777",
        id: "gun"
      }, {
        img: "http://www.jbsuits.com/blog/wp-content/uploads/2015/02/Watches-and-accessories.jpg",
        title: "Spectre Watches",
        price: "373",
        id: "watches"
      }, {
        img: "https://www.fandegoodies.com/gfphotos/FK24701.jpg",
        title: "POP 007",
        price: "100",
        id: "pop"
      }, {
        img: "http://4.bp.blogspot.com/-qz790J8ldY8/VjjIH8jzLwI/AAAAAAAAK1I/FTHCfDqm01c/s1600/05%2B245_l.jpg",
        title: "007 Chopper",
        price: "207",
        id: "chopper"
      }, {
        img: "http://fc09.deviantart.net/fs71/f/2013/149/9/1/james_bond_lego_set_5_by_jeffach-d66twju.jpg",
        title: "Lego 007",
        price: "77",
        id: "lego"
      }
    ],
    buyitems: []
  },
  methods: {
    total: function() {
      let sum = 0;
      this.buyitems.forEach(function(buyitem) {
        sum += parseInt(buyitem.total);
      });
      return sum;
    }
  }
});
