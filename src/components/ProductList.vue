<template>
<div class="wrapper">
  <div class="products">
    <div class="product" v-for="product in products" :key="product.id">
      <router-link to="/details">
      <div class="image" v-on:click="updateDetails(product)">
        <img :src="'/images/'+product.image">
      </div>
      <div class="info" v-on:click="updateDetails(product)">
        <h2>{{product.name}}</h2>
        <p>{{product.category}}</p>
      </div>
      </router-link>
      <div class="price">
        <h3>{{product.price}}</h3>
        <form class = "thing">
          <label>Quantity: </label>
          <input type="number" v-model="quantity" min="1" max="100000">
        </form>
        <button @click="addItem(product)" class="auto">Add to Cart</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ProductList',
  props: {
    products: Array
  },
  data() {
    return {
      quantity: '',
    }
  },
  methods: {
    addItem(product) {
      let id = product.id;
      for (let i = 0; i < this.$root.$data.cart.length; i++) {
        if (this.$root.$data.cart[i].id === id) {
            this.$root.$data.cart[i].quantity += this.quantity;
            this.quantity = '';
            return;
        }
      }
      if (this.quantity === '') {
        product.quantity = 1;
        this.$root.$data.cart.push(product);
      }
      else {
        product.quantity = this.quantity;
        this.$root.$data.cart.push(product);
        this.quantity = '';
      }
    },
    updateDetails(product) {
      this.$root.$data.current = product;
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

.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  margin: 10px;
  margin-top: 50px;
  width: 300px;
}

.product img {
  height: 300px;
  width: 300px;
  object-fit: cover;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  font-family: "Century Gothic", CenturyGothic, Geneva, AppleGothic, sans-serif;
  color: #000;
  padding: 10px 30px;
  height: 80px;
  margin-bottom: 10px;
}


.info h2 {
  font-size: 22px;
}

.price h3 {
  font-size: 24pt;
}

.info p {
  margin: 0px;
  font-size: 16px;
}

.price {
  margin-top: 10px;
  display: block;
}

button {
  background-color: #FFFFFF;
  border: 2px solid black;
  color: black;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 22px;
  margin: 4px 2px;
  border-radius: 12px;
  width: 70%
}

button:hover {
  border: 2px solid #D3D3D3;
}

button:click {
  border: 2px solid #FFFFFF;
}

.auto {
  margin-left: auto;
}

a {
  text-decoration: none;
}

.thing {
  font-family: "Century Gothic", CenturyGothic, Geneva, AppleGothic, sans-serif;
  margin-bottom: 15px;
}

</style>