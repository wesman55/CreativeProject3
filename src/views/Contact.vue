<template>
<div>
  <h1>Contact Us!</h1>
  <img class = "home" src= "\images\footer.jpg">
  <div class = "description">
    <h2> Have a Question about a product? Need a refund? <br><br>Let us Know!</h2>
    <p>Board Game Bonanza is renowned for offering high quality products and low prices.
    If you would like to talk to a representative, ask a question, schedule a delivery, or
    just want to chat call us at <strong> 602-791-GAME </strong> or email us at
    <strong> boardgamesbonanza@gmail.com </strong> </p>
  </div>
  <section class="services-grid">
    <div class="box">
      <router-link to="/">
      <img class = "image" src="/images/home2.jpg" alt="Home">
      <h6>Home</h6>
      </router-link>
    </div>
    <div class="box">
      <router-link to="/cart">
      <img class = "image" src="/images/cart.jpg" alt="Cart">
      <h6>View Cart</h6>
      </router-link>
    </div>
    <div class="box">
      <router-link to="/browse">
      <img class = "image" src="/images/browse.jpg" alt="Browse">
      <h6>Browse</h6>
      </router-link>
    </div>
  </section>
  <img class = "home" src= "\images\heading.jpg">
</div>
</template>

<style>

.description {
  width: 100%;
}
@media only screen and (max-width: 990px) {
  h2 {
    font-size: 18pt;
  }
  p {
    font-size: 14pt;
  }
}
</style>
