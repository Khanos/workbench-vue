import { defineStore } from "pinia";
import { fetchProducts } from "../services";

export const useProductsStore = defineStore("products", {
  state: () => ({
    searchValue: '',
    products: [],
    filterProducts: [],
    categories: [],
    currentCategory: null,
    currentProduct: null,
  }),
  actions: {
    setSearchValue(value) {
      this.searchValue = value;
    },
    setFilterProducts(searchValue) {
      const products = this.products.filter((product) => {
        return product.title.toLowerCase().includes(searchValue.toLowerCase());
      });
      this.filterProducts = products ? products : this.products;
    },
    setProducts(products) {
      this.products = products;
    },
    setCategories(categories) {
      this.categories = categories;
    },
    setCurrentCategory(category) {
      this.currentCategory = category;
    },
    setCurrentProduct(product) {
      this.currentProduct = product;
    },
    async getProductList() {
      const products = await fetchProducts();
      this.filterProducts = products;
      this.products = products;
    },
  },
});