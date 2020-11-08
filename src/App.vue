<template>
  <div id="app">
    <div id="menu">
      <div id="brand" class="flexitem">
        <router-link to="/">
            <img id="logo" src="../images/logo.png">
        </router-link>
      </div>
      <div id="side" class="flexitem">
      <router-link to="/browse">
      <div class="menu-item browse">
        <img src="/images/browseicon.png">
      </div>
      </router-link>
        <router-link to="/cart">
        <div class="menu-item">
          <img src="../images/cart.png">
        </div>
        </router-link>
      </div>
    </div>
    <router-view />

    <div class = "footer">
      <div class="part-one">
        <h3> Website Links</h3>
          <ul id="menu2">
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/browse">Browse</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
            <li><router-link to="/cart">Cart</router-link></li>
            <li><a href="https://github.com/wesman55/CreativeProject3">GitHub Repository (URL: https://github.com/wesman55/CreativeProject3) </a></li>
          </ul>
      </div>
      <div class="part=two">
        Created by Cayman Williams and Joseph Wesley Fairbanks <br><br>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  computed: {
    numberOfItems() {
      return this.$root.$data.cart.length;
      }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#logo {
  height:100px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;

}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
}

#menu a {
  font-family: "Century Gothic", CenturyGothic, Geneva, AppleGothic, sans-serif;
}

#menu a:hover {
  color: blue;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#side {
  grid-area: side;
  display: flex;
  justify-content: flex-end;
}

#side img {
  width: 50px;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 0px;
}

.browse {
  margin-right: 50px;
}

.footer {
  border-top: 3px solid #000000;
  text-align: center;
  margin-top: 50px;
  font-family: "Century Gothic", CenturyGothic, Geneva, AppleGothic, sans-serif;
}

#menu2 {
  list-style-type: none;
}

a {
  display: block;
}

li a {
  display: block;
  color: black;
  text-align: center;
  padding: 8px 10px;
  text-decoration: none;
  font-size: 12pt;
  margin-right: 30px;
}

li a:hover {
  background-color: #C0C0C0;
}

@media only screen and (max-width: 700px) {
  #menu {
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  #logo {
    margin-bottom: 20px;
  }
}
</style>
