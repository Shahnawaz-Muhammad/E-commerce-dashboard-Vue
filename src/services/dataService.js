import axios from "axios";

const API_URL = "/data/inventoryData.json";

console.log(API_URL, "api Data");

export default {
  getProducts() {
    return axios.get(API_URL).then((response) => response.data.products);
    console.log(response.data.products);
  },
};
