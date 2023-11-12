// store.js
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"; // Install axios using npm or yarn

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    addProduct(state, product) {
      state.products.push(product);
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      try {
        const response = await axios.get("./data/inventoryData.json");
        commit("setProducts", response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
    addProduct({ commit }, product) {
      // ... similar to the previous example
    },
  },
  getters: {
    getProducts: (state) => state.products,
  },
});
