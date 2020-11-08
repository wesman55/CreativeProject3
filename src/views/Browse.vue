<template>
<div>
  <div class="wrapper">
    <div class="search">
      <form class="pure-form">
        <i class="fas fa-search"></i><input v-model="searchText" />
      </form>
    </div>
  </div>
  <div class="pure-menu pure-menu-horizontal">
    <ul class="pure-menu-list">
      <li class="pure-menu-item"><a @click="select('All')" href="#" class="pure-menu-link">All</a></li>
      <li class="pure-menu-item"><a @click="select('Fantasy')" href="#" class="pure-menu-link">Fantasy</a></li>
      <li class="pure-menu-item"><a @click="select('Classic')" href="#" class="pure-menu-link">Classic</a></li>
      <li class="pure-menu-item"><a @click="select('Adventure')" href="#" class="pure-menu-link">Adventure</a></li>
      <li class="pure-menu-item"><a @click="select('Cards')" href="#" class="pure-menu-link">Cards</a></li>
      <li class="pure-menu-item"><a @click="select('Strategy')" href="#" class="pure-menu-link">Strategy</a></li>
      <li class="pure-menu-item"><a @click="select('Party')" href="#" class="pure-menu-link">Party</a></li>
      <li class="pure-menu-item"><a @click="select('Drawing')" href="#" class="pure-menu-link">Drawing</a></li>
    </ul>
  </div>
  <ProductList :products="products" />
</div>
</template>

<script>
import ProductList from "../components/ProductList.vue"
export default {
  name: 'Browse',
  components: {
    ProductList
  },
  data() {
    return {
      searchText: '',
      category: '',
    }
  },
  computed: {
    products() {
      if (this.searchText != '') {
        return this.$root.$data.products.filter(product => product.name.toLowerCase().search(this.searchText) >= 0);
      }
      else {
        if (this.category === "All") {
          return this.$root.$data.products.filter(product => product.name.toLowerCase().search(this.searchText) >= 0);
        }
        else if (this.category === ''){
          return this.$root.$data.products.filter(product => product.name.toLowerCase().search(this.searchText) >= 0);
        }
        return this.$root.$data.products.filter(product => product.category === this.category);
      }
    },
  },
  methods: {
    select(category) {
      this.category = category;
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
  margin-bottom: 20px;
}

form {
  display: table;
  width: 100%;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}
</style>
