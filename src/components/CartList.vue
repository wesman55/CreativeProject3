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
        </div>
        <h4> Quantity: {{product.quantity}}</h4>
        <div class = "boxes">
          <button @click="subtractOne(product)" class="quantity2"><strong>-</strong></button>
          <button @click="addOne(product)" class="quantity1"><strong>+</strong></button>
        </div>
        <button @click="removeItem(product)" class="auto"><strong>Remove Item From Cart</strong></button>
      </div>
    </div>
    <div class="total">
      <h2>Subtotal: ${{subtotal}}</h2>
      <h2>Tax (8.3%): ${{tax}}</h2>
      <h1>Total: ${{total}}</h1>
    </div>
    <button @click="submit()" class="auto2">Click Here to Confirm Purchase</button>
    <div v-if="show()">
      <h1>Thank You for your purchase!!!!<br> We will contact you shortly.</h1>
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
  data() {
    return {
      submitted: false,
    }
  },
  computed: {
    subtotal() {
    let total = 0;
    let string = '';
    let quantity = 0;
    for (let i = 0; i < this.$root.$data.cart.length; i++) {
      string = this.$root.$data.cart[i].price;
      quantity = this.$root.$data.cart[i].quantity;
      string = string.substring(1);
      total += (parseFloat(string) * quantity);
    }
      return total.toFixed(2);
    },
    tax() {
      let tax = 0;
      let total = 0;
      let string = '';
      let quantity = 0;
      for (let i = 0; i < this.$root.$data.cart.length; i++) {
        string = this.$root.$data.cart[i].price;
        quantity = this.$root.$data.cart[i].quantity;
        string = string.substring(1);
        total += (parseFloat(string) * quantity);
      }
      tax = 0.083 * total;
      return tax.toFixed(2);
    },
    total() {
      let tax = 0;
      let total = 0;
      let string = '';
      let quantity = 0;
      for (let i = 0; i < this.$root.$data.cart.length; i++) {
        string = this.$root.$data.cart[i].price;
        quantity = this.$root.$data.cart[i].quantity;
        string = string.substring(1);
        total += (parseFloat(string) * quantity);
      }
      tax = 0.083 * total;
      total = total + tax;
      return total.toFixed(2);
    },
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
      product.quantity = parseInt(product.quantity) + 1;
    },
    subtractOne(product) {
      product.quantity = parseInt(product.quantity) - 1;
      if (product.quantity == 0) {
        this.$root.$data.cart.splice(this.$root.$data.cart.indexOf(product),1);
        product.quantity = 0;
      }
    },
    submit() {
      this.submitted = true;
    },
    show() {
      if (this.submitted === true) {
        return true;
      }
      else {
        return false;
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

.auto2 {
  font-family: "Century Gothic", CenturyGothic, Geneva, AppleGothic, sans-serif;
  width: 50%;
  background-color: #000000;
  color: white;
}

.quantity1 {
  font-size: 20pt;
  padding: 0px;
  background: #22bc22;
  color: white;
  width: 20%;
}

.quantity2 {
  font-size: 20pt;
  padding: 0px;
  background: #a9a9a9;
  color: white;
  border: 2px solid black;
  width: 20%;
}


.boxes {
  display: flex;
  margin-bottom: 10px;
  justify-content: center;
}

h4 {
  font-family: "Century Gothic", CenturyGothic, Geneva, AppleGothic, sans-serif;
  margin-bottom: 0px;
  font-size: 16pt;
}

@media only screen and (max-width: 990px) {
 h1 {
    font-size: 18pt;
    margin: auto;
 }
}

</style>
