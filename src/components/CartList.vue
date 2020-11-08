<template>
<div class="wrapper">
  <div v-if="empty()">
    <h1>Your Cart is Empty</h1>
  </div>
  <div v-else>
    <h1>Your Shopping Cart:</h1>
    <div class="products">
      <div class="product" v-for="product in products" :key="product.id">
      <div class="image">
        <img :src="'/images/'+product.image">
      </div>
        <div class="info">
          <h2>{{product.name}}</h2>
          <p>{{product.category}}</p>
        </div>
        <div class="price">
          <h3>{{product.price}}</h3>
          <h4> Quantity: {{product.quantity}}</h4>
        </div>
        <button @click="removeItem(product)" class="auto"><strong>Remove Item From Cart</strong></button>
        <div class = "boxes">
          <button @click="addOne(product)" class="quantity1">Add One to Quantity</button>
          <button @click="subtractOne(product)" class="quantity2">Subtract One from Quantity</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'CartList',
  props: {
    products: Array
  },
  methods: {
    empty() {
      if (this.$root.$data.cart.length === 0) {
        return true;
      }
      else {
        return false;
      }
    },
    removeItem(product) {
      this.$root.$data.cart.splice(this.$root.$data.cart.indexOf(product),1);
      product.quantity = 0;
    },
    addOne(product) {
      product.quantity += 1;
    },
    subtractOne(product) {
      product.quantity = product.quantity - 1;
      if (product.quantity == 0) {
        this.$root.$data.cart.splice(this.$root.$data.cart.indexOf(product),1);
        product.quantity = 0;
      }
    },
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
  border: 2px solid black;
  padding-right: 40px;
  padding-bottom: 40px;
  padding-left: 40px;
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

.auto {
  margin-left: auto;
  margin-top: 10px;
  font-size: 11pt;
}

.quantity1 {
  font-size: 10pt;
  height: 50px;
  background: #22bc22;
  color: white;
  margin-top: 5px;;
  border: 2px solid black;
  width: 45%;
}

.quantity2 {
  font-size: 10pt;
  height: 50px;
  background: #a9a9a9;
  color: white;
  margin-top: 5px;;
  border: 2px solid black;
  width: 45%;
}

.boxes {
  display: flex;
}

h4 {
  font-family: "Century Gothic", CenturyGothic, Geneva, AppleGothic, sans-serif;

}

</style>
